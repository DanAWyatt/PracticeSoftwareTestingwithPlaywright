import { expect, test } from '@playwright/test';
import { systemPersonas } from './config/system-personas';
import { systemTargets } from './config/system-targets';
import {
  clickFirstVisible,
  expectHomeNavigation,
  fillFirstVisible,
  requireSystemExecution,
} from './utils/system-helpers';

test.describe('System - Guest Checkout Journey', () => {
  test('should allow guest to discover product and reach cart/checkout entry', async ({ page }, testInfo) => {
    requireSystemExecution(testInfo);

    const persona = systemPersonas.guestUser;
    console.info(`System persona: ${persona.name} | objective: ${persona.objective}`);

    await test.step('Given the guest user opens the storefront', async () => {
      await page.goto(systemTargets.paths.home);
      await expectHomeNavigation(page);
    });

    await test.step('When the guest searches for a product and opens details', async () => {
      await fillFirstVisible(page, ['[data-test="search-query"]', 'input[type="search"]'], 'hammer');
      await page.keyboard.press('Enter');

      await clickFirstVisible(page, [
        '[data-test="product-name"]',
        'a:has-text("Hammer")',
        '[data-test="product-title"]',
      ]);
    });

    await test.step('Then the guest can add an item to cart and reach checkout entry', async () => {
      await clickFirstVisible(page, [
        '[data-test="add-to-cart"]',
        'button:has-text("Add to cart")',
      ]);

      await clickFirstVisible(page, ['[data-test="nav-cart"]', 'a:has-text("Cart")']);
      await expect(page).toHaveURL(/cart|checkout/i);
    });
  });
});
