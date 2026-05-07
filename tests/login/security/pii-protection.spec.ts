import { expect, test } from '@playwright/test';
import { performLogin } from '../../../fixtures/loginActions';
import { attackerPersonas } from './config/attacker-personas';
import { securityTargets } from './config/security-targets';
import {
  assertNoSensitiveValuesInDom,
  requireSecurityExecution,
} from './utils/security-helpers';

test.describe('Security - PII and Sensitive Data Protection', () => {
  test('should not expose password and sensitive test values in the DOM after login', async ({ page }, testInfo) => {
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

    await expect(page.locator('[data-test="nav-home"]')).toBeVisible();

    await assertNoSensitiveValuesInDom(page, [
      user.password!,
      '4111111111111111',
      '123',
    ]);
  });
});
