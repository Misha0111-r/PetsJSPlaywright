import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test.beforeEach(async (page) => {
    await page.goto('http://34.141.58.52:8080/#/');
  });
  
  test('test', async ({ page }) => { 
  await page.getByRole('menuitem', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login *' }).click();
  await page.getByRole('textbox', { name: 'Login *' }).fill('Obama@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('BarackObama');
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL('http://34.141.58.52:8080/#/profile');
});
})

