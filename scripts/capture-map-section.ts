import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function captureMapSection() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/pvpro.ch/.claude/agents/visual-check-agent/outputs/pvpro.ch', timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  try {
    // Desktop screenshot
    const context = await browser.newContext({
      viewport: { width: 1366, height: 768 }
    });
    const page = await context.newPage();

    console.log('Navigating to https://pvpro.ch...');
    await page.goto('https://pvpro.ch', {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    console.log('Page loaded, looking for map section...');

    // Wait for the section with the text "Zahlen Sie nicht mehr als nötig"
    const mapSection = await page.locator('text=Zahlen Sie nicht mehr als nötig').first();

    // Scroll to the section
    await mapSection.scrollIntoViewIfNeeded();

    // Wait a bit for any animations to complete
    await page.waitForTimeout(2000);

    // Try to find the parent section/container
    // Look for common section tags or divs that might contain both text and map
    const sectionElement = await page.locator('section, div').filter({ hasText: 'Zahlen Sie nicht mehr als nötig' }).first();

    const screenshotPath = path.join(outputDir, 'swiss-map-section-full.png');

    // Take screenshot of the entire section
    await sectionElement.screenshot({
      path: screenshotPath
    });

    console.log(`Full section screenshot saved to: ${screenshotPath}`);

    // Also take a full page screenshot for reference
    const fullPagePath = path.join(outputDir, 'full-page.png');
    await page.screenshot({
      path: fullPagePath,
      fullPage: true
    });

    console.log(`Full page screenshot saved to: ${fullPagePath}`);

    await context.close();

    return {
      status: 'success',
      screenshots: {
        section: screenshotPath,
        fullPage: fullPagePath
      },
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      status: 'error',
      error: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString()
    };
  } finally {
    await browser.close();
  }
}

captureMapSection().then(result => {
  console.log(JSON.stringify(result, null, 2));
});
