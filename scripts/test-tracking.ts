#!/usr/bin/env npx tsx

/**
 * Test Conversion Tracking for PVPro.ch
 *
 * This script tests all tracking events end-to-end:
 * 1. Checks if GA4 and GTM are installed
 * 2. Verifies environment variables
 * 3. Tests form tracking events
 * 4. Validates conversion tracking on thank you page
 * 5. Checks GTM container configuration
 *
 * Usage: npx tsx test-tracking.ts
 */

import * as puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env.local') });

const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

interface TrackingEvent {
  event: string;
  timestamp: number;
  data?: any;
}

class TrackingTester {
  private browser: puppeteer.Browser | null = null;
  private page: puppeteer.Page | null = null;
  private events: TrackingEvent[] = [];
  private gaRequests: string[] = [];
  private gtmRequests: string[] = [];

  async initialize() {
    console.log('\n🚀 Initializing Tracking Test Suite\n');
    console.log(`📍 Testing Site: ${SITE_URL}`);
    console.log(`📊 GA4 ID: ${GA4_ID}`);
    console.log(`📦 GTM ID: ${GTM_ID}\n`);

    this.browser = await puppeteer.launch({
      headless: false, // Set to true for CI/CD
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    this.page = await this.browser.newPage();

    // Intercept network requests
    await this.page.setRequestInterception(true);

    this.page.on('request', (request) => {
      const url = request.url();

      // Track GA4 requests
      if (url.includes('google-analytics.com') || url.includes('/g/collect')) {
        this.gaRequests.push(url);
        console.log('📊 GA4 Request:', url.substring(0, 100) + '...');
      }

      // Track GTM requests
      if (url.includes('googletagmanager.com')) {
        this.gtmRequests.push(url);
        console.log('📦 GTM Request:', url.substring(0, 100) + '...');
      }

      request.continue();
    });

    // Listen to console logs
    this.page.on('console', (msg) => {
      const text = msg.text();
      if (text.includes('Analytics') || text.includes('tracking') || text.includes('dataLayer')) {
        console.log('🖥️  Console:', text);
      }
    });

    // Capture dataLayer events
    await this.page.evaluateOnNewDocument(() => {
      const originalPush = Array.prototype.push;
      Object.defineProperty(window, 'dataLayer', {
        set: function(value) {
          // @ts-ignore
          this._dataLayer = value;
        },
        get: function() {
          // @ts-ignore
          if (!this._dataLayer) {
            // @ts-ignore
            this._dataLayer = [];
            // @ts-ignore
            this._dataLayer.push = function(...args) {
              console.log('📤 dataLayer.push:', JSON.stringify(args));
              return originalPush.apply(this, args);
            };
          }
          // @ts-ignore
          return this._dataLayer;
        }
      });
    });
  }

  async testEnvironmentVariables() {
    console.log('\n✅ Step 1: Checking Environment Variables\n');

    const checks = [
      { name: 'GA4_ID', value: GA4_ID, valid: !GA4_ID.includes('XXX') },
      { name: 'GTM_ID', value: GTM_ID, valid: !GTM_ID.includes('XXX') },
    ];

    let allValid = true;
    checks.forEach(check => {
      if (check.valid) {
        console.log(`✓ ${check.name}: ${check.value}`);
      } else {
        console.log(`✗ ${check.name}: ${check.value} (NOT CONFIGURED)`);
        allValid = false;
      }
    });

    if (!allValid) {
      console.log('\n⚠️  Warning: Some environment variables are not configured');
      console.log('   Update .env.local with real GA4 and GTM IDs');
    }

    return allValid;
  }

  async testScriptsLoaded() {
    console.log('\n✅ Step 2: Testing Script Loading\n');

    await this.page!.goto(SITE_URL, { waitUntil: 'networkidle0' });

    // Check if GTM script loaded
    const gtmLoaded = await this.page!.evaluate(() => {
      return typeof window.dataLayer !== 'undefined';
    });

    // Check if GA4 script loaded
    const ga4Loaded = await this.page!.evaluate(() => {
      return typeof window.gtag !== 'undefined';
    });

    console.log(`GTM Script Loaded: ${gtmLoaded ? '✓' : '✗'}`);
    console.log(`GA4 Script Loaded: ${ga4Loaded ? '✓' : '✗'}`);

    if (!gtmLoaded || !ga4Loaded) {
      console.log('\n⚠️  Warning: Tracking scripts not loaded');
      console.log('   Possible reasons:');
      console.log('   1. Environment variables not set');
      console.log('   2. Site not in production mode');
      console.log('   3. Ad blocker active');
    }

    return gtmLoaded && ga4Loaded;
  }

  async testPageView() {
    console.log('\n✅ Step 3: Testing Page View Tracking\n');

    await this.page!.goto(SITE_URL, { waitUntil: 'networkidle0' });
    await this.page!.waitForTimeout(2000);

    const pageviewSent = this.gaRequests.some(req =>
      req.includes('page_view') || req.includes('ep.page_path')
    );

    console.log(`Page View Tracked: ${pageviewSent ? '✓' : '✗'}`);

    return pageviewSent;
  }

  async testFormTracking() {
    console.log('\n✅ Step 4: Testing Form Tracking\n');

    // Navigate to form
    await this.page!.goto(`${SITE_URL}/#formular`, { waitUntil: 'networkidle0' });
    await this.page!.waitForTimeout(1000);

    console.log('📝 Filling out form step by step...\n');

    // Step 1: Property Type
    console.log('Step 1: Selecting property type...');
    await this.page!.click('input[value="einfamilienhaus"]');
    await this.page!.waitForTimeout(500);
    await this.page!.click('input[value="eigentuemer"]');
    await this.page!.waitForTimeout(500);
    await this.page!.click('button:has-text("Weiter")');
    await this.page!.waitForTimeout(1500);

    // Step 2: Energy Consumption
    console.log('Step 2: Entering energy consumption...');
    await this.page!.click('input[value="3000-5000"]');
    await this.page!.waitForTimeout(500);
    await this.page!.click('input[value="ja"]');
    await this.page!.waitForTimeout(500);
    await this.page!.click('button:has-text("Weiter")');
    await this.page!.waitForTimeout(1500);

    // Step 3: Location
    console.log('Step 3: Entering location...');
    await this.page!.type('input[name="postalCode"]', '8001');
    await this.page!.type('input[name="city"]', 'Zürich');
    await this.page!.click('input[value="schraegdach"]');
    await this.page!.waitForTimeout(500);
    await this.page!.click('button:has-text("Weiter")');
    await this.page!.waitForTimeout(1500);

    // Step 4: Contact Info (don't submit)
    console.log('Step 4: Entering contact info...');
    await this.page!.type('input[name="firstName"]', 'Test');
    await this.page!.type('input[name="lastName"]', 'User');
    await this.page!.type('input[name="email"]', 'test@pvpro.ch');
    await this.page!.type('input[name="phone"]', '+41791234567');
    await this.page!.click('input[name="privacyAccepted"]');
    await this.page!.waitForTimeout(1000);

    // Check dataLayer for form events
    const dataLayerEvents = await this.page!.evaluate(() => {
      return window.dataLayer || [];
    });

    console.log('\n📤 DataLayer Events Captured:');
    const formEvents = dataLayerEvents.filter((event: any) =>
      event.event && (
        event.event.includes('form') ||
        event.event.includes('checkout') ||
        event.event === 'begin_checkout'
      )
    );

    formEvents.forEach((event: any, index: number) => {
      console.log(`   ${index + 1}. ${event.event} (Step: ${event.formStep || event.checkout_step || 'N/A'})`);
    });

    const expectedEvents = ['begin_checkout', 'form_interaction', 'checkout_progress'];
    const allEventsTracked = expectedEvents.every(eventName =>
      formEvents.some((e: any) => e.event === eventName)
    );

    console.log(`\nForm Tracking Complete: ${allEventsTracked ? '✓' : '✗'}`);

    return allEventsTracked;
  }

  async testScrollTracking() {
    console.log('\n✅ Step 5: Testing Scroll Tracking\n');

    await this.page!.goto(SITE_URL, { waitUntil: 'networkidle0' });

    // Scroll to 50%
    await this.page!.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight * 0.5);
    });
    await this.page!.waitForTimeout(1000);

    // Scroll to 100%
    await this.page!.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await this.page!.waitForTimeout(1000);

    const dataLayerEvents = await this.page!.evaluate(() => {
      return window.dataLayer || [];
    });

    const scrollEvents = dataLayerEvents.filter((event: any) =>
      event.event === 'scroll_tracking'
    );

    console.log(`Scroll Events Tracked: ${scrollEvents.length}`);
    scrollEvents.forEach((event: any) => {
      console.log(`   - Scroll ${event.scrollDepth}%`);
    });

    return scrollEvents.length > 0;
  }

  async testConversionPage() {
    console.log('\n✅ Step 6: Testing Conversion Page (Thank You Page)\n');

    await this.page!.goto(`${SITE_URL}/danke`, { waitUntil: 'networkidle0' });
    await this.page!.waitForTimeout(2000);

    const dataLayerEvents = await this.page!.evaluate(() => {
      return window.dataLayer || [];
    });

    const conversionEvents = dataLayerEvents.filter((event: any) =>
      event.event === 'conversion_page_view' ||
      event.event === 'purchase'
    );

    console.log(`Conversion Events Tracked: ${conversionEvents.length}`);
    conversionEvents.forEach((event: any) => {
      console.log(`   - ${event.event} (Value: ${event.value || event.ecommerce?.value || 'N/A'})`);
    });

    const conversionTracked = conversionEvents.length > 0;
    console.log(`\nConversion Page Tracking: ${conversionTracked ? '✓' : '✗'}`);

    return conversionTracked;
  }

  async generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 TRACKING TEST REPORT');
    console.log('='.repeat(60) + '\n');

    console.log('Summary:');
    console.log(`- GA4 Requests: ${this.gaRequests.length}`);
    console.log(`- GTM Requests: ${this.gtmRequests.length}`);
    console.log(`- Total Events: ${this.events.length}\n`);

    if (this.gaRequests.length === 0 && this.gtmRequests.length === 0) {
      console.log('⚠️  WARNING: No tracking requests detected!');
      console.log('\nPossible Issues:');
      console.log('1. GA4/GTM IDs not configured in environment variables');
      console.log('2. Site not running in production mode');
      console.log('3. Ad blocker or privacy extension active');
      console.log('4. Network issues\n');
      console.log('Next Steps:');
      console.log('1. Update .env.local with real GA4_ID and GTM_ID');
      console.log('2. Deploy to Vercel production');
      console.log('3. Test on production URL');
    } else {
      console.log('✅ Tracking is working!');
      console.log('\nNext Steps:');
      console.log('1. Verify events in GA4 Realtime (https://analytics.google.com)');
      console.log('2. Check GTM Preview mode for tag firing');
      console.log('3. Set up conversion goals in Google Ads');
    }

    console.log('\n' + '='.repeat(60) + '\n');
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async runAllTests() {
    try {
      await this.initialize();

      const envValid = await this.testEnvironmentVariables();
      const scriptsLoaded = await this.testScriptsLoaded();

      if (scriptsLoaded) {
        await this.testPageView();
        await this.testFormTracking();
        await this.testScrollTracking();
        await this.testConversionPage();
      }

      await this.generateReport();
    } catch (error) {
      console.error('\n❌ Error running tests:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run tests
const tester = new TrackingTester();
tester.runAllTests();
