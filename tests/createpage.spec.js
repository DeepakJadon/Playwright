// import { test,chromium } from "@playwright/test";

// test ('create new tab' ,async()=> 
// {
//       const browser = await chromium.launch();
//       const  context = await browser.newContext();
//       const page = await context.newPage();

    
//       await page.goto("https://www.saucedemo.com/v1/");
      
//       const username =  await page.locator('//*[@id="login_credentials"]').textContent();
//       console.log(username);
//      const usertext = username.split('\n')
//      .map(line => line.trim()) 
//      .filter(line => line && !line.toLowerCase().includes('accepted'));
//       console.log(usertext[0]);
//                        await page.locator("//input[contains(@id,'user-name')]").fill(usertext[0]);
//                        await page.waitForTimeout(10000);

//       const password =  await page.locator('//*[@class="login_password"]/text()[2]').textContent();
//                         await page.locator("//input[contains(@id,'password')]").fill(password);
//                         await page.waitForTimeout(10000);
//       await browser.close();
    
// });