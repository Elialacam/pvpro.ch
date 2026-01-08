const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

async function visualCheck(url, siteName) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/solarheim.com/.claude/agents/visual-check-agent/outputs', siteName, timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({
    headless: true,
    args: ['--ignore-certificate-errors']
  });

  try {
    // Desktop screenshot
    const desktopContext = await browser.newContext({
      viewport: { width: 1366, height: 768 },
      ignoreHTTPSErrors: true
    });
    const desktopPage = await desktopContext.newPage();

    desktopPage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    const response = await desktopPage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    statusCode = response?.status() || 0;
    const loadTimeMs = Date.now() - startTime;

    // Wait a bit more to ensure all images load
    await desktopPage.waitForTimeout(3000);

    const desktopPath = path.join(outputDir, 'desktop.png');
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: true
    });

    // Capture hero section separately (first 800px)
    const desktopHeroPath = path.join(outputDir, 'desktop-hero.png');
    await desktopPage.screenshot({
      path: desktopHeroPath,
      clip: { x: 0, y: 0, width: 1366, height: 800 }
    });

    await desktopContext.close();

    // Mobile screenshot
    const iPhone12 = devices['iPhone 12'];
    const mobileContext = await browser.newContext({
      ...iPhone12,
      ignoreHTTPSErrors: true
    });
    const mobilePage = await mobileContext.newPage();

    await mobilePage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    // Wait for images
    await mobilePage.waitForTimeout(3000);

    const mobilePath = path.join(outputDir, 'mobile.png');
    await mobilePage.screenshot({
      path: mobilePath,
      fullPage: true
    });

    await mobileContext.close();

    return {
      site: siteName,
      url: url,
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop: desktopPath,
        mobile: mobilePath,
        desktopHero: desktopHeroPath
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
      url: url,
      timestamp: new Date().toISOString(),
      status: 'error',
      screenshots: {
        desktop: '',
        mobile: ''
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

async function analyzeSites() {
  const sites = [
    { url: 'https://www.offercheck.ch', name: 'offercheck-retry' },
    { url: 'https://www.local.ch', name: 'local-ch' },
    { url: 'https://www.renovero.ch', name: 'renovero' },
    { url: 'https://www.ofri.ch', name: 'ofri' }
  ];

  const results = [];

  for (const site of sites) {
    console.log(`\n=== Checking ${site.name} ===\n`);
    try {
      const result = await visualCheck(site.url, site.name);
      results.push(result);
      console.log(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error(`Failed to check ${site.name}:`, error.message);
    }
  }

  return results;
}

analyzeSites().then(results => {
  console.log('\n\n=== SUMMARY ===');
  console.log(`Total sites checked: ${results.length}`);
  console.log(`Successful: ${results.filter(r => r.status === 'success').length}`);
  console.log(`Failed: ${results.filter(r => r.status === 'error').length}`);
});
