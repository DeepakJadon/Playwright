class CloudDashboardPage
{
        constructor(page)
        {
        this.page=page;
        this.dashboardlink = 'xpath=//*[name()="path" and contains(@d,"M7.33335 1")]';
        this.count ='xpath=(//h1[normalize-space()="30"])[1]';
        this.applicationlink = 'xpath=//label[normalize-space()="Applications"]';
           
        }


        async navigateToDashboard()
        { 
               
               await this.page.locator(this.dashboardlink).click();        
        }



         async navigateToApplications()
        { 
               await this.page.locator(this.applicationlink).click();          
        }


        async getCount()
        {
            const count = await this.page.locator(this.count).textContent();
            return count;
            
        }

      
}


module.exports = {CloudDashboardPage};
