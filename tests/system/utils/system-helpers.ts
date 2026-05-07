import { expect, Locator, Page, TestInfo } from '@playwright/test';
import { requireSuiteExecution } from '../../shared/execution-gates';

export function requireSystemExecution(testInfo: TestInfo): void {
  requireSuiteExecution(testInfo, 'system');
}

export async function firstVisibleLocator(
  page: Page,
  selectors: string[]
): Promise<Locator> {
  for (const selector of selectors) {
    const candidate = page.locator(selector).first();
    if (await candidate.isVisible().catch(() => false)) {
      return candidate;
    }
  }

  throw new Error(`No visible selector found. Tried: ${selectors.join(', ')}`);
}

export async function clickFirstVisible(page: Page, selectors: string[]): Promise<void> {
  const target = await firstVisibleLocator(page, selectors);
  await target.click();
}

export async function fillFirstVisible(
  page: Page,
  selectors: string[],
  value: string
): Promise<void> {
  const target = await firstVisibleLocator(page, selectors);
  await target.fill(value);
}

export async function expectHomeNavigation(page: Page): Promise<void> {
  await expect(page.locator('[data-test="nav-home"]')).toBeVisible();
}

export async function expectNotOnSignIn(page: Page): Promise<void> {
  await expect(page).not.toHaveURL(/sign-in|login/i);
}
