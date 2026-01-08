import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

interface VisualCheckResult {
  site: string;
  timestamp: string;
  status: 'success' | 'error';
  screenshots: {
    desktop: string;
    mobile: string;
  };
  consoleErrors: string[];
  metrics: {
    loadTimeMs: number;
    statusCode: number;
  };
  textFitIssues?: string[];
  error?: string;
}

async function checkStep2(): Promise<VisualCheckResult> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/pvpro.ch/visual-checks/pvpro.ch', timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors: string[] = [];
  const textFitIssues: string[] = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({ headless: false }); // Non-headless for debugging

  try {
    console.log('Waiting 60 seconds before starting...');
    await new Promise(resolve => setTimeout(resolve, 60000));
    console.log('Wait complete, starting visual check...');

    // Desktop screenshot
    const desktopContext = await browser.newContext({
      viewport: { width: 1366, height: 768 }
    });
    const desktopPage = await desktopContext.newPage();

    desktopPage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    console.log('Navigating to https://pvpro.ch...');
    const response = await desktopPage.goto('https://pvpro.ch', {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    statusCode = response?.status() || 0;
    console.log(`Page loaded with status: ${statusCode}`);

    // Wait a bit for any animations or dynamic content
    await desktopPage.waitForTimeout(2000);

    // Look for the "Ja" button on step 1
    console.log('Looking for "Ja" button on step 1...');
    const jaButton = await desktopPage.locator('text=Ja').first();

    if (await jaButton.isVisible({ timeout: 5000 })) {
      console.log('Found "Ja" button, clicking...');
      await jaButton.click();

      // Wait for step 2 to appear
      await desktopPage.waitForTimeout(1000);
      console.log('Step 2 should now be visible');
    } else {
      throw new Error('Could not find "Ja" button on step 1');
    }

    // Capture desktop screenshot of step 2
    const desktopPath = path.join(outputDir, 'step2-desktop.png');
    console.log(`Capturing desktop screenshot to: ${desktopPath}`);
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: true
    });

    // Check for text overflow issues on building type boxes
    const buildingTypeBoxes = await desktopPage.locator('[class*="building"], [class*="type"], button, .option').all();

    for (let i = 0; i < buildingTypeBoxes.length; i++) {
      const box = buildingTypeBoxes[i];
      const boundingBox = await box.boundingBox();

      if (boundingBox) {
        // Check if text overflows
        const scrollWidth = await box.evaluate(el => el.scrollWidth);
        const clientWidth = await box.evaluate(el => el.clientWidth);
        const scrollHeight = await box.evaluate(el => el.scrollHeight);
        const clientHeight = await box.evaluate(el => el.clientHeight);

        if (scrollWidth > clientWidth || scrollHeight > clientHeight) {
          const text = await box.textContent();
          textFitIssues.push(`Box ${i}: Text overflow detected - "${text?.substring(0, 50)}..."`);
        }
      }
    }

    const loadTimeMs = Date.now() - startTime;
    await desktopContext.close();

    // Mobile screenshot
    console.log('Capturing mobile screenshot...');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true
    });
    const mobilePage = await mobileContext.newPage();

    await mobilePage.goto('https://pvpro.ch', {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    await mobilePage.waitForTimeout(2000);

    // Click "Ja" on mobile
    const jaButtonMobile = await mobilePage.locator('text=Ja').first();
    if (await jaButtonMobile.isVisible({ timeout: 5000 })) {
      await jaButtonMobile.click();
      await mobilePage.waitForTimeout(1000);
    }

    const mobilePath = path.join(outputDir, 'step2-mobile.png');
    console.log(`Capturing mobile screenshot to: ${mobilePath}`);
    await mobilePage.screenshot({
      path: mobilePath,
      fullPage: true
    });

    await mobileContext.close();

    return {
      site: 'pvpro.ch',
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop: desktopPath,
        mobile: mobilePath
      },
      consoleErrors,
      metrics: {
        loadTimeMs,
        statusCode
      },
      textFitIssues: textFitIssues.length > 0 ? textFitIssues : undefined
    };

  } catch (error) {
    return {
      site: 'pvpro.ch',
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
      error: error instanceof Error ? error.message : String(error)
    };
  } finally {
    await browser.close();
  }
}

checkStep2().then(result => {
  console.log('\n=== Visual Check Results ===');
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.status === 'success' ? 0 : 1);
});
