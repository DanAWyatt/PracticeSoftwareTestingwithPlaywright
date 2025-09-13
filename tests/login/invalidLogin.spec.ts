import { test } from '../../fixtures/loginHelper';
import { expect } from '@playwright/test';

const invalidCredentials = [
  { name: 'invalid email and password', email: 'wrong@example.com', password: 'badpassword' },
  { name: 'empty password', email: 'wrong@example.com', password: '' },
  { name: 'empty email', email: '', password: 'badpassword' },
  { name: 'empty email and password', email: '', password: '' },
  { name: 'invalid email format', email: 'invalid-email', password: 'somepassword' },
  { name: 'SQL injection attempt', email: "admin' --", password: 'password' },
  { name: 'XSS attempt', email: '<script>alert(1)</script>', password: 'password' },
  { name: 'very long email', email: 'a'.repeat(256) + '@example.com', password: 'password' },
  { name: 'very long password', email: 'a@example.com', password: 'p'.repeat(256) },
  { name: 'special characters in email', email: 'user!#$%&\'*+/=?^`{|}~@example.com', password: 'password' },
  { name: 'special characters in password', email: 'wrong@example.com', password: 'p@$$w0rd!#' },
  { name: 'whitespace in email', email: ' wrong@example.com', password: 'password' },
  { name: 'whitespace in password', email: 'wrong@example.com', password: ' password ' },
  { name: 'case sensitivity in email', email: 'WRONG@EXAMPLE.COM', password: 'password' },
  { name: 'case sensitivity in password', email: 'wrong@example.com', password: 'PASSWORD' },
  { name: 'non-ASCII characters in email', email: '用户@例子.广告', password: 'password' },
  { name: 'non-ASCII characters in password', email: 'wrong@example.com', password: 'pässwörd' },
  { name: 'SQL keywords in email', email: 'SELECT * FROM users; --@example.com', password: 'password' },
  { name: 'SQL keywords in password', email: 'wrong@example.com', password: 'SELECT * FROM users; --' },
  { name: 'HTML tags in email', email: '<b>@example.com', password: 'password' },
  { name: 'HTML tags in password', email: 'wromg@example.com', password: '<b>password</b>' },
  { name: 'emoji in email', email: 'user😊@example.com', password: 'password' },
  { name: 'emoji in password', email: 'user@example.com', password: 'pässwörd😊' },
];

for (const creds of invalidCredentials) {
  test(`should not login (${creds.name})`, async ({ page, login }) => {
    await login(creds);
    await expect(page.locator('data-test="nav-menu"')).not.toBeVisible();
  });
}