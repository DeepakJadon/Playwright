//exports.LoginPage
   class LoginPage
{
    constructor (page)
    {
        this.page=page;
        this.username='xpath=//input[@id="user-name"]';
        this.userpwd='xpath=//input[@id="password"]';
        this.loginButton='xpath=//input[@id="login-button"]';

        
    }


    async landingPage()
        {
            console.log("Visit Demo website");
            await this.page.goto('https://www.saucedemo.com/');
        }

        async login(username,password)
        {
             console.log("Login to website");
             await this.page.locator(this.username).fill(username);
             await this.page.locator(this.userpwd).fill(password);
             await this.page.locator(this.loginButton).click();

        }

        

}

module.exports= {LoginPage};