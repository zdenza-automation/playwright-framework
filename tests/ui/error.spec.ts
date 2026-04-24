import { test, expect } from '../../fixtures/testFixture';

test('invalid login shows error message @ui @critical', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'invalid_user');
  await page.fill('[data-test="password"]', 'wrong_password');
  await page.click('[data-test="login-button"]');

  const error = page.locator('[data-test="error"]');

  await expect(error).toBeVisible();
});