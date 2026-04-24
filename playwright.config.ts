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
  name: 'admin',
  dependencies: ['setup'],
  use: {
    storageState: 'auth/admin.json',
  },
  testIgnore: ['tests/api/**'], // THIS IS KEY
},

  {
    name: 'user',
    dependencies: ['setup'],
    use: {
      storageState: 'auth/user.json',
    },
  },

  {
  name: 'api',
  use: {
    storageState: undefined, // NO AUTH
  },
  testMatch: ['tests/api/**'],
},
],

  reporter: [['html'], ['list']],
});