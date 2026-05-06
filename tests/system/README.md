# System Test Scaffold

This folder contains a starter implementation scaffold for system end-to-end testing aligned to the System Test Plan.

## Structure

- guest-checkout.spec.ts: Golden-path starter for guest discovery and cart transition.
- admin-inventory.spec.ts: Admin authentication and admin-area access behavior check.
- accessibility-audit.spec.ts: Accessibility smoke checks for title, nav presence, and keyboard focus flow.
- config/system-targets.ts: System target URLs and route paths.
- config/system-personas.ts: Persona definitions for guest/professional/admin system scenarios.
- utils/system-helpers.ts: Reusable execution gate and resilient selector utilities.

## Running the Scaffold

By default, system scaffold specs are intentionally skipped.

PowerShell example:

```powershell
$env:SYSTEM_ENABLE = "true"
npx playwright test tests/system
```

## Notes

- This is a scaffold baseline and should be expanded into full Golden Path checkout, role-specific account journeys, and richer compliance assertions.
- Keep BDD-friendly test.step naming to support stakeholder-readable reports.
