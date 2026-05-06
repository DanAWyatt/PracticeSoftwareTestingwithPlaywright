import { expect, test } from '@playwright/test';
import { baselineThresholds } from './config/perf-thresholds';
import { workloadProfiles } from './config/workloads';
import {
  PerfSample,
  evaluateThresholds,
  formatSummary,
  summarizeSamples,
} from './utils/metrics';
import { requireSuiteExecution } from '../shared/execution-gates';

const apiCatalogUrl = 'https://api.practicesoftwaretesting.com/products?limit=9';

test.describe('Performance Baseline', () => {
  test.describe.configure({ timeout: 10 * 60 * 1000 });

  test('home page and catalog API baseline', async ({ page, request }, testInfo) => {
    requireSuiteExecution(testInfo, 'performance');

    const profile = workloadProfiles.baseline;
    const homePageSamples: PerfSample[] = [];
    const apiSamples: PerfSample[] = [];

    // Warm-up phase reduces first-hit bias in baseline metrics.
    for (let i = 0; i < profile.warmupIterations; i++) {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await request.get(apiCatalogUrl);
    }

    for (let i = 0; i < profile.iterations; i++) {
      let startedAt = Date.now();
      try {
        const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
        const durationMs = Date.now() - startedAt;
        const status = response && response.ok() ? 'ok' : 'error';
        homePageSamples.push({
          transaction: 'homePageLoad',
          durationMs,
          status,
        });
      } catch {
        homePageSamples.push({
          transaction: 'homePageLoad',
          durationMs: Date.now() - startedAt,
          status: 'error',
        });
      }

      startedAt = Date.now();
      try {
        const response = await request.get(apiCatalogUrl);
        const durationMs = Date.now() - startedAt;
        apiSamples.push({
          transaction: 'catalogApiRead',
          durationMs,
          status: response.ok() ? 'ok' : 'error',
        });
      } catch {
        apiSamples.push({
          transaction: 'catalogApiRead',
          durationMs: Date.now() - startedAt,
          status: 'error',
        });
      }
    }

    for (let i = 0; i < profile.cooldownIterations; i++) {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
    }

    const homeSummary = summarizeSamples(homePageSamples);
    const apiSummary = summarizeSamples(apiSamples);

    console.info(formatSummary('homePageLoad', homeSummary));
    console.info(formatSummary('catalogApiRead', apiSummary));

    const homeViolations = evaluateThresholds(
      homeSummary,
      baselineThresholds.homePageLoad
    );
    const apiViolations = evaluateThresholds(
      apiSummary,
      baselineThresholds.catalogApiRead
    );

    expect(homeViolations.join('\n')).toBe('');
    expect(apiViolations.join('\n')).toBe('');
  });
});
