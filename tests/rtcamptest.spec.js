import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';


 test.describe('Smoke', ()=> {});
 test.describe('Regression', ()=> {});



test('Verify the sorting order displayed for Z-A on the “All Items” page',
   {annotation: [ {type :'info' , description : 'Product sorting'}],tag: ['@smoke']},async ({page}) => {

    const Login = new LoginPage(page);
    const Home = new HomePage(page);


    await Login.landingPage();
    await Login.login("standard_user","secret_sauce");
    await page.waitForTimeout(1000);
    await Home.dropdownClick();
    await Home.keyboardEvent("ArrowDown");
    await page.waitForTimeout(1000);
    await Home.keyboardEvent("Enter");
    await page.waitForTimeout(2000);
    const product_titles = await Home.getAllProductList();
    console.log(product_titles);
    const Desc_Order = await [...product_titles].sort((a, b) => b.localeCompare(a));
    await expect(product_titles).toEqual(Desc_Order);
});



test('Verify the price order (high-low) displayed on the “All Items” page@sanity',async ({page}) => {

   const Login = new LoginPage(page);
   const Home = new HomePage(page);

    await Login.landingPage();
    await Login.login("standard_user","secret_sauce");
    await page.waitForTimeout(1000);
    await Home.dropdownClick();
    await Home.keyboardEvent("ArrowDown");
    await Home.keyboardEvent("ArrowDown");
    await Home.keyboardEvent("ArrowDown");
    await page.waitForTimeout(1000);
    await Home.keyboardEvent("Enter");
    await page.waitForTimeout(3000);
     const prices =  await Home.getAllProductPrice();
     console.log(prices);

     
     const PC1 = await prices[0];
     const PC2 = await prices[1];
     const actualamount_P1 =  await PC1.slice(1);  
     const Price_1 = await parseInt(actualamount_P1);
     console.log(Price_1);
     const actualamount_P2 = await PC2.slice(1);  
     const Price_2 = await parseInt(actualamount_P2);
     console.log(Price_2); 
       if (Price_1 > Price_2)
       {
          console.log("Price is greater");
          await expect(Price_1).toBeGreaterThan(Price_2);

       }
});





test('Add multiple items to the cart and validate the checkout journey',async ({page}) => {

   const Login = new LoginPage(page);
   const Home = new HomePage(page);
   const Cart = new CartPage(page);

    await Login.landingPage();
    await Login.login("standard_user","secret_sauce");
    await page.waitForTimeout(1000);
    await Home.addProductToCart("Sauce Labs Backpack");
    await page.waitForTimeout(1000);
    await Home.addProductToCart("Sauce Labs Bike Light");
    await page.waitForTimeout(1000);
    const count = await Cart.getCartCount();
    await page.waitForTimeout(1000);
    await expect(count).toBe(2);
    await Cart.clickCart();
    await page.waitForTimeout(1000);
    await Cart.clickCheckOut();
    await page.waitForTimeout(1000);
    await Cart.checkOutProcess("Deepak","Jadon","121001");
    await page.waitForTimeout(1000);
    const thankyoumsg = await Cart.thankYouPage();
    await expect(thankyoumsg).toContain("for your order");
    


});

