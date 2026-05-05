# Test Policy: The Toolshop (Practice Software Testing)

## 1. Introduction and Purpose
This Test Policy defines the overarching philosophy, goals, and principles for all testing activities related to The Toolshop application. It provides the framework for the Test Strategy and subsequent Test Plans to ensure a consistent, high-quality approach to software validation.

## 2. Testing Philosophy
Testing is a risk-mitigation process integrated into the development lifecycle. Our approach is based on the **ISTQB** principles:
* Testing shows the presence of defects, not their absence.
* Exhaustive testing is impossible; testing is prioritized based on risk.
* Early testing saves time and costs.
* Tests are context-dependent (e-commerce/retail focus).
* Software testing exists to make sure software works correctly, safely, and reliably before it reaches real users. It reduces risk, finds defects early, improves quality, and ensures the product meets business and user expectations

## 3. Test Objectives
The primary objectives for testing The Toolshop are:
1.  **Functional Correctness:** Ensure the core e-commerce flow (Search, Cart, Checkout, Account Management) works as intended.
2.  **Regulatory Compliance:** Ensure strict adherence to the standards defined in the `Regulatory-and-Compliance-Guide.md`.
3.  **Risk Reduction:** Identify and mitigate critical business risks before code deployment.
4.  **Accessibility:** Guarantee the platform is usable by individuals with disabilities as per WCAG guidelines.

## 4. Test Levels
Testing is structured into the following levels. Note that while all levels are acknowledged, the automation focus of this specific repository is on **Integration, System, and Acceptance**.

| Test Level | Scope | Responsibility | Repository Status |
| :--- | :--- | :--- | :--- |
| **Unit Testing** | Individual functions/methods. | Developers | Out of Scope |
| **Component Testing** | Individual UI components or API modules. | Developers | Out of Scope |
| **Integration Testing** | Interaction between UI and API v5.0; external integrations. | Test Architects | **In Scope** |
| **System / E2E Testing** | Complete end-to-end user journeys using Playwright. | Test Architects | **In Scope** |
| **Acceptance Testing** | Validation against user requirements and business rules. | Test Architects / Product | **In Scope** |

## 5. Regulatory and Compliance Standards
As per the `Regulatory-and-Compliance-Guide.md`, all testing activities must validate the following:
* **Data Protection (GDPR):** Verification that user data is handled securely and that the scheduled hourly data purge functions correctly without impacting system stability.
* **Accessibility (WCAG 2.1 Level AA):** Automated and manual checks for screen reader compatibility, color contrast, and keyboard navigation.
* **Security:** Validation of authentication tokens, authorization levels (Customer vs. Admin), and secure transmission of PII.

## 6. Test Types
* **Functional Testing:** Requirements-based testing of all user stories.
* **Regression Testing:** Automated Playwright suites to ensure new changes do not break existing functionality.
* **Non-Functional Testing:**
    * **Usability:** Evaluating the user experience.
    * **Reliability:** Verifying system behavior during the hourly data reset.

## 7. Tooling and Infrastructure
* **Framework:** Playwright (TypeScript/JavaScript).
* **Environment:** Testing is performed against the production-mirrored environment at `practicesoftwaretesting.com`.
* **Version Control:** All test scripts and documentation are maintained in the `PracticeSoftwareTestingwithPlaywright` repository.

## 8. Test Metrics and Success Criteria
The effectiveness of the testing process will be evaluated based on:
* **Requirement Coverage:** Percentage of functional requirements covered by automated tests.
* **Defect Detection Rate:** Efficiency in finding critical issues during System/E2E phases.
* **Pass/Fail Ratio:** Trend analysis of automated test suite execution.
* **Compliance Score:** Percentage of WCAG 2.1 AA criteria met.

## 9. Continuous Improvement
This policy is a living document. It will be reviewed and updated following major releases or changes in regulatory requirements to ensure the testing process remains aligned with the application's growth.