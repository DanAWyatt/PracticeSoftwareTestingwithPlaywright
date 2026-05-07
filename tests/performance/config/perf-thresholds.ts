export type PerformanceThreshold = {
  p95Ms: number;
  errorRatePct: number;
};

export type ThresholdMap = Record<string, PerformanceThreshold>;

export const baselineThresholds: ThresholdMap = {
  homePageLoad: {
    p95Ms: 2000,
    errorRatePct: 1,
  },
  catalogApiRead: {
    p95Ms: 1500,
    errorRatePct: 1,
  },
};
