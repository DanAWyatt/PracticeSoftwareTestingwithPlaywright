import { test } from '@playwright/test';
import { performLogin } from '../../../fixtures/loginActions';
import { attackerPersonas } from './config/attacker-personas';
import { securityTargets } from './config/security-targets';
import {
  expectRestrictedAdminAccess,
  requireSecurityExecution,
} from './utils/security-helpers';

test.describe('Security - RBAC Access Control', () => {
  test('should block admin dashboard for standard user', async ({ page }, testInfo) => {
    requireSecurityExecution(testInfo);

    const user = attackerPersonas.standardUser;
    await performLogin(
      page,
      {
        email: user.email!,
        password: user.password!,
      },
      securityTargets.appBaseUrl
    );

    await page.goto(`${securityTargets.appBaseUrl}${securityTargets.paths.admin}`);
    await expectRestrictedAdminAccess(page);
  });

  test('should block admin dashboard for unauthenticated visitor', async ({ page }, testInfo) => {
    requireSecurityExecution(testInfo);

    await page.goto(`${securityTargets.appBaseUrl}${securityTargets.paths.admin}`);
    await expectRestrictedAdminAccess(page);
  });
});
