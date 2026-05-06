# Performance Test Scaffold

This folder contains a starter implementation scaffold for performance testing with Playwright.

## Structure

- `baseline.performance.spec.ts`: Baseline test skeleton with warm-up, measurement, and cooldown phases.
- `config/workloads.ts`: Reusable workload profiles.
- `config/perf-thresholds.ts`: Threshold definitions used for pass/fail assertions.
- `utils/metrics.ts`: Sampling, percentile, summary formatting, and threshold evaluation helpers.

## Running the Scaffold

By default, the baseline test is intentionally skipped.

PowerShell example:

```powershell
$env:PERF_ENABLE = "true"
npx playwright test tests/performance/baseline.performance.spec.ts
```

## Notes

- Threshold values are starter defaults and should be tuned with empirical baseline data.
- The first implementation uses low-risk transactions as a foundation before expanding into checkout and auth scenarios.
