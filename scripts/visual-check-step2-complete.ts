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

async function checkStep2Complete(): Promise<VisualCheckResult> {
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

    // Step 1: Click "Ja" button
    console.log('Step 1: Looking for "Ja" button...');
    const jaButton = await desktopPage.locator('button:has-text("Ja")').first();

    if (await jaButton.isVisible({ timeout: 5000 })) {
      console.log('Found "Ja" button, clicking...');
      await jaButton.click();
      await desktopPage.waitForTimeout(500);

      // Click the "Weiter" (Next) button to proceed to step 2
      console.log('Looking for "Weiter" button...');
      const weiterButton = await desktopPage.locator('button:has-text("Weiter")').first();

      if (await weiterButton.isVisible({ timeout: 5000 })) {
        console.log('Found "Weiter" button, clicking to go to step 2...');
        await weiterButton.click();
        await desktopPage.waitForTimeout(1500);
      } else {
        console.log('Warning: "Weiter" button not found, step may auto-advance');
        await desktopPage.waitForTimeout(2000);
      }

      // Verify step 2 is visible
      console.log('Checking if step 2 (building type) is visible...');
      const buildingTypeText = await desktopPage.locator('text=/Welche Art|Einfamilienhaus|Mehrfamilienhaus|Gewerbe/i').first().isVisible({ timeout: 3000 }).catch(() => false);

      if (buildingTypeText) {
        console.log('SUCCESS: Step 2 (building type selection) is now visible!');
      } else {
        console.log('WARNING: Step 2 may not be fully visible yet');
      }
    } else {
      throw new Error('Could not find "Ja" button on step 1');
    }

    // Take viewport screenshot (what's visible now)
    const desktopViewportPath = path.join(outputDir, 'step2-desktop-viewport.png');
    console.log(`Capturing desktop viewport screenshot...`);
    await desktopPage.screenshot({
      path: desktopViewportPath,
      fullPage: false
    });

    // Take full page screenshot for reference
    const desktopFullPath = path.join(outputDir, 'step2-desktop-full.png');
    await desktopPage.screenshot({
      path: desktopFullPath,
      fullPage: true
    });

    // Check for text overflow in visible elements
    console.log('Checking for text overflow issues...');
    const buildingOptions = await desktopPage.locator('button, [role="button"], [class*="option"], [class*="card"], [class*="building"]').all();

    for (let i = 0; i < buildingOptions.length; i++) {
      const element = buildingOptions[i];
      try {
        const isVisible = await element.isVisible();
        if (!isVisible) continue;

        const box = await element.boundingBox();
        if (!box) continue;

        const scrollWidth = await element.evaluate(el => el.scrollWidth);
        const clientWidth = await element.evaluate(el => el.clientWidth);
        const scrollHeight = await element.evaluate(el => el.scrollHeight);
        const clientHeight = await element.evaluate(el => el.clientHeight);
        const text = await element.textContent();
        const tagName = await element.evaluate(el => el.tagName);
        const className = await element.getAttribute('class');

        // Allow 2px tolerance for sub-pixel rendering
        if (scrollWidth > clientWidth + 2) {
          textFitIssues.push(`${tagName}.${className}: Horizontal overflow - scrollWidth(${scrollWidth}) > clientWidth(${clientWidth}) - Text: "${text?.trim().substring(0, 80)}"`);
        }
        if (scrollHeight > clientHeight + 2) {
          textFitIssues.push(`${tagName}.${className}: Vertical overflow - scrollHeight(${scrollHeight}) > clientHeight(${clientHeight}) - Text: "${text?.trim().substring(0, 80)}"`);
        }
      } catch (e) {
        // Skip elements that cause errors
      }
    }

    const loadTimeMs = Date.now() - startTime;
    await desktopContext.close();

    // Mobile check
    console.log('\nStarting mobile check...');
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
    const jaButtonMobile = await mobilePage.locator('button:has-text("Ja")').first();
    if (await jaButtonMobile.isVisible({ timeout: 5000 })) {
      console.log('Mobile: Clicking "Ja" button...');
      await jaButtonMobile.click();
      await mobilePage.waitForTimeout(500);

      // Click "Weiter" on mobile
      const weiterButtonMobile = await mobilePage.locator('button:has-text("Weiter")').first();
      if (await weiterButtonMobile.isVisible({ timeout: 5000 })) {
        console.log('Mobile: Clicking "Weiter" button...');
        await weiterButtonMobile.click();
        await mobilePage.waitForTimeout(1500);
      } else {
        await mobilePage.waitForTimeout(2000);
      }
    }

    const mobileViewportPath = path.join(outputDir, 'step2-mobile-viewport.png');
    console.log(`Capturing mobile viewport screenshot...`);
    await mobilePage.screenshot({
      path: mobileViewportPath,
      fullPage: false
    });

    const mobileFullPath = path.join(outputDir, 'step2-mobile-full.png');
    await mobilePage.screenshot({
      path: mobileFullPath,
      fullPage: true
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

checkStep2Complete().then(result => {
  console.log('\n=== Visual Check Results ===');
  console.log(JSON.stringify(result, null, 2));

  if (result.textFitIssues && result.textFitIssues.length > 0) {
    console.log('\n=== TEXT FIT ISSUES DETECTED ===');
    result.textFitIssues.forEach(issue => console.log(`  ! ${issue}`));
  } else {
    console.log('\n=== NO TEXT FIT ISSUES DETECTED ===');
  }

  process.exit(result.status === 'success' ? 0 : 1);
});
