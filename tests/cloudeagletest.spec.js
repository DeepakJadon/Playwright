import {test,expect,chromium} from '@playwright/test'
import { CloudLoginPage } from '../pages/CloudLoginPage';
import { CloudDashboardPage } from '../pages/CloudDashboardPage';


let allDivs = [];

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
    await page.waitForTimeout(12000);
    await page.click('#app-container');
    

    for (let j = 0; j < 10; j++)
      {

        
        const element  = await page.locator(`div[data-index=\"${j}\"]`);
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
         if (await element.isVisible()) 
        {
        allDivs.push(element);
        } 
        else
        {
        console.log(`Element at index ${j} not found or not visible.`);
        }
         await page.waitForTimeout(5000); 
         await page.click("div[class='styles_pageOptionWrapper__1oRxq'] button:nth-child(4)");
         await page.waitForTimeout(5000);
         await page.click("div[class='styles_pageOptionWrapper__1oRxq'] button:nth-child(4)");
        
         if (allDivs.length=30)
          break;

}

       console.log(`Total elements captured: ${allDivs.length}`);
       expect(counttext).toBe(allDivs.length.toString());

      
});
