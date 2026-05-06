# Practice Software Testing with Playwright

This repository contains an ISTQB-aligned Playwright test framework for The Toolshop application at practicesoftwaretesting.com. It includes structured documentation, dedicated test-plan scaffolds, and project-level execution configuration for suite isolation.

## What Was Implemented

The following work has been implemented:

- Added and aligned plan-driven test scaffolds for:
  - Acceptance testing in [tests/acceptance](tests/acceptance)
  - Integration testing in [tests/integration](tests/integration)
  - Performance testing in [tests/performance](tests/performance)
  - Security testing merged into login scope in [tests/login/security](tests/login/security)
  - System testing in [tests/system](tests/system)
- Added dedicated Playwright projects in [playwright.config.ts](playwright.config.ts) for each plan-level suite:
  - Acceptance Chromium
  - Accessibility Chromium
  - Integration Chromium
  - Performance Chromium
  - Security Chromium
  - System Chromium
- Added a shared suite-gate utility in [tests/shared/execution-gates.ts](tests/shared/execution-gates.ts) to centralize environment-based test gating.
- Updated TypeScript configuration in [tsconfig.json](tsconfig.json) to include Node and Playwright typings.

## Prerequisites

- Node.js 20+
- npm

## Installation

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## TypeScript and Node Types

This repository uses Node globals in test helpers (for example, process.env gate checks). Ensure Node typings are installed and enabled.

1. Install type definitions:

```bash
npm install --save-dev @types/node
```

2. Confirm [tsconfig.json](tsconfig.json) includes:

```json
{
  "compilerOptions": {
    "types": ["node", "@playwright/test"]
  }
}
```

## Playwright MCP Server

The Playwright config supports connecting to an MCP browser endpoint.

- Ensure your MCP server is running.
- Set endpoint when needed:

```powershell
$env:PLAYWRIGHT_SERVER_WS = 'ws://127.0.0.1:PORT'
npx playwright test
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run dedicated project suites:

```bash
npx playwright test --project="Acceptance Chromium"
npx playwright test --project="Integration Chromium"
npx playwright test --project="Performance Chromium"
npx playwright test --project="Security Chromium"
npx playwright test --project="System Chromium"
```

Run scaffold suites directly (these are intentionally gated):

```powershell
$env:ACCEPTANCE_ENABLE = "true"
npx playwright test tests/acceptance

$env:INTEGRATION_ENABLE = "true"
npx playwright test tests/integration

$env:PERF_ENABLE = "true"
npx playwright test tests/performance

$env:SECURITY_ENABLE = "true"
npx playwright test tests/login/security

$env:SYSTEM_ENABLE = "true"
npx playwright test tests/system
```

## Project Structure

- Documentation plans in [Documentation/TestPlans](Documentation/TestPlans)
- Shared test gate utility in [tests/shared/execution-gates.ts](tests/shared/execution-gates.ts)
- Suite scaffolds in:
  - [tests/acceptance](tests/acceptance)
  - [tests/integration](tests/integration)
  - [tests/performance](tests/performance)
  - [tests/login/security](tests/login/security)
  - [tests/system](tests/system)
- Core Playwright setup in [playwright.config.ts](playwright.config.ts)

## Notes

- Scaffold suites are intentionally skipped unless their corresponding environment gate is set to true.
- Existing login coverage remains under [tests/login](tests/login).

## License

This project is licensed under the MIT License.
