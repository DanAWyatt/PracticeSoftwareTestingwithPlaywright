import { expect, Page, TestInfo } from '@playwright/test';
import { requireSuiteExecution } from '../../shared/execution-gates';

export function requireIntegrationExecution(testInfo: TestInfo): void {
  requireSuiteExecution(testInfo, 'integration');
}

export async function fulfillJsonRoute(
  page: Page,
  urlPattern: RegExp,
  payload: { status: number; contentType: string; body: unknown }
): Promise<void> {
  await page.route(urlPattern, async (route) => {
    await route.fulfill({
      status: payload.status,
      contentType: payload.contentType,
      body: JSON.stringify(payload.body),
    });
  });
}

export async function expectVisibleErrorText(page: Page, expression: RegExp): Promise<void> {
  await expect(page.getByText(expression)).toBeVisible();
}
