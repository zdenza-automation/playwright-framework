import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('https://example.com');

  // 👉 Simulate login (replace later with real login)
  // Example:
  // await page.fill('#username', 'user');
  // await page.fill('#password', 'pass');
  // await page.click('button[type=submit]');

  // Save session
  await page.context().storageState({ path: 'storageState.json' });
});