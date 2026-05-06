import { expect, test } from '@playwright/test';
import { integrationProfiles, integrationTargets } from './config/integration-targets';
import { apiPost, assertObject } from './utils/api-client';
import { requireIntegrationExecution } from './utils/integration-helpers';

test.describe('Integration - Auth UI/API', () => {
  test('should reject invalid login via API and expose contract shape', async ({ request }, testInfo) => {
    requireIntegrationExecution(testInfo);

    const url = `${integrationTargets.apiBaseUrl}${integrationTargets.endpoints.login}`;
    const result = await apiPost(
      request,
      url,
      {
        email: 'wrong@example.com',
        password: 'bad-password',
      },
      integrationProfiles.defaultTimeoutMs
    );

    expect(result.durationMs).toBeLessThanOrEqual(integrationProfiles.expectedApiLatencyMs);
    expect([400, 401, 403, 422]).toContain(result.status);

    if (result.json !== undefined) {
      assertObject(result.json);
      const keys = Object.keys(result.json);
      expect(keys.length).toBeGreaterThan(0);
    }
  });
});
