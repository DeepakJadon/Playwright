import {test,expect,chromium} from '@playwright/test'
import { CloudLoginPage } from '../pages/CloudLoginPage';
import { CloudDashboardPage } from '../pages/CloudDashboardPage';

let finalRows = 0;
let allLinks;

test('Verify Count',async ({page}) => 
    {
    
    const Login = new CloudLoginPage(page);
    const Dashboard = new CloudDashboardPage(page);
    
    await Login.landingPage();
    await Login.login("support+sandbox20@cloudeagle.ai","[x1nkS6]8~f]A#U;");
    await Dashboard.navigateToDashboard();
    const counttext = await Dashboard.getCount();
    await expect(counttext).toBe("30");
    await Dashboard.navigateToApplications();
    
    await page.click('#app-container');
    for (let i = 0; i < 6; i++)
    {
   await page.keyboard.press('ArrowDown');
    }
    await page.waitForTimeout(6000);
    await page.click('.tableBodyWrapper'); 
    await page.keyboard.press('ArrowDown');
    allLinks = page.locator('a');
          finalRows= await allLinks.count();
          console.log(finalRows)
    await page.keyboard.press('ArrowDown');
    allLinks = page.locator('a');
          finalRows= await allLinks.count();
          console.log(finalRows)
    await page.keyboard.press('ArrowDown');
    allLinks = page.locator('a');
          finalRows= await allLinks.count();
          console.log(finalRows)
    await page.keyboard.press('ArrowDown');
    allLinks = page.locator('a');
          finalRows= await allLinks.count();
          console.log(finalRows)
    await page.waitForTimeout(100);
    await page.keyboard.press('ArrowDown');
    allLinks = page.locator('a');
          finalRows= await allLinks.count();
          console.log(finalRows)
          await page.waitForTimeout(100);
          await page.keyboard.press('ArrowDown');
   
  
  // }
          
    await page.waitForTimeout(2000);
    expect(counttext).toBe(finalRows.toString());
   

   


   
    

   
    

    
});
