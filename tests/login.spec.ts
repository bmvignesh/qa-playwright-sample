import { test } from '../fixtures';
import { expect } from '@playwright/test';

test('Login test', async ({ page, loginPage }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  const flashMessage = page.locator('#flash');
  await expect(flashMessage).toBeVisible({ timeout: 10000 });
  await expect(flashMessage).toContainText('You logged into a secure area!');
});
