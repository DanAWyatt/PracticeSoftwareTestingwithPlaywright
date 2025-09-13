import { test as base } from '@playwright/test';
import { performLogin, LoginCredentials } from '../fixtures/loginActions';

export const test = base.extend<{
  login: (credentials: LoginCredentials) => Promise<void>;
}>({
  login: async ({ page }, use) => {
    await use(async (credentials: LoginCredentials) => {
      await performLogin(page, credentials);
    });
  },
});