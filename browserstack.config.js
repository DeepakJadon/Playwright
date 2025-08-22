const { defineConfig } = require('@playwright/test');
require('dotenv').config();
const fetch = require('node-fetch');

// Global hooks
const browserStackHooks = {
  async beforeEach({ page }, testInfo) {
    const sessionName = `${testInfo.title}`;
    if (process.env.BROWSERSTACK_SESSION_ID) {
      await fetch(`https://api.browserstack.com/automate/sessions/${process.env.BROWSERSTACK_SESSION_ID}.json`, {
        method: 'PUT',
        body: JSON.stringify({ name: sessionName }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}`).toString('base64')}`
        }
      });
    }
  },
  async afterEach({ page }, testInfo) {
    const status = testInfo.status === 'passed' ? 'passed' : 'failed';
    if (process.env.BROWSERSTACK_SESSION_ID) {
      await fetch(`https://api.browserstack.com/automate/sessions/${process.env.BROWSERSTACK_SESSION_ID}.json`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}`).toString('base64')}`
        }
      });
    }
  }
};

const capabilities = [
  {
    name: 'chromium',
    caps: {
      browser: 'playwright-chromium',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '11',
    }
  },
  {
    name: 'firefox',
    caps: {
      browser: 'playwright-firefox',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '11',
    }
  },

  {
  name: 'safari-mobile',
  caps: {
    browser: 'Safari',
    os_version: '16',
    device: 'iPhone 14',
    real_mobile: true,
  }
 }
];

const selectedBrowser = process.env.BROWSER || null;
const filteredCapabilities = selectedBrowser
  ? capabilities.filter(cap => cap.name === selectedBrowser)
  : capabilities;

module.exports = defineConfig({
  timeout: 60 * 1000,
  testDir: './tests',
  projects: filteredCapabilities.map(cap => ({
    name: cap.name,
    use: {
      connectOptions: {
        wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
          ...cap.caps,
          'name': 'Playwright Tests',
          'build': `Playwright Build - ${new Date().toLocaleString()}`,
          'browserstack.username': process.env.BROWSERSTACK_USERNAME,
          'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
          'video': true,
          'browserstack.networkLogs': true,
          'browserstack.console': 'verbose'

        }))}`
      }
    }
  })),
  // Add global hooks
  reporter: [['list']],
  ...browserStackHooks
});
