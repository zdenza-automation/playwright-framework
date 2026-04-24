import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    headless: true,
    baseURL: env.baseURL,
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