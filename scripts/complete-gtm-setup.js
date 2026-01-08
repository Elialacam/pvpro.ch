#!/usr/bin/env node

/**
 * Complete GTM Setup for existing container GTM-N8MRNGXQ
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  domain: 'solarheim.ch',
  accountId: '6319600105',
  containerPublicId: 'GTM-N8MRNGXQ',
  serviceAccountPath: path.join(process.env.HOME, 'websites/orchestrator-dashboard/data/credentials.json'),
};

async function main() {
  console.log('🚀 Completing GTM Setup for solarheim.ch');
  console.log('=' .repeat(60));

  try {
    // Load GA4 config
    const ga4ConfigPath = path.join(__dirname, '..', 'ga4-config.json');
    const ga4Config = JSON.parse(fs.readFileSync(ga4ConfigPath, 'utf8'));
    console.log(`📊 Using GA4 Measurement ID: ${ga4Config.measurementId}`);

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

    // Get container
    console.log('\n📦 Finding container...');
    const containersResponse = await tagmanager.accounts.containers.list({
      auth: authClient,
      parent: `accounts/${SITE_CONFIG.accountId}`,
    });

    const container = containersResponse.data.container?.find(
      c => c.publicId === SITE_CONFIG.containerPublicId
    );

    if (!container) {
      console.error('❌ Container not found');
      process.exit(1);
    }

    console.log(`✅ Found container: ${container.name}`);

    // Get or create workspace
    console.log('\n📝 Getting workspace...');
    const workspacesResponse = await tagmanager.accounts.containers.workspaces.list({
      auth: authClient,
      parent: container.path,
    });

    let workspace = workspacesResponse.data.workspace?.[0];

    if (!workspace) {
      const workspaceResponse = await tagmanager.accounts.containers.workspaces.create({
        auth: authClient,
        parent: container.path,
        requestBody: {
          name: 'Complete Setup',
          description: 'Complete conversion tracking setup',
        },
      });
      workspace = workspaceResponse.data;
    }

    console.log(`✅ Using workspace: ${workspace.name}`);

    // Check existing tags
    const tagsResponse = await tagmanager.accounts.containers.workspaces.tags.list({
      auth: authClient,
      parent: workspace.path,
    });

    const existingTags = tagsResponse.data.tag || [];
    console.log(`   Found ${existingTags.length} existing tags`);

    // If GA4 config doesn't exist, create it
    const ga4ConfigExists = existingTags.some(t => t.name === 'GA4 Config - Main');

    if (!ga4ConfigExists) {
      console.log('\n⚙️  Creating GA4 Configuration tag...');
      await tagmanager.accounts.containers.workspaces.tags.create({
        auth: authClient,
        parent: workspace.path,
        requestBody: {
          name: 'GA4 Config - Main',
          type: 'gaawc',
          parameter: [
            { type: 'TEMPLATE', key: 'measurementId', value: ga4Config.measurementId },
          ],
          firingTriggerId: ['2147479553'], // All Pages trigger
          tagFiringOption: 'ONCE_PER_EVENT',
        },
      });
      console.log('✅ GA4 Config tag created');
    } else {
      console.log('✅ GA4 Config tag already exists');
    }

    // Get existing triggers
    const triggersResponse = await tagmanager.accounts.containers.workspaces.triggers.list({
      auth: authClient,
      parent: workspace.path,
    });

    const existingTriggers = triggersResponse.data.trigger || [];
    console.log(`   Found ${existingTriggers.length} existing triggers`);

    // Get existing variables
    const variablesResponse = await tagmanager.accounts.containers.workspaces.variables.list({
      auth: authClient,
      parent: workspace.path,
    });

    const existingVariables = variablesResponse.data.variable || [];
    console.log(`   Found ${existingVariables.length} existing variables`);

    // Step 6: Create Triggers (if not exist)
    console.log('\n🎯 Creating conversion triggers...');
    const triggers = [
      { name: 'Conversion - Form Start', conversionLabel: 'FORM_START', eventName: 'form_start' },
      { name: 'Conversion - Calculator Used', conversionLabel: 'CALCULATOR_USED', eventName: 'calculator_used' },
      { name: 'Conversion - Form Step 1', conversionLabel: 'FORM_STEP_1', eventName: 'form_step_1_complete' },
      { name: 'Conversion - Form Step 2', conversionLabel: 'FORM_STEP_2', eventName: 'form_step_2_complete' },
      { name: 'Conversion - Form Step 3', conversionLabel: 'FORM_STEP_3', eventName: 'form_step_3_complete' },
      { name: 'Conversion - Form Step 4', conversionLabel: 'FORM_STEP_4', eventName: 'form_step_4_complete' },
      { name: 'Conversion - Lead Complete', conversionLabel: 'LEAD_COMPLETE', eventName: 'generate_lead' },
      { name: 'Conversion - Scroll 25%', conversionLabel: 'SCROLL_25', eventName: 'scroll_25' },
      { name: 'Conversion - Scroll 50%', conversionLabel: 'SCROLL_50', eventName: 'scroll_50' },
      { name: 'Conversion - Scroll 75%', conversionLabel: 'SCROLL_75', eventName: 'scroll_75' },
      { name: 'Conversion - Scroll 100%', conversionLabel: 'SCROLL_100', eventName: 'scroll_100' },
      { name: 'Conversion - Phone Click', conversionLabel: 'PHONE_CLICK', eventName: 'phone_click' },
      { name: 'Conversion - Email Click', conversionLabel: 'EMAIL_CLICK', eventName: 'email_click' },
      { name: 'Conversion - CTA Click', conversionLabel: 'CTA_CLICK', eventName: 'cta_click' },
    ];

    const createdTriggers = {};
    for (const trigger of triggers) {
      const exists = existingTriggers.find(t => t.name === trigger.name);
      if (exists) {
        createdTriggers[trigger.name] = exists;
        continue;
      }

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
      const tagName = `GA4 Event - ${trigger.eventName}`;
      const exists = existingTags.find(t => t.name === tagName);
      if (exists) {
        continue;
      }

      await tagmanager.accounts.containers.workspaces.tags.create({
        auth: authClient,
        parent: workspace.path,
        requestBody: {
          name: tagName,
          type: 'gaawe',
          parameter: [
            { type: 'TEMPLATE', key: 'eventName', value: trigger.eventName },
            { type: 'BOOLEAN', key: 'getEcommerceDataFrom', value: 'false' },
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
      console.log(`   ✓ ${tagName}`);
    }

    // Step 8: Create version
    console.log('\n📦 Creating container version...');
    const versionResponse = await tagmanager.accounts.containers.workspaces.create_version({
      auth: authClient,
      path: workspace.path,
      requestBody: {
        name: 'Complete Conversion Tracking',
        notes: 'GA4 config + 14 conversion events for solarheim.ch',
      },
    });

    const version = versionResponse.data.containerVersion;
    console.log(`✅ Created version: ${version.containerVersionId}`);

    // Save config
    const config = {
      containerId: SITE_CONFIG.containerPublicId,
      containerName: container.name,
      ga4MeasurementId: ga4Config.measurementId,
      domain: SITE_CONFIG.domain,
      versionId: version.containerVersionId,
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
    console.log(`\n📦 GTM Container ID: ${SITE_CONFIG.containerPublicId}`);
    console.log(`📊 GA4 Measurement ID: ${ga4Config.measurementId}`);
    console.log(`🔗 GTM URL: https://tagmanager.google.com/#/container/accounts/${SITE_CONFIG.accountId}/containers/${container.containerId}/workspaces`);

    console.log('\n📝 Next Steps:');
    console.log('1. ⚠️  MANUAL: Go to GTM UI and click "Submit" → "Publish"');
    console.log('2. Update .env.local with GTM Container ID and GA4 Measurement ID');
    console.log('3. Update Analytics component to use new GTM container');
    console.log('4. Deploy to Vercel');
    console.log('5. Test events in GTM Preview mode');
    console.log('6. Verify events in GA4 Realtime');
    console.log('7. Mark key events as conversions in GA4 Admin → Events');
    console.log(`\n💾 Config saved to: ${configPath}`);

    console.log('\n🎯 Conversion Events Configured:');
    triggers.forEach(t => {
      console.log(`   • ${t.eventName}`);
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
