import { expect, Page, TestInfo } from '@playwright/test';

export function requireIntegrationExecution(testInfo: TestInfo): void {
  if (process.env.INTEGRATION_ENABLE !== 'true') {
    testInfo.skip(
      true,
      'Set INTEGRATION_ENABLE=true to run integration scaffold tests intentionally.'
    );
  }
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
