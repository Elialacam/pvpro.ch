const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

async function visualCheckMap(url, siteName) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/pvpro.ch/.claude/agents/visual-check-agent/outputs', siteName, timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({ headless: true });

  try {
    // Desktop screenshots
    const desktopContext = await browser.newContext({
      viewport: { width: 1366, height: 768 }
    });
    const desktopPage = await desktopContext.newPage();

    desktopPage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleErrors.push(`[DESKTOP ${msg.type()}] ${msg.text()}`);
      }
    });

    const response = await desktopPage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    statusCode = response?.status() || 0;
    const loadTimeMs = Date.now() - startTime;

    // Wait a bit for any animations to complete
    await desktopPage.waitForTimeout(2000);

    // Capture full page
    const desktopFullPath = path.join(outputDir, 'desktop-fullpage.png');
    await desktopPage.screenshot({
      path: desktopFullPath,
      fullPage: true
    });

    // Try to find and scroll to the map section
    const mapSelectors = [
      'svg[viewBox*="Switzerland"]',
      'svg path[id*="canton"]',
      'section:has(svg)',
      '[class*="map"]',
      '[id*="map"]',
      'svg[width] path[d*="M"]'
    ];

    let mapFound = false;
    for (const selector of mapSelectors) {
      try {
        const element = await desktopPage.$(selector);
        if (element) {
          console.log(`Found map element with selector: ${selector}`);
          await element.scrollIntoViewIfNeeded();
          await desktopPage.waitForTimeout(1000);
          mapFound = true;
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    // If no specific map found, scroll to middle/bottom of page
    if (!mapFound) {
      console.log('No map element found with selectors, scrolling through page sections');
      // Scroll to 60% of page (maps are often in the middle-bottom)
      await desktopPage.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight * 0.6);
      });
      await desktopPage.waitForTimeout(1000);
    }

    // Capture screenshot of map section
    const desktopMapPath = path.join(outputDir, 'desktop-map-section.png');
    await desktopPage.screenshot({
      path: desktopMapPath,
      fullPage: false
    });

    await desktopContext.close();

    // Mobile screenshots
    const iPhone12 = devices['iPhone 12'];
    const mobileContext = await browser.newContext({ ...iPhone12 });
    const mobilePage = await mobileContext.newPage();

    mobilePage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleErrors.push(`[MOBILE ${msg.type()}] ${msg.text()}`);
      }
    });

    await mobilePage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    await mobilePage.waitForTimeout(2000);

    // Capture full page mobile
    const mobileFullPath = path.join(outputDir, 'mobile-fullpage.png');
    await mobilePage.screenshot({
      path: mobileFullPath,
      fullPage: true
    });

    // Scroll to map section on mobile
    mapFound = false;
    for (const selector of mapSelectors) {
      try {
        const element = await mobilePage.$(selector);
        if (element) {
          await element.scrollIntoViewIfNeeded();
          await mobilePage.waitForTimeout(1000);
          mapFound = true;
          break;
        }
      } catch (e) {
        // Continue
      }
    }

    if (!mapFound) {
      await mobilePage.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight * 0.6);
      });
      await mobilePage.waitForTimeout(1000);
    }

    const mobileMapPath = path.join(outputDir, 'mobile-map-section.png');
    await mobilePage.screenshot({
      path: mobileMapPath,
      fullPage: false
    });

    await mobileContext.close();

    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop_fullpage: desktopFullPath,
        desktop_map_section: desktopMapPath,
        mobile_fullpage: mobileFullPath,
        mobile_map_section: mobileMapPath
      },
      consoleErrors,
      metrics: {
        loadTimeMs,
        statusCode
      }
    };

  } catch (error) {
    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'error',
      screenshots: {
        desktop_fullpage: '',
        desktop_map_section: '',
        mobile_fullpage: '',
        mobile_map_section: ''
      },
      consoleErrors,
      metrics: {
        loadTimeMs: Date.now() - startTime,
        statusCode: statusCode || 0
      },
      error: error.message
    };
  } finally {
    await browser.close();
  }
}

const url = 'https://pvpro.ch';
const siteName = 'pvpro.ch';

visualCheckMap(url, siteName).then(result => {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
