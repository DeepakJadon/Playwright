import {test,expect,chromium} from '@playwright/test'
import { CloudLoginPage } from '../pages/CloudLoginPage';
import { CloudDashboardPage } from '../pages/CloudDashboardPage';

let finalRows = 0;
let allLinks;

test('Verify Count',async ({page},testInfo) => 
    {
    
    const Login = new CloudLoginPage(page);
    const Dashboard = new CloudDashboardPage(page);
    
    await Login.landingPage();
    await Login.login("support+sandbox20@cloudeagle.ai","[x1nkS6]8~f]A#U;");
    await Dashboard.navigateToDashboard();
    await page.waitForTimeout(2000);
    const counttext = await Dashboard.getCount();
    await page.waitForTimeout(3000);
    await expect(counttext).toBe("30");
    await Dashboard.navigateToApplications();
    
    await page.click('#app-container');
    for (let i = 0; i < 6; i++)
    {
   await page.keyboard.press('ArrowDown');
    }

    await page.click('.tableBodyWrapper'); 

    if (testInfo.project.name === 'chromium')
    {
    for (let i=0;i<=5;i++)
    {
      await page.keyboard.press('ArrowDown');
       await page.waitForTimeout(1000);
       allLinks = await page.locator('a');
       finalRows= await allLinks.count();
       console.log(finalRows);
       if (finalRows===30)
       { 
              break;
       }
    } 
    
      await page.waitForTimeout(1000);
      expect(counttext).toBe(finalRows.toString());

    }

     if (testInfo.project.name === 'firefox')
    {
    for (let i=0;i<=1;i++)
    {
       await page.waitForTimeout(1000);
       allLinks = await page.locator('a');
       finalRows= await allLinks.count();
       console.log(finalRows);
       const firefoxCount = await finalRows -2 ;
       console.log(firefoxCount);
       expect(counttext).toBe(firefoxCount.toString());
    }        

    }
      
});
