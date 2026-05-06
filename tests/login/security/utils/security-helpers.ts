import { APIRequestContext, expect, Page, TestInfo } from '@playwright/test';
import { requireSuiteExecution } from '../../../shared/execution-gates';

export function requireSecurityExecution(testInfo: TestInfo): void {
  requireSuiteExecution(testInfo, 'security');
}

export async function expectRestrictedAdminAccess(page: Page): Promise<void> {
  const url = page.url().toLowerCase();
  const hasRestrictionSignal =
    url.includes('/sign-in') ||
    url.includes('/login') ||
    url.includes('/forbidden') ||
    url.includes('/unauthorized');

  const hasOnPageSignal = await page
    .getByText(/forbidden|unauthorized|sign in|access denied/i)
    .first()
    .isVisible()
    .catch(() => false);

  expect(hasRestrictionSignal || hasOnPageSignal).toBeTruthy();
}

export async function unauthenticatedGet(
  request: APIRequestContext,
  url: string,
  timeoutMs = 15000
): Promise<{ status: number; durationMs: number }> {
  const started = Date.now();
  const response = await request.get(url, { timeout: timeoutMs });
  return {
    status: response.status(),
    durationMs: Date.now() - started,
  };
}

export async function assertNoSensitiveValuesInDom(
  page: Page,
  sensitiveValues: string[]
): Promise<void> {
  const content = await page.content();
  for (const value of sensitiveValues) {
    expect(content).not.toContain(value);
  }
}
