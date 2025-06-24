

const { test } = require('../pages/customfixture');
const { expect } = require('@playwright/test');

test('print custom fixture value', async ({ myName }) => {
  console.log('Fixture says:', myName);  // QA Automation Engineer 😄
  expect(myName).toContain('Deepak');
});
