import { expect, test } from '@playwright/test';
import { integrationProfiles, integrationTargets } from './config/integration-targets';
import { apiGet } from './utils/api-client';
import { requireIntegrationExecution } from './utils/integration-helpers';

test.describe('Integration - Order/Cart API', () => {
  test('should enforce authorization contract for cart endpoint', async ({ request }, testInfo) => {
    requireIntegrationExecution(testInfo);

    const url = `${integrationTargets.apiBaseUrl}${integrationTargets.endpoints.cart}`;
    const result = await apiGet(request, url, integrationProfiles.defaultTimeoutMs);

    // Unauthenticated cart access should not produce a successful privileged response.
    expect([401, 403, 404]).toContain(result.status);
    expect(result.durationMs).toBeLessThanOrEqual(integrationProfiles.expectedApiLatencyMs);
  });
});
