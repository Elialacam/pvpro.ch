import { chromium, devices } from 'playwright';
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
  error?: string;
}

async function visualCheck(url: string, siteName: string): Promise<VisualCheckResult> {
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
    const loadTimeMs = Date.now() - startTime;

    const desktopPath = path.join(outputDir, 'desktop.png');
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: true
    });

    await desktopContext.close();

    // Mobile screenshot
    const iPhone12 = devices['iPhone 12'];
    const mobileContext = await browser.newContext({ ...iPhone12 });
    const mobilePage = await mobileContext.newPage();

    mobilePage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        const errorText = `[${msg.type()}] ${msg.text()}`;
        if (!consoleErrors.includes(errorText)) {
          consoleErrors.push(errorText);
        }
      }
    });

    await mobilePage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle'
    });

    const mobilePath = path.join(outputDir, 'mobile.png');
    await mobilePage.screenshot({
      path: mobilePath,
      fullPage: true
    });

    await mobileContext.close();

    return {
      site: siteName,
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
      }
    };

  } catch (error) {
    return {
      site: siteName,
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

const url = process.argv[2] || 'https://pvpro.ch';
const siteName = process.argv[3] || 'pvpro.ch';

visualCheck(url, siteName).then(result => {
  console.log(JSON.stringify(result, null, 2));
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
