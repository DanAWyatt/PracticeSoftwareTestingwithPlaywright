import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  use: {
    headless: true,
    baseURL: 'https://practicesoftwaretesting.com/',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Login Chromium',
      testDir: './tests/login',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Chromium Desktop',
      use: {
        browserName: 'chromium',
        storageState: 'storageState.json',
        viewport: { width: 1280, height: 720 },
      },
      testIgnore: ['**/tests/login/**'],
    },
    {
      name: 'Chromium Pixel 8',
      use: {
        browserName: 'chromium',
        storageState: 'storageState.json',
        ...devices['Pixel 8'],
      },
      testIgnore: ['**/tests/login/**'],
    },
    {
      name: 'WebKit Desktop',
      use: {
        browserName: 'webkit',
        storageState: 'storageState.json',
        viewport: { width: 1280, height: 720 },
      },
      testIgnore: ['**/tests/login/**'],
    },
    {
      name: 'WebKit iPhone 14',
      use: {
        browserName: 'webkit',
        storageState: 'storageState.json',
        ...devices['iPhone 14'],
      },
      testIgnore: ['**/tests/login/**'],
    },
  ],
  globalSetup: './globalSetup.ts',
});
