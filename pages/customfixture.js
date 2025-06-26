
const base = require('@playwright/test');

// Extend base test with a custom fixture
  const test = base.test.extend({
  myName: async ({}, use) => {
    const name = 'Deepak QA Automation Engineer';
    await use(name); // inject into tests
  },
});

module.exports = { test };
