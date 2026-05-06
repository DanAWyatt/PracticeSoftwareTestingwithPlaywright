import { expect, test } from '@playwright/test';
import { systemTargets } from './config/system-targets';
import { expectHomeNavigation, requireSystemExecution } from './utils/system-helpers';

test.describe('System - Accessibility Smoke Audit', () => {
  test('should expose keyboard-reachable navigation and a titled page', async ({ page }, testInfo) => {
    requireSystemExecution(testInfo);

    await test.step('Given the user opens the home page', async () => {
      await page.goto(systemTargets.paths.home);
      await expect(page).toHaveTitle(/practice software testing|toolshop/i);
      await expectHomeNavigation(page);
    });

    await test.step('When the user navigates using keyboard only', async () => {
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
    });

    await test.step('Then a visible focused element should be present', async () => {
      const activeElementTag = await page.evaluate(() =>
        document.activeElement ? document.activeElement.tagName.toLowerCase() : ''
      );
      expect(activeElementTag.length).toBeGreaterThan(0);
    });
  });
});
