import { test } from '../fixtures/testFixture';
import { expect } from '@playwright/test';
import { testData } from '../config/testData';

test('home page loads correctly', async ({ homePage }) => {
  await homePage.navigate();
  const title = await homePage.getTitle();

  expect(title).toBe(testData.expectedTitle)
});