# Test Strategy: The Toolshop

## 1. Introduction
This Test Strategy defines the technical approach, methodologies, and standards for the validation of **The Toolshop** application. It serves as a bridge between the **Test Policy** and level-specific **Test Plans**, ensuring that testing activities in the `PracticeSoftwareTestingwithPlaywright` repository are consistent, efficient, and AI-assisted.

## 2. Test Process and Lifecycle
Following ISTQB standards, the test process is integrated into the SDLC with an emphasis on early feedback and automation.

### 2.1 Stages
1.  **Test Analysis:** Reviewing user stories and `PracticeSoftwareTesting.md` to identify test conditions.
2.  **Test Design:** Applying techniques (Boundary Value Analysis, Equivalence Partitioning) to define test cases.
3.  **Test Implementation:** Developing automated scripts using the Playwright framework.
4.  **Test Execution:** Running suites against the application environments.
5.  **Test Completion:** Reviewing metrics and finalizing test logs.

## 3. Test Levels (Repo Scope)
While Unit and Component testing are performed at the source level, this repository focuses on the following:

### 3.1 Integration Testing
* **Focus:** Interaction between the UI and the Toolshop API v5.0.
* **Approach:** API mocking and contract testing. Verifying that the frontend correctly handles API responses (Success, Error, Unauthorized).

### 3.2 System Testing (End-to-End)
* **Focus:** Complete business processes in a production-like environment.
* **Approach:** Functional validation of the "Golden Path" (Search -> Add to Cart -> Checkout -> Payment).
* **Tooling:** Playwright for cross-browser (Chromium, Firefox, WebKit) and mobile emulation.

### 3.3 Acceptance Testing
* **Focus:** Validation against business requirements and regulatory compliance.
* **Approach:** User Acceptance Testing (UAT) scenarios automated via Gherkin/BDD-style Playwright tests.

## 4. Test Design Techniques
To ensure maximum coverage with minimum redundancy, the following techniques are mandatory:
* **Black-box:** Equivalence Partitioning for input fields (e.g., quantities, zip codes).
* **State Transition:** For order statuses (Pending -> Paid -> Shipped).
* **Risk-Based Testing:** Prioritizing testing for the Checkout and Auth modules as identified in the `Regulatory-and-Compliance-Guide.md`.

## 5. Non-Functional Testing Approach
### 5.1 Accessibility (WCAG 2.1 Level AA)
* **Methodology:** Integration of `@axe-core/playwright` for automated scanning.
* **Manual Check:** Periodic verification of screen reader flow and keyboard traps.

### 5.2 Security and Compliance
All security testing is guided by the **ISTQB Security Testing Syllabus**, focusing on the CIA triad (Confidentiality, Integrity, and Availability).
* **GDPR:** Automated verification that personal data is not persisted beyond the hourly purge cycle and is handled according to legislative requirements.
* **PCI:DSS:** Validation of payment processing flows. Although the environment uses simulated data, scripts must verify that sensitive cardholder data is never logged, stored in clear text, or exposed via the UI.
* **OWASP Top 10:** Specific test scenarios to target common vulnerabilities including:
    * Injection (SQL/NoSQL) via search and login fields.
    * Broken Access Control (Verifying user-level vs. Admin-level permissions).
    * Identification and Authentication Failures.
* **Auth:** Rigorous negative testing of role-based access control (RBAC) specifically for the Admin dashboard and restricted API endpoints.

## 6. GitHub Copilot & AI Optimization Guide
To leverage GitHub Copilot effectively within this repository, follow these structural standards:

### 6.1 Standardized Naming Conventions
* **Test Files:** `[FeatureName].spec.ts`
* **Page Objects:** `[PageName].page.ts`
* **Methods:** Use descriptive action-based names: `verifyAddToCartSuccess()`, `fillCustomerDetails()`.

### 6.2 Contextual Prompting via Comments
When generating new tests, provide Copilot with the business context:
typescript
// @test-context: Referencing PracticeSoftwareTesting.md - Checkout Flow
// @requirement: Regulatory-and-Compliance-Guide.md - GDPR Data Handling
// @task: Create a Playwright test to validate successful checkout for a guest user.

### 6.3 Page Object Model (POM)
Always abstract UI selectors into POM classes. This allows Copilot to suggest relevant methods based on the class structure rather than hardcoded strings.

## 7. Test Environment and Data
* URL: https://practicesoftwaretesting.com
* Data Strategy:
    * Tests must be stateless where possible.
    * Use the hourly reset cycle as a "Clean State" baseline.
    * Avoid hardcoding PII; use dynamic data generators for user registration tests.

## 8. Defect Management
* Tooling: GitHub Issues.
* Severity Levels:
    * Critical: System crash, data loss, GDPR breach, or high-risk security vulnerability.
    * High: Core business function (Checkout) failure or PCI non-compliance.
    * Medium: Non-critical functional issue.
    * Low: Cosmetic or minor UI/UX issues.

## 9. Deliverables
1.) Test Strategy (this document).
2.) Level Test Plans (Integration, System, Acceptance).
3.) Playwright Test Suites (Code).
4.) Test Execution Reports (GitHub Actions / Playwright HTML Reports).