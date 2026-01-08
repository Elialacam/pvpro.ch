#!/usr/bin/env node

/**
 * Create Google Tag Manager Container for solarheim.ch
 * Imports configuration from GTM_IMPORT_JSON.json and adds GA4 config tag
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  domain: 'solarheim.ch',
  accountId: '6319600105', // GTM Account ID from agent instructions
  serviceAccountPath: path.join(process.env.HOME, 'websites/orchestrator-dashboard/data/credentials.json'),
};

async function main() {
  console.log('🚀 GTM Container Creation for solarheim.ch');
  console.log('=' .repeat(60));

  try {
    // Load GA4 config
    const ga4ConfigPath = path.join(__dirname, '..', 'ga4-config.json');
    const ga4Config = JSON.parse(fs.readFileSync(ga4ConfigPath, 'utf8'));
    console.log(`📊 Using GA4 Measurement ID: ${ga4Config.measurementId}`);

    // Load GTM import JSON
    const gtmImportPath = path.join(__dirname, '..', 'GTM_IMPORT_JSON.json');
    const gtmImport = JSON.parse(fs.readFileSync(gtmImportPath, 'utf8'));
    console.log('📦 Loaded GTM configuration template');

    const credentials = JSON.parse(fs.readFileSync(SITE_CONFIG.serviceAccountPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/tagmanager.edit.containers',
        'https://www.googleapis.com/auth/tagmanager.manage.accounts',
      ],
    });

    const authClient = await auth.getClient();
    const tagmanager = google.tagmanager('v2');

    // Step 1: Create container
    console.log('\n📦 Creating GTM Container...');
    const containerResponse = await tagmanager.accounts.containers.create({
      auth: authClient,
      parent: `accounts/${SITE_CONFIG.accountId}`,
      requestBody: {
        name: `solarheim.ch - Conversion Tracking`,
        usageContext: ['WEB'],
        domainName: SITE_CONFIG.domain,
      },
    });

    const container = containerResponse.data;
    const containerId = container.publicId;
    console.log(`✅ Created container: ${container.name}`);
    console.log(`   Container ID: ${containerId}`);

    // Step 2: Create workspace
    console.log('\n📝 Creating workspace...');
    const workspaceResponse = await tagmanager.accounts.containers.workspaces.create({
      auth: authClient,
      parent: container.path,
      requestBody: {
        name: 'Initial Setup',
        description: 'Complete conversion tracking setup',
      },
    });

    const workspace = workspaceResponse.data;
    console.log(`✅ Created workspace: ${workspace.name}`);

    // Step 3: Enable built-in variables
    console.log('\n🔧 Enabling built-in variables...');
    const builtInVars = [
      'PAGE_URL', 'PAGE_HOSTNAME', 'PAGE_PATH', 'REFERRER',
      'EVENT', 'CLICK_ELEMENT', 'CLICK_CLASSES', 'CLICK_ID',
      'CLICK_TARGET', 'CLICK_URL', 'CLICK_TEXT', 'FORM_ELEMENT',
      'FORM_CLASSES', 'FORM_ID', 'FORM_TARGET', 'FORM_URL', 'FORM_TEXT'
    ];

    for (const varType of builtInVars) {
      try {
        await tagmanager.accounts.containers.workspaces.built_in_variables.create({
          auth: authClient,
          parent: workspace.path,
          type: varType,
        });
      } catch (e) {
        // Variable might already exist
      }
    }
    console.log('✅ Built-in variables enabled');

    // Step 4: Create Data Layer Variables
    console.log('\n📊 Creating data layer variables...');
    const dlVariables = [
      { name: 'dlv - conversionLabel', key: 'conversionLabel' },
      { name: 'dlv - conversionType', key: 'conversionType' },
      { name: 'dlv - value', key: 'value' },
      { name: 'dlv - currency', key: 'currency' },
      { name: 'dlv - scrollDepth', key: 'scrollDepth' },
    ];

    const createdVariables = {};
    for (const dlv of dlVariables) {
      const varResponse = await tagmanager.accounts.containers.workspaces.variables.create({
        auth: authClient,
        parent: workspace.path,
        requestBody: {
          name: dlv.name,
          type: 'v',
          parameter: [
            { type: 'INTEGER', key: 'dataLayerVersion', value: '2' },
            { type: 'BOOLEAN', key: 'setDefaultValue', value: 'false' },
            { type: 'TEMPLATE', key: 'name', value: dlv.key },
          ],
        },
      });
      createdVariables[dlv.name] = varResponse.data;
      console.log(`   ✓ ${dlv.name}`);
    }

    // Step 5: Create GA4 Config Tag
    console.log('\n⚙️  Creating GA4 Configuration tag...');
    const ga4ConfigTag = await tagmanager.accounts.containers.workspaces.tags.create({
      auth: authClient,
      parent: workspace.path,
      requestBody: {
        name: 'GA4 Config - Main',
        type: 'gaawc',
        parameter: [
          { type: 'TEMPLATE', key: 'measurementId', value: ga4Config.measurementId },
        ],
        firingTriggerId: ['2147479553'], // All Pages trigger
        tagFiringOption: 'ONCE_PER_LOAD',
      },
    });
    console.log(`✅ Created GA4 Config tag: ${ga4ConfigTag.data.name}`);

    // Step 6: Create Triggers
    console.log('\n🎯 Creating conversion triggers...');
    const triggers = [
      {
        name: 'Conversion - Form Start',
        conversionLabel: 'FORM_START',
        eventName: 'form_start',
      },
      {
        name: 'Conversion - Calculator Used',
        conversionLabel: 'CALCULATOR_USED',
        eventName: 'calculator_used',
      },
      {
        name: 'Conversion - Form Step 1',
        conversionLabel: 'FORM_STEP_1',
        eventName: 'form_step_1_complete',
      },
      {
        name: 'Conversion - Form Step 2',
        conversionLabel: 'FORM_STEP_2',
        eventName: 'form_step_2_complete',
      },
      {
        name: 'Conversion - Form Step 3',
        conversionLabel: 'FORM_STEP_3',
        eventName: 'form_step_3_complete',
      },
      {
        name: 'Conversion - Form Step 4',
        conversionLabel: 'FORM_STEP_4',
        eventName: 'form_step_4_complete',
      },
      {
        name: 'Conversion - Lead Complete',
        conversionLabel: 'LEAD_COMPLETE',
        eventName: 'generate_lead',
      },
      {
        name: 'Conversion - Scroll 25%',
        conversionLabel: 'SCROLL_25',
        eventName: 'scroll_25',
      },
      {
        name: 'Conversion - Scroll 50%',
        conversionLabel: 'SCROLL_50',
        eventName: 'scroll_50',
      },
      {
        name: 'Conversion - Scroll 75%',
        conversionLabel: 'SCROLL_75',
        eventName: 'scroll_75',
      },
      {
        name: 'Conversion - Scroll 100%',
        conversionLabel: 'SCROLL_100',
        eventName: 'scroll_100',
      },
      {
        name: 'Conversion - Phone Click',
        conversionLabel: 'PHONE_CLICK',
        eventName: 'phone_click',
      },
      {
        name: 'Conversion - Email Click',
        conversionLabel: 'EMAIL_CLICK',
        eventName: 'email_click',
      },
      {
        name: 'Conversion - CTA Click',
        conversionLabel: 'CTA_CLICK',
        eventName: 'cta_click',
      },
    ];

    const createdTriggers = {};
    for (const trigger of triggers) {
      const triggerResponse = await tagmanager.accounts.containers.workspaces.triggers.create({
        auth: authClient,
        parent: workspace.path,
        requestBody: {
          name: trigger.name,
          type: 'CUSTOM_EVENT',
          customEventFilter: [
            {
              type: 'EQUALS',
              parameter: [
                { type: 'TEMPLATE', key: 'arg0', value: '{{_event}}' },
                { type: 'TEMPLATE', key: 'arg1', value: 'conversion' },
              ],
            },
          ],
          filter: [
            {
              type: 'EQUALS',
              parameter: [
                { type: 'TEMPLATE', key: 'arg0', value: '{{dlv - conversionLabel}}' },
                { type: 'TEMPLATE', key: 'arg1', value: trigger.conversionLabel },
              ],
            },
          ],
        },
      });
      createdTriggers[trigger.name] = triggerResponse.data;
      console.log(`   ✓ ${trigger.name}`);
    }

    // Step 7: Create GA4 Event Tags
    console.log('\n🏷️  Creating GA4 event tags...');
    for (const trigger of triggers) {
      const eventTag = await tagmanager.accounts.containers.workspaces.tags.create({
        auth: authClient,
        parent: workspace.path,
        requestBody: {
          name: `GA4 Event - ${trigger.eventName}`,
          type: 'gaawe',
          parameter: [
            { type: 'TEMPLATE', key: 'eventName', value: trigger.eventName },
            {
              type: 'LIST',
              key: 'eventParameters',
              list: [
                {
                  type: 'MAP',
                  map: [
                    { type: 'TEMPLATE', key: 'name', value: 'value' },
                    { type: 'TEMPLATE', key: 'value', value: '{{dlv - value}}' },
                  ],
                },
                {
                  type: 'MAP',
                  map: [
                    { type: 'TEMPLATE', key: 'name', value: 'currency' },
                    { type: 'TEMPLATE', key: 'value', value: 'CHF' },
                  ],
                },
              ],
            },
          ],
          firingTriggerId: [createdTriggers[trigger.name].triggerId],
          tagFiringOption: 'ONCE_PER_EVENT',
        },
      });
      console.log(`   ✓ ${eventTag.data.name}`);
    }

    // Step 8: Create version and publish
    console.log('\n📦 Creating container version...');
    const versionResponse = await tagmanager.accounts.containers.workspaces.create_version({
      auth: authClient,
      path: workspace.path,
      requestBody: {
        name: 'Initial Setup - Complete Conversion Tracking',
        notes: 'Automated setup: GA4 config + 14 conversion events',
      },
    });

    const version = versionResponse.data.containerVersion;
    console.log(`✅ Created version: ${version.containerVersionId}`);

    // Try to publish (might fail due to permissions)
    try {
      console.log('\n🚀 Publishing container...');
      await tagmanager.accounts.containers.versions.publish({
        auth: authClient,
        path: version.path,
      });
      console.log('✅ Container published!');
    } catch (publishError) {
      console.log('⚠️  Container created but could not auto-publish (manual step required)');
      console.log('   Go to GTM UI and click "Submit" → "Publish"');
    }

    // Save config
    const config = {
      containerId: containerId,
      containerName: container.name,
      ga4MeasurementId: ga4Config.measurementId,
      domain: SITE_CONFIG.domain,
      createdAt: new Date().toISOString(),
      events: triggers.map(t => ({
        name: t.eventName,
        label: t.conversionLabel,
      })),
    };

    const configPath = path.join(__dirname, '..', 'gtm-config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    console.log('\n' + '='.repeat(60));
    console.log('✅ GTM SETUP COMPLETE!');
    console.log('=' .repeat(60));
    console.log(`\n📦 GTM Container ID: ${containerId}`);
    console.log(`📊 GA4 Measurement ID: ${ga4Config.measurementId}`);
    console.log(`🔗 GTM URL: https://tagmanager.google.com/#/container/accounts/${SITE_CONFIG.accountId}/containers/${container.containerId}/workspaces`);

    console.log('\n📝 Next Steps:');
    console.log('1. ⚠️  MANUAL: Publish container in GTM UI (if not auto-published)');
    console.log('2. Update .env.local with GTM Container ID');
    console.log('3. Deploy to Vercel');
    console.log('4. Test events in GTM Preview mode');
    console.log('5. Verify events in GA4 Realtime');
    console.log('6. Mark key events as conversions in GA4 Admin → Events');
    console.log(`\n💾 Config saved to: ${configPath}`);

    console.log('\n🎯 Conversion Events Created:');
    triggers.forEach(t => {
      console.log(`   • ${t.eventName} (${t.conversionLabel})`);
    });

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
