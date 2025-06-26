import {test,expect,chromium} from '@playwright/test'


test('tabs open', async ({page}) => 
{
  
  await page.goto('https://playwright.dev');
  await page.waitForTimeout(1000);
  
});