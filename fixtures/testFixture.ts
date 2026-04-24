import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ServiceManager } from '../services/ServiceManager';
import { usersMock } from '../mocks/userMocks';

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  services: ServiceManager;
  mockUsersApi: void;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  services: async ({ request }, use) => {
    await use(new ServiceManager(request));
  },

  mockUsersApi: async ({ page }, use) => {
    await page.route('**/api/users', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(usersMock),
      });
    });

    await use();
  },
});

export { expect };