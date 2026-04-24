import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,

  use: {
    headless: true,
    baseURL: env.baseURL,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'tests',
      dependencies: ['setup'],
      use: {
        storageState: 'storageState.json',
      },
    },
  ],

  reporter: [['html'], ['list']],
});