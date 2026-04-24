import { Page, expect } from '@playwright/test';
import { retry } from '../utils/retry';

export class InventoryPage {
  constructor(private page: Page) {}

  private addToCartButtons = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

  private cartIcon = () =>
    this.page.locator('[data-test="shopping-cart-link"]');

  async addFirstItemToCart() {
    await expect(this.addToCartButtons().first()).toBeVisible({ timeout: 5000 });

    await retry(async () => {
      await this.page.waitForTimeout(2000);
      await this.addToCartButtons().first().click();
    });
  }

  async goToCart() {
    await retry(async () => {
      await this.cartIcon().click();
    });
  }
}