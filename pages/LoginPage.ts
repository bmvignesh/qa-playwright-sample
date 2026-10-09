import { Page } from '@playwright/test';

export class LoginPage {
  usernameField;
  passwordField;
  loginButton;

  constructor(private page: Page) {
    this.usernameField = this.page.locator('#username');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.locator('button.radius');
  }

  async login(username: string, password: string) {
    // Wait until login button is visible before interacting
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });

    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
