#!/usr/bin/env node

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  accountId: '6319600105',
  serviceAccountPath: path.join(process.env.HOME, 'websites/orchestrator-dashboard/data/credentials.json'),
};

async function main() {
  console.log('📋 Listing GTM containers...\n');

  try {
    const credentials = JSON.parse(fs.readFileSync(SITE_CONFIG.serviceAccountPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    });

    const authClient = await auth.getClient();
    const tagmanager = google.tagmanager('v2');

    // List all containers
    const containerResponse = await tagmanager.accounts.containers.list({
      auth: authClient,
      parent: `accounts/${SITE_CONFIG.accountId}`,
    });

    const containers = containerResponse.data.container || [];

    console.log(`Found ${containers.length} container(s):\n`);

    containers.forEach(container => {
      console.log(`Container ID: ${container.publicId}`);
      console.log(`Name: ${container.name}`);
      console.log(`Path: ${container.path}`);
      console.log('---');
    });

  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
