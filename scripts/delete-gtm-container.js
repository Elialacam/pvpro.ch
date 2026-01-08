#!/usr/bin/env node

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  accountId: '6319600105',
  containerId: 'GTM-556VX7T8', // Old duplicate container to delete
  serviceAccountPath: path.join(process.env.HOME, 'websites/orchestrator-dashboard/data/credentials.json'),
};

async function main() {
  console.log('🗑️  Deleting GTM container...');

  try {
    const credentials = JSON.parse(fs.readFileSync(SITE_CONFIG.serviceAccountPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/tagmanager.edit.containers',
        'https://www.googleapis.com/auth/tagmanager.delete.containers',
        'https://www.googleapis.com/auth/tagmanager.manage.accounts'
      ],
    });

    const authClient = await auth.getClient();
    const tagmanager = google.tagmanager('v2');

    // List all containers to find the one we want to delete
    const containerResponse = await tagmanager.accounts.containers.list({
      auth: authClient,
      parent: `accounts/${SITE_CONFIG.accountId}`,
    });

    const containers = containerResponse.data.container || [];
    const container = containers.find(c => c.publicId === SITE_CONFIG.containerId);

    if (!container) {
      console.log('Container not found or already deleted');
      return;
    }

    // Delete container
    await tagmanager.accounts.containers.delete({
      auth: authClient,
      path: container.path,
    });

    console.log('✅ Container deleted successfully');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
