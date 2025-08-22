// const { test, expect } = require('@playwright/test');

// test('Open new tab and verify title', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://the-internet.herokuapp.com/windows');

  
//   const [newPage] = await Promise.all([
//     context.waitForEvent('page'),      
//     page.click('a[href="/windows/new"]') 
//   ]);

//   await newPage.bringToFront();
//   await newPage.waitForLoadState()
//   const headerText = await newPage.locator('h3').textContent();
//   expect(headerText.trim()).toBe('New Window');
//   await newPage.close();
//   await page.close();
// });
