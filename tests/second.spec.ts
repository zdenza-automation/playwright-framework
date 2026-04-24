import { test } from '../fixtures/testFixture';
import { expect } from '@playwright/test';
import { testData } from '../config/testData';

test('title is exact @smoke @ui', async ({ homePage }) => {
  await homePage.navigate();
  const title = await homePage.getTitle();

  expect(title).toBe(testData.expectedTitle);
});