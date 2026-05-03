import { test, expect } from '@playwright/test';
const Config = require('../config');
const LoginPage = require('../pages/login-page');

test.describe('Login page', () => {

  test('login', async ({ page }) => { 
    const loginPage = new LoginPage(page);
    test.step("open main page", async (page) => {
      loginPage.openLink(Config.mainPageURL);    
    });
    test.step("click login button", async (page) => {
      await loginPage.clickLoginButton();
    });
    test.step("fill login field", async (page) => {
      await loginPage.fillLoginField(Config.email);
    });
    test.step("fill password field", async (page) => {
      await loginPage.fillPasswordField(Config.password);
    });
    test.step("click submit button", async (page) => {
      await loginPage.clickSubmitButton();
    });
    test.step("check profile URL", async (page) => {
      await loginPage.checkPageURL(Config.profilePageURL);
    });
  });
});

