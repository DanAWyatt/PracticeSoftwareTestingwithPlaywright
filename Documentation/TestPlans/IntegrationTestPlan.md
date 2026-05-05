# Integration Test Plan: The Toolshop (API v5.0 & UI)

## 1. Introduction
This Level Test Plan (LTP) focuses on the **Integration Testing** phase for The Toolshop application. Following the established **Test Strategy**, this document defines how we will validate the interaction between the frontend user interface and the Toolshop API v5.0, as well as third-party integrations.

### 1.1 References
* `Documentation/TestPlans/Test-Policy.md`
* `Documentation/TestPlans/Test-Strategy.md`
* `Documentation/ApplicationUnderTestOverview/PracticeSoftwareTesting.md`
* `Documentation/Legistlative/Regulatory-and-Compliance-Guide.md`
* **ISTQB Syllabi References (from Documentation/ISTQB_Markdown):**
    * `Certified Tester Foundation Level (CTFL) Syllabus` - For fundamental integration testing principles.
    * `Certified Tester Test Automation Engineer (CT-TAE) Syllabus` - For automated integration framework architecture.
    * `Certified Tester Security Tester (CT-SEC) Syllabus` - For validating security integration points (Auth/PCI).
    * `Certified Tester AI Testing (CT-AI) Syllabus` - For the implementation of AI-assisted (Copilot) test generation.

## 2. Test Items (Scope)
The primary items under test are the integration points between the Playwright-driven UI and the backend services:
* **Toolshop REST API v5.0:** Endpoints for products, categories, authentication, and orders.
* **Database Integration:** Ensuring UI actions persist correctly via the API.
* **Auth Integration:** Verification of JWT handling between frontend and backend.
* **Payment Gateway Simulation:** Integration with the payment processing module.

## 3. Features to be Tested
* **Authentication Flow:** UI -> API Login -> Token Storage -> Authorized Requests.
* **Product Catalog Sync:** UI filtering and sorting vs. API query parameters.
* **Cart Persistence:** API-driven cart management (ensuring UI state matches backend state).
* **Checkout Integration:** Data integrity from UI form submission to API order creation.
* **Error Handling:** UI response to API error codes (400, 401, 403, 404, 422, 500).

## 4. Integration Approach
We will utilize a **Functional Integration** approach using Playwright’s `request` context and network interception capabilities.

### 4.1 Methodology
1. **API Direct Testing:** Using `request.get()` and `request.post()` to validate endpoints in isolation before UI binding.
2. **Contract Validation:** Ensuring the UI sends the specific JSON schema required by API v5.0.
3. **Network Interception:** Using `page.route()` to mock or inspect API responses during UI testing to verify frontend resilience.
4. **State Management:** Leveraging the hourly data reset to ensure a clean integration baseline.

## 5. Item Pass/Fail Criteria
* **Pass:** API returns expected status codes; JSON response body matches the expected schema; UI reflects API data accurately without console errors.
* **Fail:** Discrepancy between UI and API data; Auth token rejection; API response time > 2000ms; Unhandled 5xx errors.

## 6. Environmental Needs
* **URL:** `https://practicesoftwaretesting.com`
* **API Base:** `https://api.practicesoftwaretesting.com` (or as defined in app overview).
* **Tools:** Playwright, TypeScript, JSON Schema Validator.

## 7. GitHub Copilot Integration Guide
To build these tests efficiently, use the following prompts and structures to guide Copilot.

### 7.1 File Structure
Integration tests should be housed in `tests/integration/`.
* `auth.integration.spec.ts`
* `catalog.integration.spec.ts`
* `order.integration.spec.ts`

### 7.2 Copilot Prompting Standards
When initiating a new integration test, paste the following header into the file to give Copilot context:

typescript
/**
 * @test-level Integration
 * @target Toolshop API v5.0
 * @document-ref PracticeSoftwareTesting.md
 * @strategy Network Interception & API Validation
 * @task: Verify that the UI correctly displays error messages when the API returns a 422 Unprocessable Entity.
 */

### 7.3 Code Pattern Recommendation (POM + API)
Encourage Copilot to use a combined pattern:

TypeScript
// Define API utility classes in 'utils/api-client.ts'
// Copilot Prompt: "Generate a Playwright API request wrapper for the 'POST /orders' endpoint based on v5.0 schema."
## 8. Risks and Contingencies
* Risk: API v5.0 schema changes without notice.
    * Contingency: Implement automated schema validation within the integration suite.
* Risk: Hourly purge occurs during execution.
    * Contingency: Schedule tests to trigger 5 minutes after the hour or implement retry logic.

## 9. Deliverables
* Integration Test Suite: Playwright scripts in tests/integration/.
* API Mocks: Mock JSON files for edge-case testing.
* Integration Summary Report: Automated output from Playwright HTML reporter.