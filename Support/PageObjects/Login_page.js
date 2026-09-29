const { expect } = require("@playwright/test");
const { common_locators } = require("../Locators/Common_locators")
class login_page {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator(common_locators.Login_page_locators.user_name);
        this.passwordInput = page.locator(common_locators.Login_page_locators.password);
        this.loginButton = page.locator(common_locators.Login_page_locators.login_button);
        this.loginPageTitle = page.locator(common_locators.Login_page_locators.login_page_tite);
         this.errorMessage = page.locator(common_locators.Login_page_locators.error_msg);
    }

    async visitBaseURL() {
        await this.page.goto("/");
    }

    async Verify_Login_Title(title) {
        await expect(this.loginPageTitle).toHaveText(title);
    }
        //  // enter username 
    //     await page.locator('[id="user-name"]').fill("standard_user")
    //     //enter password 
    //     await page.locator('[id="password"]').fill("secret_sauce")
    //     // click on signing button 
    //     await page.locator('[id="login-button"]').click()
    //     //verify product page title 
    //     await expect(page.locator('[class="title"]')).toHaveText("Products")


    async Fill_username(username) {
        await this.usernameInput.fill(username);
    }

    async Fill_password(password) {
        await this.passwordInput.fill(password);
    }

    async click_on_login_button() {
        await this.loginButton.click();
    }
     async verify_error_msg(expectedMessage) {
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
    async login(username, password) {
        await this.Fill_username(username);
        await this.Fill_password(password);
       // await this.page.pause();
        await this.click_on_login_button();
    }
}
const login_page = new Login_page()
module.exports = { login_page };