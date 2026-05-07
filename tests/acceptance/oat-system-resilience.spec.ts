import { expect, test } from '@playwright/test';
import { acceptanceGates } from './config/acceptance-gates';
import {
  requireAcceptanceExecution,
  verifyCoreNavigationAvailable,
} from './utils/acceptance-helpers';

test.describe('Acceptance OAT - System Resilience', () => {
  test('should remain operational across repeated availability probes', async ({ page }, testInfo) => {
    requireAcceptanceExecution(testInfo);

    await test.step('Given the system is reachable at the target environment', async () => {
      await page.goto('/');
      await verifyCoreNavigationAvailable(page);
    });

    await test.step('When availability probes are executed over repeated checks', async () => {
      for (let i = 0; i < 3; i++) {
        await page.reload({ waitUntil: 'domcontentloaded' });
        await expect(page).toHaveURL(/practicesoftwaretesting\.com/);
      }
    });

    await test.step('Then the application should remain responsive for customer entry points', async () => {
      await verifyCoreNavigationAvailable(page);
      const gate = acceptanceGates.find((g) => g.id === 'ACCEPTANCE-GATE-003');
      console.info(`Gate evaluated: ${gate?.id} - ${gate?.description}`);
    });
  });
});
