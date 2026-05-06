# Performance Test Plan: The Toolshop (Performance, Scalability, and Stability)

## 1. Introduction

This Level Test Plan (LTP) defines the approach for **Performance Testing** of The Toolshop application. In alignment with the **Test Policy** and **Test Strategy**, this plan establishes how performance quality will be verified for critical user journeys, API interactions, and operational stability under realistic and elevated load conditions.

### 1.1 References

- `Documentation/TestPlans/TestPolicy.md`
- `Documentation/TestPlans/TestStrategy.md`
- `Documentation/ApplicationUnderTestOverview/PracticeSoftwareTesting.md`
- `Documentation/Legistlative/Regulatory-and-Compliance-Guide.md`
- **ISTQB Syllabi References:**
  - `Certified Tester Advanced Level - Technical Test Analyst (CTAL-TTA)` - For performance risk analysis, non-functional test design, and technical bottleneck identification.
  - `Certified Tester Specialist - Test Automation Skills (CT-TAS)` - For implementation patterns and automation robustness in performance-oriented test suites.
  - `Certified Tester Specialist - Automation and Tools (CT-ATLaS)` - For toolchain strategy, reporting, and CI integration.

## 2. Test Items (Scope)

The scope includes user-facing and API-backed flows with the highest business and operational impact on `practicesoftwaretesting.com`:

- **Frontend Journeys:** Home page load, product search, product detail rendering, cart interactions, login flow, checkout transitions.
- **Backend Integration Points:** Product catalog retrieval, authentication endpoints, cart/order endpoints, and payment simulation interactions.
- **Cross-Platform Runtime:** Desktop and mobile-emulated execution paths where response behavior materially differs.
- **System Stability Window:** Behavior around and between hourly environment resets.

## 3. Features to be Tested

Performance testing focuses on measurable quality attributes:

- **Response Time Performance:** P50/P95/P99 latency for key transactions.
- **Throughput Capacity:** Sustained transaction volume per second for read-heavy and write-heavy journeys.
- **Error Resilience:** Timeout rate, non-2xx/3xx API responses, and UI flow interruption frequency under load.
- **Scalability:** Behavior as concurrent user volume increases from baseline to peak.
- **Endurance (Soak):** Stability of key journeys over prolonged execution windows.

## 4. Performance Approach (Methodology)

A risk-based, layered approach will be used, combining browser-observed behavior with API-level timing.

### 4.1 Test Types

1. **Baseline Testing:** Establish single-user and low-concurrency performance benchmarks.
2. **Load Testing:** Validate expected business-hour concurrency and traffic mix.
3. **Stress Testing:** Push beyond expected load to identify failure thresholds and graceful degradation behavior.
4. **Endurance (Soak) Testing:** Validate memory/session stability and performance drift over time.

### 4.2 Measurement Strategy

- Capture **end-user timings** from Playwright flows for business-critical paths.
- Capture **API response times** and status distributions for technical diagnosis.
- Segment metrics by transaction type: Search, Login, Add to Cart, Checkout Step, Order Confirmation.
- Compare results against pre-defined thresholds and trend against prior baseline runs.

### 4.3 Data and State Management

- Use repeatable, low-volatility test data and deterministic user accounts.
- Design runs to avoid top-of-the-hour reset windows where possible.
- Tag or quarantine noisy results caused by external environment resets.

## 5. Item Pass/Fail Criteria

- **Pass:**
  - P95 response time for critical transactions remains within agreed threshold for nominal load.
  - Error rate remains below agreed threshold under nominal and peak profile.
  - No sustained degradation trend during endurance windows.
- **Fail:**
  - Checkout/authentication transactions breach agreed latency or error thresholds.
  - Progressive degradation persists during soak execution.
  - Critical user journeys become non-operational under expected concurrency.

## 6. Environmental Needs

- **Target URL:** `https://practicesoftwaretesting.com`
- **Execution Layers:** Playwright browser projects and API-level request instrumentation.
- **Data Baseline:** Known-state accounts and product data assumptions validated before each run.
- **Reporting:** Playwright HTML reports plus structured performance metric export (JSON/CSV) for trend analysis.
- **CI/CD:** Scheduled and on-demand execution in GitHub Actions for baseline and regression comparison.

## 7. GitHub Copilot & AI Optimization Guide

To ensure GitHub Copilot generates high-quality performance tests, prompts must include workload profile, metric intent, and pass thresholds.

### 7.1 File Structure

Performance tests should be housed in `tests/performance/`.

- `baseline.performance.spec.ts`
- `load.search.performance.spec.ts`
- `checkout.endurance.performance.spec.ts`
- `auth.stress.performance.spec.ts`

### 7.2 Copilot Context Headers

Insert this header at the top of new spec files to provide sufficient context for Copilot:

```typescript
/**
 * @test-level Performance
 * @focus Response Time / Throughput / Error Rate
 * @document-ref TestPolicy.md + TestStrategy.md
 * @istqb-ref CTAL-TTA / CT-TAS / CT-ATLaS
 * @task: Create a Playwright performance test for product search with 25 virtual users over 10 minutes,
 *        reporting P95 latency and error rate, and failing if P95 > 1800ms or error rate > 1%.
 */
```

### 7.3 Prompting Patterns for Copilot

Use direct, measurable prompts:

- "Generate a Playwright test that executes the search flow 200 times, records latency per iteration, and prints P50/P95/P99."
- "Create a utility to aggregate API response times by endpoint and fail the test when the checkout endpoint P95 exceeds the threshold."
- "Add test.step blocks for warm-up, steady-state load, and cooldown phases with separate metric summaries."

### 7.4 Reusable Utility Guidance

Encourage Copilot to generate:

- A shared metrics helper in `tests/performance/utils/metrics.ts`.
- Common threshold configuration in `tests/performance/config/perf-thresholds.ts`.
- Workload profiles in `tests/performance/config/workloads.ts` for baseline/load/stress/soak reuse.

## 8. Risks and Contingencies

- **Risk:** Public/shared environment variability introduces noise.
  - **Contingency:** Use repeated runs and median-of-runs interpretation for pass decisions.
- **Risk:** Hourly data reset impacts long-running suites.
  - **Contingency:** Time-box runs to controlled windows and mark reset-affected runs as non-comparable.
- **Risk:** Browser-level measurements alone obscure API bottlenecks.
  - **Contingency:** Correlate browser timings with API-level telemetry from the same test window.

## 9. Deliverables

1.) Performance Test Suite: Playwright scripts under `tests/performance/`.
2.) Threshold Configuration: Versioned latency/error targets for critical transactions.
3.) Performance Trend Report: Baseline vs current run comparison from CI artifacts.
4.) Bottleneck Analysis Log: Documented findings, probable root causes, and remediation recommendations.
