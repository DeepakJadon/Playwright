import {test,expect,chromium} from '@playwright/test'


test('tabs open', async ({page}) => 
{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  await context.newPage();
  await page.goto('https://playwright.dev');
  page.waitForTimeout(5000);
  
});