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

async function checkStep2Focused(): Promise<VisualCheckResult> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/pvpro.ch/visual-checks/pvpro.ch', timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors: string[] = [];
  const textFitIssues: string[] = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({ headless: false });

  try {
    console.log('Waiting 60 seconds before starting...');
    await new Promise(resolve => setTimeout(resolve, 60000));
    console.log('Wait complete, starting visual check...');

    // Desktop check
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

    // Wait for the form to be visible
    await desktopPage.waitForTimeout(2000);

    // Look for the "Ja" button
    console.log('Looking for "Ja" button on step 1...');
    const jaButton = await desktopPage.locator('button:has-text("Ja"), a:has-text("Ja")').first();

    if (await jaButton.isVisible({ timeout: 5000 })) {
      console.log('Found "Ja" button, clicking...');
      await jaButton.click();

      // Wait for step 2 to appear and animations to complete
      await desktopPage.waitForTimeout(2000);
      console.log('Waiting for step 2 to be visible...');

      // Try to find step 2 heading or building type options
      const step2Visible = await desktopPage.locator('text=/Welche Art von Gebäude|Einfamilienhaus|Mehrfamilienhaus|Gewerbe/i').first().isVisible({ timeout: 5000 }).catch(() => false);

      if (step2Visible) {
        console.log('Step 2 is visible!');

        // Scroll to the step 2 section
        const step2Element = await desktopPage.locator('text=/Welche Art von Gebäude|Einfamilienhaus|Mehrfamilienhaus/i').first();
        await step2Element.scrollIntoViewIfNeeded();
        await desktopPage.waitForTimeout(500);

        // Get the form container or step 2 container
        const formContainer = await desktopPage.locator('[class*="step"], [class*="form"], [class*="container"]').first();
        const boundingBox = await formContainer.boundingBox().catch(() => null);

        if (boundingBox) {
          console.log('Taking focused screenshot of step 2 area...');
        }
      } else {
        console.log('Warning: Step 2 may not be visible yet');
      }
    } else {
      throw new Error('Could not find "Ja" button on step 1');
    }

    // Take full page screenshot
    const desktopPath = path.join(outputDir, 'step2-desktop-full.png');
    console.log(`Capturing desktop screenshot to: ${desktopPath}`);
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: true
    });

    // Also take a viewport screenshot (what's currently visible)
    const desktopViewportPath = path.join(outputDir, 'step2-desktop-viewport.png');
    await desktopPage.screenshot({
      path: desktopViewportPath,
      fullPage: false
    });

    // Check all buttons/boxes for text overflow
    const allButtons = await desktopPage.locator('button, [role="button"], .option, [class*="card"]').all();
    console.log(`Checking ${allButtons.length} elements for text overflow...`);

    for (let i = 0; i < allButtons.length; i++) {
      const element = allButtons[i];
      try {
        const isVisible = await element.isVisible();
        if (!isVisible) continue;

        const scrollWidth = await element.evaluate(el => el.scrollWidth);
        const clientWidth = await element.evaluate(el => el.clientWidth);
        const scrollHeight = await element.evaluate(el => el.scrollHeight);
        const clientHeight = await element.evaluate(el => el.clientHeight);
        const text = await element.textContent();

        if (scrollWidth > clientWidth + 2 || scrollHeight > clientHeight + 2) {
          textFitIssues.push(`Element ${i}: Overflow detected - Width: ${scrollWidth} > ${clientWidth}, Height: ${scrollHeight} > ${clientHeight}, Text: "${text?.trim().substring(0, 100)}"`);
        }
      } catch (e) {
        // Skip elements that cause errors
      }
    }

    const loadTimeMs = Date.now() - startTime;
    await desktopContext.close();

    // Mobile check
    console.log('Starting mobile check...');
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
    const jaButtonMobile = await mobilePage.locator('button:has-text("Ja"), a:has-text("Ja")').first();
    if (await jaButtonMobile.isVisible({ timeout: 5000 })) {
      await jaButtonMobile.click();
      await mobilePage.waitForTimeout(2000);

      // Scroll to step 2
      const step2Mobile = await mobilePage.locator('text=/Welche Art von Gebäude|Einfamilienhaus|Mehrfamilienhaus/i').first();
      await step2Mobile.scrollIntoViewIfNeeded().catch(() => {});
      await mobilePage.waitForTimeout(500);
    }

    const mobilePath = path.join(outputDir, 'step2-mobile-full.png');
    console.log(`Capturing mobile screenshot to: ${mobilePath}`);
    await mobilePage.screenshot({
      path: mobilePath,
      fullPage: true
    });

    const mobileViewportPath = path.join(outputDir, 'step2-mobile-viewport.png');
    await mobilePage.screenshot({
      path: mobileViewportPath,
      fullPage: false
    });

    await mobileContext.close();

    return {
      site: 'pvpro.ch',
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop: desktopViewportPath,
        mobile: mobileViewportPath
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

checkStep2Focused().then(result => {
  console.log('\n=== Visual Check Results ===');
  console.log(JSON.stringify(result, null, 2));

  if (result.textFitIssues && result.textFitIssues.length > 0) {
    console.log('\n=== Text Fit Issues Found ===');
    result.textFitIssues.forEach(issue => console.log(`  - ${issue}`));
  }

  process.exit(result.status === 'success' ? 0 : 1);
});
