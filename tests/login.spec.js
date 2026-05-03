import { test, expect } from '@playwright/test';
const Config = require('../config');
const LoginPage = require('../pages/login-page');

test.describe('Login page', () => {

  test('login', async ({ page }) => { 
    const loginPage = new LoginPage(page);
    await test.step("open main page", async (page) => {
      await loginPage.openLink(Config.mainPageURL);    
    });
    await test.step("click login button", async (page) => {
      await loginPage.clickLoginButton();
    });
    await test.step("fill password field", async (page) => {
      await loginPage.fillPasswordField(Config.password);
    });
    await test.step("fill login field", async (page) => {
      await loginPage.fillLoginField(Config.email);
    });
    await test.step("click submit button", async (page) => {
      await loginPage.clickSubmitButton();
    });
    await test.step("check profile URL", async (page) => {
      await loginPage.checkPageURL(Config.profilePageURL);
    });
  });
});

