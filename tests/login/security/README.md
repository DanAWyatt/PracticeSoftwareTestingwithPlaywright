# Login Security Scaffold

This scaffold is intentionally merged into the existing tests/login area, as requested.

## Structure

- rbac-access.spec.ts: RBAC abuse-case checks for admin route access.
- pii-protection.spec.ts: Sensitive data exposure checks in rendered DOM.
- api-vulnerability.spec.ts: Authorization requirement check for protected API endpoint.
- config/security-targets.ts: Security environment and endpoint targets.
- config/attacker-personas.ts: Attacker/unauthorized persona definitions.
- utils/security-helpers.ts: Reusable security test helpers and execution gate.

## Running the Scaffold

By default, these scaffold tests are intentionally skipped.

PowerShell example:

```powershell
$env:SECURITY_ENABLE = "true"
npx playwright test tests/login/security
```

## Notes

- Existing login tests remain untouched and continue to run as-is.
- This scaffold is a starting point and should be expanded with deeper OWASP abuse cases and GDPR/PCI-specific assertions.
