import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

interface VisualCheckResult {
  site: string;
  timestamp: string;
  status: 'success' | 'error';
  screenshots: {
    desktop: string;
  };
  consoleErrors: string[];
  metrics: {
    loadTimeMs: number;
    statusCode: number;
  };
  error?: string;
}

async function visualCheckSwissMap(url: string, siteName: string): Promise<VisualCheckResult> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = path.join('/Users/claudiocronin/websites/sites/pvpro.ch/visual-checks', siteName, timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors: string[] = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({ headless: true });

  try {
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

    const response = await desktopPage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    statusCode = response?.status() || 0;

    // Wait a bit more for any animations or SVG rendering
    await desktopPage.waitForTimeout(2000);

    // Try to find and scroll to the Swiss map section
    // Look for common selectors that might contain the map
    const mapSelectors = [
      'svg', // SVG map
      '[class*="map"]',
      '[id*="map"]',
      '[class*="switzerland"]',
      '[class*="swiss"]'
    ];

    let mapFound = false;
    for (const selector of mapSelectors) {
      try {
        const element = await desktopPage.$(selector);
        if (element) {
          await element.scrollIntoViewIfNeeded();
          await desktopPage.waitForTimeout(500);
          mapFound = true;
          console.log(`Found map using selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    if (!mapFound) {
      // Scroll to middle of page as fallback
      await desktopPage.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight / 2);
      });
      await desktopPage.waitForTimeout(500);
    }

    const loadTimeMs = Date.now() - startTime;

    const desktopPath = path.join(outputDir, 'desktop-swiss-map.png');
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: false // Capture viewport only to focus on the map section
    });

    await desktopContext.close();

    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop: desktopPath
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
        desktop: ''
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

const url = process.argv[2] || 'https://pvpro.ch';
const siteName = process.argv[3] || 'pvpro.ch';

visualCheckSwissMap(url, siteName).then(result => {
  console.log(JSON.stringify(result, null, 2));
});
