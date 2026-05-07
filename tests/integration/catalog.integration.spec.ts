import { expect, test } from '@playwright/test';
import { integrationProfiles, integrationTargets } from './config/integration-targets';
import { apiGet, assertObject } from './utils/api-client';
import {
  expectVisibleErrorText,
  fulfillJsonRoute,
  requireIntegrationExecution,
} from './utils/integration-helpers';
import { apiErrorMocks } from './mocks/api-errors';

test.describe('Integration - Catalog UI/API', () => {
  test('should validate catalog API response and timing', async ({ request }, testInfo) => {
    requireIntegrationExecution(testInfo);

    const url = `${integrationTargets.apiBaseUrl}${integrationTargets.endpoints.products}`;
    const result = await apiGet(request, url, integrationProfiles.defaultTimeoutMs);

    expect(result.ok).toBeTruthy();
    expect(result.durationMs).toBeLessThanOrEqual(integrationProfiles.expectedApiLatencyMs);

    if (result.json !== undefined) {
      assertObject(result.json);
      expect(result.json.data || result.json.products).toBeTruthy();
    }
  });

  test('should display graceful UI handling when catalog endpoint returns 422', async ({ page }, testInfo) => {
    requireIntegrationExecution(testInfo);

    await fulfillJsonRoute(
      page,
      /\/products(\?.*)?$/,
      apiErrorMocks.unprocessableEntity422
    );

    await page.goto('/');
    await expectVisibleErrorText(page, /validation failed|error|try again/i);
  });
});
