import { test } from '../../fixtures/loginHelper';
import { expect } from '@playwright/test';

const validCredentials = [
  { name: 'John Doe - admin', email: 'admin@practicesoftwaretesting.com', password: 'welcome01' },  
  { name: 'John Doe - admin with case sensitivity', email: 'ADMIN@PRACTICESOFTWARETESTING.COM', password: 'welcome01' }, // Testing case sensitivity  
  { name: 'Jane Doe - user', email: 'customer@practicetesting.com', password: 'welcome01' },
  { name: 'Jack Howe - user', email: 'customer2@practicesoftwaretesting.com', password: 'welcome01' },
  { name: 'Bob Smith - user', email: 'customer3@practicesoftwaretesting.com', password: 'pass123' },
];

for (const creds of validCredentials) {
  test(`should login (${creds.name})`, async ({ page, login }) => {
    await login(creds);
    await expect(page.locator('data-test="nav-menu"')).toBeVisible();
    
    await page.locator('data-test="nav-menu').click();
    await expect(page.locator('data-test="nav-sign-out"')).toBeVisible();   // Verify presence of sign-out option
    await page.locator('data-test="nav-sign-out').click(); // Log out to reset state
    await expect(page.locator('data-test="nav-sign-in"')).toBeVisible(); // Verify presence of sign-in option
  });
}