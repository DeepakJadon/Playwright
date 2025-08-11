class HomePage

{

        constructor(page)
        {
        this.page=page;
        this.dropdown ='xpath=//select[@class="product_sort_container"]';
        this.productlist = '.inventory_item_name';
        this.productprice = '.inventory_item_price';
        this.addtocart = 'xpath=//button[@id="add-to-cart"]';   
        }

    async dropdownClick()
    {
        console.log("Click drop down");
        await this.page.locator(this.dropdown).click();
      
           
    }

    async keyboardEvent(key)
    {
         console.log("Select Option Z-A");
         await this.page.keyboard.down(key);
    }


    async getAllProductList()
    {
        //const element = await this.page.locator(`xpath=//*[@id='item_${count}_title_link']/div[@class='inventory_item_name ']`).textContent();
        console.log("Verify Sort Products Order");
        const titles = [];
        const elements = await this.page.locator(this.productlist);
        const count = await elements.count();
        console.log(count);


       for (let i=0; i<count ; i++)
       {
            const name = await elements.nth(i).textContent();
            console.log(name);
            titles.push(name);
       }
        
        console.log(titles);
        return titles;    
         
    }


    async getAllProductPrice()
    {
        console.log("Verify price Order");
        const ProductPrices = [];
        const elements = await this.page.locator(this.productprice);
        const count = await elements.count();
        console.log(count);

         for (let j=0; j<count ; j++)
       {
            const price = await elements.nth(j).textContent();
            console.log(price);
            ProductPrices.push(price);
       }

       console.log(ProductPrices);
       return ProductPrices;

    }

    async addProductToCart(productName)
    {
        console.log("Add Products to Cart");
        const Product_titles = [];
        const elements = await this.page.locator(this.productlist);
        const count = await elements.count();
        console.log(count);


       for (let k=0; k<count ; k++)
       {
            const name = await elements.nth(k).textContent();
            console.log(name);
            if (productName === name)
            {

              await this.page.waitForTimeout(1000);
              await this.page.click(`text="${productName}"`);
              await this.page.waitForTimeout(1000);
              await this.page.locator(this.addtocart).click();
              await this.page.goBack();
              break;

            }
            Product_titles.push(name);
       }
        
        console.log(Product_titles);
 
    }
    

}

module.exports={HomePage};