// const { test } = require('@playwright/test');
// const path = require('path');

// test('File upload example', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/upload');
//   const filePath = path.join(__dirname, 'sample.txt');
//   await page.setInputFiles('#file-upload', filePath);
//   await page.waitForTimeout(3000)
//   await page.click('#file-submit');
//   await page.waitForSelector('h3:has-text("File Uploaded!")');
//   await page.waitForTimeout(3000)
// });


// test('File download example', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/download');
//   const downloadPromise = page.waitForEvent('download');
//   await page.click('text=some-file.txt'); 

//   // Wait for the download to complete
//   const download = await downloadPromise;
//   const downloadPath = path.join(__dirname, await download.suggestedFilename());
//   await download.saveAs(downloadPath);
//   console.log(`File downloaded to: ${downloadPath}`);
// });
