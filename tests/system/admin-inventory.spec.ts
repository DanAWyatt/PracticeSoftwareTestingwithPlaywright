import { test } from '@playwright/test';
import { performLogin } from '../../fixtures/loginActions';
import { systemPersonas } from './config/system-personas';
import { systemTargets } from './config/system-targets';
import {
  expectNotOnSignIn,
  requireSystemExecution,
} from './utils/system-helpers';

test.describe('System - Admin Operations Access', () => {
  test('should allow admin user to authenticate and access admin area', async ({ page }, testInfo) => {
    requireSystemExecution(testInfo);

    const admin = systemPersonas.administrator;
    await performLogin(
      page,
      {
        email: admin.email!,
        password: admin.password!,
      },
      systemTargets.appBaseUrl
    );

    await test.step('Given the admin is authenticated', async () => {
      await expectNotOnSignIn(page);
    });

    await test.step('When the admin navigates to the admin route', async () => {
      await page.goto(`${systemTargets.appBaseUrl}${systemTargets.paths.admin}`);
    });

    await test.step('Then the session should not be forced back to sign-in', async () => {
      await expectNotOnSignIn(page);
    });
  });
});
