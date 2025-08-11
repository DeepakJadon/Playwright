const { defineConfig } = require('@playwright/test');
require('dotenv').config();

const capabilities = [
  {
    name: 'chromium',
    caps: {
      browser: 'playwright-chromium',                   
      browser_version: 'latest',
      os: 'Windows',
      os_version: '11',
    },
  },
  {
    name: 'firefox',
    caps: {
      browser: 'playwright-firefox',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '11',
    },
  },
  {
    name: 'webkit',
    caps: {
      browser: 'playwright-webkit',                    
      browser_version: 'latest',
      os: 'OS X',
      os_version: 'Monterey',
    },
  }
];

const projects = capabilities.map(({ name, caps }) => ({
  name: `${name} on ${caps.os} ${caps.os_version}`,
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
        ...caps,
        'name': 'Playwright Tests',
        'build': `Playwright Build - ${new Date().toLocaleString()}`,
        'browserstack.username': process.env.BROWSERSTACK_USERNAME,
        'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
      }))}`,
    },
    
  },
}));

module.exports = defineConfig({
  timeout: 60000,
  retries: 1,
  testDir: './tests',
  reporter: [['list'], ['html']],
  projects,
});
