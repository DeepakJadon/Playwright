class CartPage

{


    constructor(page)
    {
        this.page=page;
        this.cart = 'xpath=//a[@class="shopping_cart_link"]';
        this.cart_Count = '.shopping_cart_badge';
        this.checkout = 'xpath=//button[@id="checkout"]';
        this.fn = 'xpath=//input[@id="first-name"]';
        this.ln = 'xpath=//input[@id="last-name"]';
        this.postcode = 'xpath=//input[@id="postal-code"]';
        this.continuebtn = 'xpath=//input[@id="continue"]';
        this.finishbtn = 'xpath=//button[@id="finish"]';
        this.thanksmsg = 'xpath=//h2[normalize-space()="Thank you for your order!"]';

    }

    async getCartCount()
    {
        const badge_Count = await this.page.locator(this.cart_Count);
        if (await badge_Count.isVisible()) 
            {
        const countText = await badge_Count.textContent();
        console.log(countText);
        return parseInt(countText, 10);
            }
            else
            return 0; // if cart is empty 
}
    

    async clickCart()
    {
        console.log("cart click");
        await this.page.locator(this.cart).click();
    }

    async clickCheckOut()
    {
        console.log("cart checkout");
        await this.page.locator(this.checkout).click();
    }


    async checkOutProcess(firstname,lastname,postalcode)
    {
        console.log("checkout process...");
        await this.page.locator(this.fn).fill(firstname);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.ln).fill(lastname);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.postcode).fill(postalcode);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.continuebtn).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.finishbtn).click();
        await this.page.waitForTimeout(1000);
        
        
    }

    async thankYouPage()
    {
        const message = await this.page.locator(this.thanksmsg).textContent();
        console.log(message);
        return message;
    }
}

module.exports={CartPage}