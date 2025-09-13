import { Page } from '@playwright/test';

export type LoginCredentials = {
  email: string;
  password: string;
};

export async function performLogin(page: Page, credentials: LoginCredentials, baseURL = 'https://practicesoftwaretesting.com/') {
  await page.goto(baseURL);
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill(credentials.email);
  await page.locator('[data-test="password"]').fill(credentials.password);
  await page.locator('[data-test="login-submit"]').click();
}