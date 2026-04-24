import { test } from '../fixtures/testFixture';
import { expect } from '@playwright/test';
import { testData } from '../config/testData';

test('API data matches UI logic @regression @ui @api', async ({ homePage, userService }) => {
  const users = await userService.getUsers();

  await homePage.navigate();
  const title = await homePage.getTitle();

  expect(users.length).toBeGreaterThan(0);
  expect(title).toBe(testData.expectedTitle)
});