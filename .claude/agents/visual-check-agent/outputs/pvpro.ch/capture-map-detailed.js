const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureMapDetailed() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/pvpro.ch/.claude/agents/visual-check-agent/outputs', 'pvpro.ch', timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  try {
    // Desktop - high resolution for detail
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    await page.goto('https://pvpro.ch', {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    await page.waitForTimeout(2000);

    // Look for the orange Switzerland map
    const mapSection = await page.$('section svg, [class*="map"] svg, svg path[fill*="orange"], svg path[fill="#FF8C00"], svg path[fill="#FFA500"]');

    if (mapSection) {
      console.log('Found SVG map element');
      await mapSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      // Get the bounding box of the map
      const box = await mapSection.boundingBox();
      if (box) {
        console.log('Map bounding box:', box);
      }
    } else {
      // Scroll to the section with text about regions
      console.log('Scrolling to find map section');
      await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, p'));
        const mapHeading = headings.find(h =>
          h.textContent.includes('Zahlen Sie nicht mehr als nötig') ||
          h.textContent.includes('Solaranlage') ||
          h.textContent.includes('Region')
        );
        if (mapHeading) {
          mapHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
      await page.waitForTimeout(1500);
    }

    // Capture the map section
    const mapScreenshot = path.join(outputDir, 'desktop-map-focused.png');
    await page.screenshot({
      path: mapScreenshot,
      fullPage: false
    });

    // Also capture with some scroll variations to ensure we get the map
    await page.evaluate(() => window.scrollBy(0, -200));
    await page.waitForTimeout(500);
    const mapScreenshot2 = path.join(outputDir, 'desktop-map-view2.png');
    await page.screenshot({
      path: mapScreenshot2,
      fullPage: false
    });

    await page.evaluate(() => window.scrollBy(0, 400));
    await page.waitForTimeout(500);
    const mapScreenshot3 = path.join(outputDir, 'desktop-map-view3.png');
    await page.screenshot({
      path: mapScreenshot3,
      fullPage: false
    });

    // Try to isolate just the SVG map element if we can find it
    const svgElements = await page.$$('svg');
    console.log(`Found ${svgElements.length} SVG elements on page`);

    for (let i = 0; i < svgElements.length; i++) {
      const svg = svgElements[i];
      const box = await svg.boundingBox();
      if (box && box.width > 100 && box.height > 100) {
        await svg.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        const svgPath = path.join(outputDir, `svg-element-${i}.png`);
        await page.screenshot({
          path: svgPath,
          clip: {
            x: Math.max(0, box.x - 20),
            y: Math.max(0, box.y - 20),
            width: Math.min(box.width + 40, 1920),
            height: Math.min(box.height + 40, 1080)
          }
        });
        console.log(`Captured SVG ${i} at position:`, box);
      }
    }

    await context.close();

    console.log('Screenshots saved to:', outputDir);
    return {
      success: true,
      outputDir,
      files: fs.readdirSync(outputDir)
    };

  } catch (error) {
    console.error('Error:', error.message);
    return {
      success: false,
      error: error.message
    };
  } finally {
    await browser.close();
  }
}

captureMapDetailed().then(result => {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
});
