const { google } = require('googleapis');
const path = require('path');

const tagmanager = google.tagmanager('v2');

// Authenticate
const auth = new google.auth.GoogleAuth({
  keyFile: '/Users/claudiocronin/websites/orchestrator-dashboard/data/credentials.json',
  scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
});

async function fixEmailClickTrigger() {
  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  const accountId = '6319600105';
  const containerId = '235574956';
  const workspaceId = '2'; // Default Workspace

  console.log('\n=== Fixing pvpro.ch GTM Email Click Trigger ===\n');

  try {
    // 1. List all triggers to find "Email Click"
    console.log('1. Fetching all triggers...');
    const triggersResponse = await tagmanager.accounts.containers.workspaces.triggers.list({
      parent: `accounts/${accountId}/containers/${containerId}/workspaces/${workspaceId}`,
    });

    const triggers = triggersResponse.data.trigger || [];
    console.log(`Found ${triggers.length} triggers\n`);

    // Find the Email Click trigger
    const emailClickTrigger = triggers.find(t => t.name === 'Email Click');

    if (!emailClickTrigger) {
      console.log('Error: "Email Click" trigger not found');
      console.log('Available triggers:', triggers.map(t => t.name).join(', '));
      return;
    }

    console.log('2. Found "Email Click" trigger:');
    console.log(JSON.stringify(emailClickTrigger, null, 2));

    // 2. List built-in variables to find the correct Click URL variable
    console.log('\n3. Checking built-in variables...');
    const builtInVarsResponse = await tagmanager.accounts.containers.workspaces.built_in_variables.list({
      parent: `accounts/${accountId}/containers/${containerId}/workspaces/${workspaceId}`,
    });

    const builtInVars = builtInVarsResponse.data.builtInVariable || [];
    const clickUrlVar = builtInVars.find(v => v.name === 'Click URL' || v.type === 'CLICK_URL');

    console.log('Built-in variables:', builtInVars.filter(v => v.name.includes('Click')).map(v => ({ name: v.name, type: v.type })));

    // 3. Check if Click URL is enabled, if not enable it
    if (!clickUrlVar) {
      console.log('\n4. Enabling Click URL built-in variable...');
      await tagmanager.accounts.containers.workspaces.built_in_variables.create({
        parent: `accounts/${accountId}/containers/${containerId}/workspaces/${workspaceId}`,
        requestBody: {
          type: 'CLICK_URL',
        },
      });
      console.log('Click URL built-in variable enabled');
    } else {
      console.log('\n4. Click URL built-in variable already enabled');
    }

    // 4. Fix the trigger
    console.log('\n5. Updating trigger configuration...');

    // The trigger should filter for mailto: links
    const updatedTrigger = {
      ...emailClickTrigger,
      type: 'LINK_CLICK',
      filter: [
        {
          type: 'CONTAINS',
          parameter: [
            { type: 'TEMPLATE', key: 'arg0', value: '{{Click URL}}' },
            { type: 'TEMPLATE', key: 'arg1', value: 'mailto:' }
          ]
        }
      ],
      waitForTags: {
        type: 'BOOLEAN',
        value: 'false'
      },
      checkValidation: {
        type: 'BOOLEAN',
        value: 'false'
      },
      waitForTagsTimeout: {
        type: 'TEMPLATE',
        value: '2000'
      }
    };

    const updateResponse = await tagmanager.accounts.containers.workspaces.triggers.update({
      path: emailClickTrigger.path,
      requestBody: updatedTrigger,
    });

    console.log('\n6. Trigger updated successfully:');
    console.log(JSON.stringify(updateResponse.data, null, 2));

    // 5. Verify workspace validation
    console.log('\n7. Verifying workspace status...');
    const workspaceResponse = await tagmanager.accounts.containers.workspaces.get({
      path: `accounts/${accountId}/containers/${containerId}/workspaces/${workspaceId}`,
    });

    console.log('\n=== WORKSPACE STATUS ===');
    console.log('Name:', workspaceResponse.data.name);
    console.log('Description:', workspaceResponse.data.description || 'N/A');

    // Check for validation errors
    const workspace = workspaceResponse.data;
    console.log('\n=== VALIDATION CHECK ===');

    // Get workspace status
    const statusResponse = await tagmanager.accounts.containers.workspaces.getStatus({
      path: `accounts/${accountId}/containers/${containerId}/workspaces/${workspaceId}`,
    });

    if (statusResponse.data.workspaceChange && statusResponse.data.workspaceChange.length > 0) {
      console.log('Workspace has changes');
      console.log('Changes:', statusResponse.data.workspaceChange.length);
    }

    console.log('\n=== FIX COMPLETE ===');
    console.log('\nFixed Configuration:');
    console.log('- Trigger: Email Click');
    console.log('- Type: Link Click');
    console.log('- Filter: Click URL contains "mailto:"');
    console.log('- Built-in Variable: {{Click URL}} (enabled)');
    console.log('\nNext steps:');
    console.log('1. Review changes in GTM UI');
    console.log('2. Create version and publish when ready');

  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

fixEmailClickTrigger();
