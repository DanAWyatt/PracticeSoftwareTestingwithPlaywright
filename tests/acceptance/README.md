# Acceptance Test Scaffold

This folder contains a starter implementation scaffold for acceptance testing aligned to the Acceptance Test Plan.

## Structure

- `uat-pro-contractor.spec.ts`: Persona-based UAT scenario for a professional contractor.
- `compliance-audit-gdpr.spec.ts`: GDPR-oriented acceptance check for privacy policy visibility and access.
- `oat-system-resilience.spec.ts`: Operational availability probes for resilience validation.
- `config/personas.ts`: Persona definitions used by acceptance scenarios.
- `config/acceptance-gates.ts`: High-level acceptance gate catalog for traceability.
- `utils/acceptance-helpers.ts`: Reusable helpers for execution gating and common checks.

## Running the Scaffold

By default, acceptance scaffold specs are intentionally skipped.

PowerShell example:

```powershell
$env:ACCEPTANCE_ENABLE = "true"
npx playwright test tests/acceptance
```

## Notes

- These are starter acceptance scenarios and should be expanded into full Golden Path and compliance evidence suites.
- Maintain BDD-style `test.step` blocks for business-readable reporting and sign-off discussions.
