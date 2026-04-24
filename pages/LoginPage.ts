import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  usernameInput() {
    return this.page.locator('[data-test="username"]');
  }

  passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  loginButton() {
    return this.page.locator('[data-test="login-button"]');
  }

  async login(username: string, password: string) {
    await this.usernameInput().waitFor({ state: 'visible' });

    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);

    await Promise.all([
      this.page.waitForURL('**/inventory.html'),
      this.loginButton().click(),
    ]);
  }

  async assertLoggedIn() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}