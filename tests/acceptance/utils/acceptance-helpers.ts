import { expect, Page, TestInfo } from '@playwright/test';

export function requireAcceptanceExecution(testInfo: TestInfo): void {
  if (process.env.ACCEPTANCE_ENABLE !== 'true') {
    testInfo.skip(
      true,
      'Set ACCEPTANCE_ENABLE=true to run acceptance scaffold tests intentionally.'
    );
  }
}

export async function verifyPrivacyPolicyAccessible(page: Page): Promise<void> {
  const privacyLink = page
    .getByRole('link', { name: /privacy/i })
    .or(page.locator('a:has-text("Privacy")').first());

  await expect(privacyLink).toBeVisible();
  await privacyLink.click();
  await expect(page).toHaveURL(/privacy|policy/i);
}

export async function verifyCoreNavigationAvailable(page: Page): Promise<void> {
  await expect(page.locator('[data-test="nav-home"]')).toBeVisible();
  await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();
}

export async function givenWhenThen(
  page: Page,
  name: string,
  givenAction: () => Promise<void>,
  whenAction: () => Promise<void>,
  thenAction: () => Promise<void>
): Promise<void> {
  await page.context().tracing.start({ screenshots: false, snapshots: true });

  await givenAction();
  await whenAction();
  await thenAction();

  await page.context().tracing.stop();
  console.info(`BDD scenario executed: ${name}`);
}
