#!/usr/bin/env node

/**
 * Create Google Analytics 4 Property for solarheim.ch
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  domain: 'solarheim.ch',
  businessName: 'Solarheim - Solar Platform Switzerland',
  serviceAccountPath: path.join(process.env.HOME, 'websites/orchestrator-dashboard/data/credentials.json'),
  timezone: 'Europe/Zurich',
  currency: 'CHF',
  industryCategory: 'HOME_AND_GARDEN',
};

async function main() {
  console.log('🚀 GA4 Property Creation for solarheim.ch');
  console.log('=' .repeat(60));
  console.log(`Domain: ${SITE_CONFIG.domain}`);
  console.log(`Business: ${SITE_CONFIG.businessName}`);
  console.log('=' .repeat(60));

  try {
    const credentials = JSON.parse(fs.readFileSync(SITE_CONFIG.serviceAccountPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/analytics.edit',
        'https://www.googleapis.com/auth/analytics.manage.users',
      ],
    });

    const authClient = await auth.getClient();
    const analyticsadmin = google.analyticsadmin('v1beta');

    // Step 1: Get or create account
    console.log('\n📊 Checking GA4 Accounts...');
    const accountsResponse = await analyticsadmin.accounts.list({
      auth: authClient,
    });

    const accounts = accountsResponse.data.accounts || [];
    console.log(`   Found ${accounts.length} existing account(s)`);

    if (accounts.length === 0) {
      console.error('❌ No GA4 accounts found. Please create one manually at https://analytics.google.com/');
      process.exit(1);
    }

    // Use first available account
    const account = accounts[0];
    console.log(`✅ Using account: ${account.displayName}`);

    // Step 2: Create property
    console.log('\n🏠 Creating GA4 Property...');
    const propertyResponse = await analyticsadmin.properties.create({
      auth: authClient,
      requestBody: {
        parent: account.name,
        displayName: SITE_CONFIG.businessName,
        timeZone: SITE_CONFIG.timezone,
        currencyCode: SITE_CONFIG.currency,
        industryCategory: SITE_CONFIG.industryCategory,
      },
    });

    const property = propertyResponse.data;
    console.log(`✅ Created property: ${property.displayName}`);
    console.log(`   Property ID: ${property.name}`);

    // Step 3: Create data stream
    console.log('\n🌊 Creating Data Stream...');
    const streamResponse = await analyticsadmin.properties.dataStreams.create({
      auth: authClient,
      parent: property.name,
      requestBody: {
        displayName: `${SITE_CONFIG.domain} - Web`,
        type: 'WEB_DATA_STREAM',
        webStreamData: {
          defaultUri: `https://${SITE_CONFIG.domain}`,
        },
      },
    });

    const stream = streamResponse.data;
    console.log(`✅ Created data stream: ${stream.displayName}`);
    console.log(`   Measurement ID: ${stream.webStreamData.measurementId}`);

    // Save config
    const config = {
      measurementId: stream.webStreamData.measurementId,
      propertyId: property.name,
      propertyName: property.displayName,
      accountId: account.name,
      accountName: account.displayName,
      domain: SITE_CONFIG.domain,
      timezone: SITE_CONFIG.timezone,
      currency: SITE_CONFIG.currency,
      createdAt: new Date().toISOString(),
    };

    const configPath = path.join(__dirname, '..', 'ga4-config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    console.log('\n' + '='.repeat(60));
    console.log('✅ GA4 SETUP COMPLETE!');
    console.log('=' .repeat(60));
    console.log(`\n📊 Measurement ID: ${stream.webStreamData.measurementId}`);

    const propertyId = property.name.split('/')[1];
    console.log(`🔗 Property URL: https://analytics.google.com/analytics/web/#/p${propertyId}/reports/intelligenthome`);

    console.log('\n📝 Next Steps:');
    console.log('1. Create GTM container and import configuration');
    console.log('2. Add GA4 Config tag with Measurement ID to GTM');
    console.log('3. Publish GTM container');
    console.log('4. Update .env.local with Measurement ID');
    console.log('5. Test tracking in GA4 Realtime report');
    console.log('6. Mark key events as conversions in GA4');
    console.log(`\n💾 Config saved to: ${configPath}`);

    return config;
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
