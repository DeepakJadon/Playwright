// import {test,expect,chromium} from '@playwright/test'


// test.skip('tabs open', async ({page}) => 
// {
  
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   await page.waitForTimeout(1000);
//   const Texts = await page.locator("table#product.table-display  tbody tr td:nth-child(3)").allTextContents();
//   const counts = Texts.map((text => parseInt(text.trim())));
//   counts.sort((a, b) => b - a);
//   console.log(counts)
//   console.log(counts[1])

  
// });



// test.skip('tabs open 2', async ({page}) => 
// {
  
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   await page.waitForTimeout(1000);
//   const Texts = await page.locator("table#product.table-display  tbody tr td:nth-child(3)").allTextContents();
//   const counts = [...new Set(Texts)]
//   const sorted = counts.sort((a, b) => b - a);
//   console.log(sorted)
//   console.log(counts[1])

  
// });



// test('tabs open 3', async ({page}) => 
// {
  
//   await page.goto('https://sigmabeauty.com/products/express-mat-black');
//   const popupLocator = await page.locator('.sc-gjt4dd-0.ctVBqw > .yotpo-smsbump-modal__backdrop > .yotpo-smsbump-modal__content > div > .sc-hh8o6a-0 > div')
//   try {
//  if (await popupLocator.isVisible({ timeout: 15000 })) 
//   {
//     console.log('Popup appeared');
//     await page.getByRole('button', { name: 'Close' }).click();
//   } 
// }
// catch(error)
//   {
//     console.log('No popup appeared', error);
// }

//   const button = await page.getByRole('button', { name: 'Change country or currency' })
//   await expect(button).toHaveAttribute('aria-expanded', 'false');
//   button.click();
//   await expect(button).toHaveAttribute('aria-expanded', 'true');
//   // const dropdownBtn = await page.locator("li div button[class='localization-toggle heading text-xxs link-faded']")
//   // await expect(dropdownBtn).toHaveAttribute('aria-expanded', 'false');
//   // dropdownBtn.click();
//   //await expect(dropdownBtn).toHaveAttribute('aria-expanded', 'true');
//     await page.waitForTimeout(1000);
//     const shadowroot = await page.locator("x-popover[id='popover-localization-header-nav-sections--17527232495769__header-country']")
//     const scrollwindow = await shadowroot.locator("div div[part=\"content\"]")
  
//      const scrollDown = await scrollwindow.evaluate(el => el.scrollBy(0, 1000));
//     // await page.evaluate(() => window.scrollY) // scroll down 200px
//     //await expect(scrollDown).toBe(1000);
//     const country_Algeria = await page.locator("//form[@id='localization-form-header-nav-sections--17527232495769__header-country']//x-listbox[@role='listbox']//button[@value='BH']")
//     if (country_Algeria.isVisible())
//     {
//       console.log("Scroll happened!")
//     }
//     await page.waitForTimeout(1000);




  
// });