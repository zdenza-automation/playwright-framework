import { test } from '../fixtures/testFixture';
import { expect } from '@playwright/test';

test('API returns users @api', async ({ userService }) => {
  const users = await userService.getUsers();

  expect(users.length).toBeGreaterThan(0);
});