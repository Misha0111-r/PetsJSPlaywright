const BasePage = require('./base-page');

class LoginPage extends BasePage{
  constructor(page) {
    super(page);
    this.loginButton = page.getByText("Login");
    this.loginField = page.locator('//*[@id="login"]');
    this.passwordField = page.locator('//*[@id="password"]/input');
    this.submitButton = page.getByText("Submit");
  }

    async clickLoginButton(){
      await this.loginButton.click();
    }

    async fillLoginField(email){
      await this.loginField.fill(email)
    }

    async fillPasswordField(password){
      await this.passwordField.fill(password);
    }

    async clickSubmitButton(){
      await this.submitButton.click();
    }
}

module.exports = LoginPage;