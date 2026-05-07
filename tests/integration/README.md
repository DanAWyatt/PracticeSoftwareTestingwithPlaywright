# Integration Test Scaffold

This folder contains a starter scaffold for Integration Testing aligned to the Integration Test Plan.

## Structure

- `auth.integration.spec.ts`: Auth integration checks for API response behavior and contract shape.
- `catalog.integration.spec.ts`: Catalog API timing/shape checks and UI resilience with mocked 422 responses.
- `order.integration.spec.ts`: Authorization behavior checks for cart/order related endpoints.
- `config/integration-targets.ts`: API/UI target and timeout profile configuration.
- `mocks/api-errors.ts`: Reusable API error payloads for route interception.
- `utils/api-client.ts`: Shared API request wrappers with latency capture.
- `utils/integration-helpers.ts`: Execution gating and route/error helper utilities.

## Running the Scaffold

By default, integration scaffold tests are intentionally skipped.

PowerShell example:

```powershell
$env:INTEGRATION_ENABLE = "true"
npx playwright test tests/integration
```

## Notes

- This scaffold establishes a stable baseline and should be expanded with full contract assertions and domain-specific schemas.
- Keep tests independent and deterministic to support reliable CI execution.
