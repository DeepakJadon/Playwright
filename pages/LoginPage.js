class LoginPage {

    constructor(page) {
        this.page = page;
    }

    get usernameField() {
        return this.page.locator('//input[@id="user-name"]');
    }

    get passwordField() {
        return this.page.locator('//input[@id="password"]');
    }

    get loginButton() {
        return this.page.locator('//input[@id="login-button"]');
    }

    async landingPage() {
        console.log("Visit Demo website");
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        console.log("Login to website");
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };
