import {test,expect,chromium} from '@playwright/test'

test.use({ ignoreHTTPSErrors: true }); // one-liner setup
test.beforeEach( async ({page}) => 
{
    
   await page.goto("https://uitestingplayground.com/ajax");
   await page.getByText('Button Triggering AJAX Request').click();
});



test('click on green btn', async({page})=>
{
  const successmsg= await page.getByText('Data loaded with AJAX get request.');
  await successmsg.waitFor({state:'visible'});
  const greentxt = await successmsg.allTextContents();
  await expect(greentxt).toContain("Data loaded with AJAX get request.");
});




