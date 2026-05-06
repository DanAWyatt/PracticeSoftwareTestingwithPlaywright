import { expect, test } from '@playwright/test';
import { performLogin } from '../../fixtures/loginActions';
import { personas } from './config/personas';
import {
  givenWhenThen,
  requireAcceptanceExecution,
  verifyCoreNavigationAvailable,
} from './utils/acceptance-helpers';

test.describe('Acceptance UAT - Professional Contractor', () => {
  test('should validate a business-critical user journey', async ({ page }, testInfo) => {
    requireAcceptanceExecution(testInfo);

    const persona = personas.professionalContractor;

    await givenWhenThen(
      page,
      'Professional Contractor verifies account access and core navigation',
      async () => {
        await test.step('Given the Professional Contractor is on the application home page', async () => {
          await page.goto('/');
          await verifyCoreNavigationAvailable(page);
        });
      },
      async () => {
        await test.step('When the Professional Contractor signs in with valid credentials', async () => {
          await performLogin(
            page,
            {
              email: persona.email!,
              password: persona.password!,
            },
            'https://practicesoftwaretesting.com/'
          );
        });
      },
      async () => {
        await test.step('Then the user should see authenticated navigation controls', async () => {
          await page.locator('[data-test="nav-menu"]').click();
          await expect(page.locator('[data-test="nav-sign-out"]')).toBeVisible();
        });
      }
    );
  });
});
