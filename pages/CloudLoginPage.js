class CloudLoginPage
{
    constructor (page)
    {
        
        this.page = page;
        this.username='[name="emailField"]';
        this.userpwd='[name="passField"]';
        this.loginButton='xpath=(//h5[normalize-space()="Sign in"])[1]';
        

        
    }


    async landingPage()
        {
            await this.page.goto('https://sandbox20.cloudeagle.info/app/application');
            await this.page.waitForLoadState('networkidle');
        }

        async login(username,password)
        {
             console.log("Login to website");
             //await this.page.waitForSelector(this.username, { timeout: 1000 });
             // await this.page.locator(this.username).fill(username);
             await this.page.getByRole('textbox', { name: 'debra.holt@example.com' }).fill(username);
             await this.page.getByRole('textbox', { name: '••••••••' }).fill(password);
             // await this.page.waitForSelector(this.userpwd, { timeout: 1000 });
             // await this.page.locator(this.userpwd).fill(password);
             //await this.page.locator(this.loginButton).click();
             await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();
             
            

        }

        

}

module.exports= {CloudLoginPage};