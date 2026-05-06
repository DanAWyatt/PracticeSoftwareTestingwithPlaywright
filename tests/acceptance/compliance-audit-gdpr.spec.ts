import { test } from '@playwright/test';
import { acceptanceGates } from './config/acceptance-gates';
import {
  requireAcceptanceExecution,
  verifyPrivacyPolicyAccessible,
} from './utils/acceptance-helpers';

test.describe('Acceptance Compliance - GDPR', () => {
  test('should verify privacy policy visibility and access', async ({ page }, testInfo) => {
    requireAcceptanceExecution(testInfo);

    await test.step('Given a user is on the public home page', async () => {
      await page.goto('/');
    });

    await test.step('When the user navigates to the privacy policy', async () => {
      await verifyPrivacyPolicyAccessible(page);
    });

    await test.step('Then the GDPR acceptance gate should be represented in the scenario output', async () => {
      const gate = acceptanceGates.find((g) => g.id === 'ACCEPTANCE-GATE-002');
      console.info(`Gate evaluated: ${gate?.id} - ${gate?.description}`);
    });
  });
});
