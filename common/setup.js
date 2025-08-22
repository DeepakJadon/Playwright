import { test as base } from '@playwright/test';
import { chromium } from 'playwright';

// Extend the base test


 export const test = base.extend(
    {
  //custom fixture
  customPage: async ({}, use) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await use(page); // Pass the page to tests

    await page.close();
    await context.close();
    await browser.close();
  }
});

  

