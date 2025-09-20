import { Page } from '@playwright/test';

export type LoginCredentials = {
  email: string;
  password: string;
};

export async function performLogin(
  page: Page,
  credentials: LoginCredentials,
  baseURL = 'https://practicesoftwaretesting.com/'
) {
  await page.goto(baseURL);

  // Detect mobile viewport and open menu if needed
  const viewport = page.viewportSize();
  // If viewport is not set, fallback to checking user agent
  const isMobile =
    (viewport && viewport.width <= 600) ||
    (await page.evaluate(() => window.innerWidth <= 600));

  if (isMobile) {
    // Click the menu button to reveal navigation links
    await page.locator('body > app-root > app-header > nav > div > button').click();
  }

  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill(credentials.email);
  await page.locator('[data-test="password"]').fill(credentials.password);
  await page.locator('[data-test="login-submit"]').click();
}