import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserService } from '../services/UserService';

type Fixtures = {
  homePage: HomePage;
  userService: UserService;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  userService: async ({ request }, use) => {
    await use(new UserService(request));
  },
});