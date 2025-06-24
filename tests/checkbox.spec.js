import { test } from '../common/setup';
import { expect } from '@playwright/test';


test.beforeEach( async ({customPage}) => 
{

 await customPage.goto('https://www.flipkart.com/');

});



async function checkBrandBox(customPage,brand)
{
    await customPage.getByRole('textbox', { name: 'Search Brand' }).fill(brand);

}

test('click checkbox', async({customPage}) => {
      await customPage.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("mobiles");
      await customPage.keyboard.press("Enter");
      await checkBrandBox(customPage,"Apple");
      await customPage.getByText('Apple', { exact: true }).click();
      await expect(customPage.getByText('Apple', { exact: true }, {timeout:6000})).toBeChecked();

});

