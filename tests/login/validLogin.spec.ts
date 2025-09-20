import { test } from '../../fixtures/loginHelper';
import { expect } from '@playwright/test';

const validCredentials = [
  { name: 'John Doe - admin', email: 'admin@practicesoftwaretesting.com', password: 'welcome01' },  
  { name: 'John Doe - admin with case sensitivity', email: 'ADMIN@PRACTICESOFTWARETESTING.COM', password: 'welcome01' },  
  { name: 'Jane Doe - user', email: 'customer@practicesoftwaretesting.com', password: 'welcome01' },
  { name: 'Jack Howe - user', email: 'customer2@practicesoftwaretesting.com', password: 'welcome01' },
  { name: 'Bob Smith - user', email: 'customer3@practicesoftwaretesting.com', password: 'pass123' },
];

for (const creds of validCredentials) {
  test(`should login (${creds.name})`, async ({ page, login }) => {
    await login(creds);

    // Verify home nav is visible
    await expect(page.locator('[data-test="nav-home"]')).toBeVisible();

    // Open menu and verify sign-out
    await page.locator('[data-test="nav-menu"]').click();
    await expect(page.locator('[data-test="nav-sign-out"]')).toBeVisible();

    // SECURITY CHECK: Ensure password is not present anywhere in DOM
    const pageContent = await page.content();
    expect(pageContent).not.toContain(creds.password);

    // Sign out
    await page.locator('[data-test="nav-sign-out"]').click();
    await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();
  });
}
