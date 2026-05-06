export type SampleStatus = 'ok' | 'error';

export type PerfSample = {
  transaction: string;
  durationMs: number;
  status: SampleStatus;
};

export type MetricSummary = {
  count: number;
  successCount: number;
  errorCount: number;
  errorRatePct: number;
  minMs: number;
  maxMs: number;
  avgMs: number;
  p50Ms: number;
  p95Ms: number;
  p99Ms: number;
};

function percentile(values: number[], pct: number): number {
  if (values.length === 0) {
    return 0;
  }

  const sorted = [...values].sort((a, b) => a - b);
  const rank = Math.ceil((pct / 100) * sorted.length) - 1;
  const boundedRank = Math.max(0, Math.min(rank, sorted.length - 1));
  return sorted[boundedRank];
}

export function summarizeSamples(samples: PerfSample[]): MetricSummary {
  if (samples.length === 0) {
    return {
      count: 0,
      successCount: 0,
      errorCount: 0,
      errorRatePct: 0,
      minMs: 0,
      maxMs: 0,
      avgMs: 0,
      p50Ms: 0,
      p95Ms: 0,
      p99Ms: 0,
    };
  }

  const durations = samples.map((s) => s.durationMs);
  const successCount = samples.filter((s) => s.status === 'ok').length;
  const errorCount = samples.length - successCount;
  const sum = durations.reduce((acc, value) => acc + value, 0);

  return {
    count: samples.length,
    successCount,
    errorCount,
    errorRatePct: (errorCount / samples.length) * 100,
    minMs: Math.min(...durations),
    maxMs: Math.max(...durations),
    avgMs: sum / samples.length,
    p50Ms: percentile(durations, 50),
    p95Ms: percentile(durations, 95),
    p99Ms: percentile(durations, 99),
  };
}

export function evaluateThresholds(
  summary: MetricSummary,
  threshold: { p95Ms: number; errorRatePct: number }
): string[] {
  const violations: string[] = [];

  if (summary.p95Ms > threshold.p95Ms) {
    violations.push(
      `P95 latency exceeded: actual=${summary.p95Ms.toFixed(2)}ms threshold=${threshold.p95Ms}ms`
    );
  }

  if (summary.errorRatePct > threshold.errorRatePct) {
    violations.push(
      `Error rate exceeded: actual=${summary.errorRatePct.toFixed(2)}% threshold=${threshold.errorRatePct}%`
    );
  }

  return violations;
}

export function formatSummary(name: string, summary: MetricSummary): string {
  return [
    `Scenario: ${name}`,
    `Samples: ${summary.count}`,
    `Success: ${summary.successCount}`,
    `Errors: ${summary.errorCount}`,
    `Error Rate: ${summary.errorRatePct.toFixed(2)}%`,
    `Latency (ms) => min=${summary.minMs.toFixed(2)}, avg=${summary.avgMs.toFixed(2)}, p50=${summary.p50Ms.toFixed(2)}, p95=${summary.p95Ms.toFixed(2)}, p99=${summary.p99Ms.toFixed(2)}, max=${summary.maxMs.toFixed(2)}`,
  ].join('\n');
}
