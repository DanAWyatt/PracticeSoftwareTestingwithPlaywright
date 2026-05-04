# Practice Software Testing Application Overview

## Overview

The Practice Software Testing website is an e-commerce toolshop application built for practicing software testing across multiple sprint versions. Each sprint incrementally adds features, giving testers and developers a realistic, evolving application to work with. It is designed for training and personal development purposes only and takes the form of an e-commerce site, which in real life would be subject to regulation via:
- GDPR: Documentation/Legislative/GDPR.md
- OWASP: Documentation/Legislative/OWASP.md
- PCI DSS: Documentation/Legislative/PCIDSS.md

## Tech Stack

- **Backend**: Laravel 12, PHP 8.3
- **Frontend**: Angular 20, Bootstrap 5
- **Database**: MariaDB 10.6
- **Infrastructure**: Docker, Nginx, PHP-FPM
- **Testing**: Pest, Playwright, Pact

## Default Accounts

| Name | Role | Email | Password |
|------|------|-------|----------|
| John Doe | admin | admin@practicesoftwaretesting.com | welcome01 |
| Jane Doe | user | customer@practicesoftwaretesting.com | welcome01 |
| Jack Howe | user | customer2@practicesoftwaretesting.com | welcome01 |
| Bob Smith | user | customer3@practicesoftwaretesting.com | pass123 |

## Hosted Versions

| Version | Application URL | API URL | Swagger URL |
|---------|-----------------|---------|-------------|
| Sprint 1 | https://v1.practicesoftwaretesting.com | https://api-v1.practicesoftwaretesting.com | https://api-v1.practicesoftwaretesting.com/api/documentation |
| Sprint 2 | https://v2.practicesoftwaretesting.com | https://api-v2.practicesoftwaretesting.com | https://api-v2.practicesoftwaretesting.com/api/documentation |
| Sprint 3 | https://v3.practicesoftwaretesting.com | https://api-v3.practicesoftwaretesting.com | https://api-v3.practicesoftwaretesting.com/api/documentation |
| Sprint 4 | https://v4.practicesoftwaretesting.com | https://api-v4.practicesoftwaretesting.com | https://api-v4.practicesoftwaretesting.com/api/documentation |
| Sprint 5 | https://practicesoftwaretesting.com | https://api.practicesoftwaretesting.com | https://api.practicesoftwaretesting.com/api/documentation |
| Sprint 5 (with bugs) | https://with-bugs.practicesoftwaretesting.com | https://api-with-bugs.practicesoftwaretesting.com | https://api-with-bugs.practicesoftwaretesting.com/api/documentation |

## Mobile App

The mobile app is integrated with version 4 of Practice Software Testing and shares the same environment.
- Android APK: https://testsmith.ams3.cdn.digitaloceanspaces.com/artifacts/practice-software-testing.apk
- iOS Simulator App: https://testsmith.ams3.cdn.digitaloceanspaces.com/artifacts/practice-software-testing.zip

## Sprint-Based Feature Evolution

The application evolves through sprints, each adding new features. This allows for testing different levels of functionality and complexity.

### Sprint 1: Product Catalog
**Features**: Basic product catalog with products, categories, brands, product overview, category pages, brand pages, and contact form.

### Sprint 2: Users & Search
**Features**: Adds pagination, search, filtering, and sorting to product overview and category pages.

### Sprint 3: Checkout & Rentals
**Features**: Adds checkout flow (cart review, billing address, basic payment), rentals page, and product-to-cart functionality.

### Sprint 4: Auth & Accounts
**Features**: Adds user authentication (login, register, forgot password), protected customer account area (profile, favorites, invoices, messages), and sorting.

### Sprint 5: Full Platform
**Features**: Adds shopping cart with server-side persistence, advanced payment methods, password strength indicator, account locking, two-factor authentication, social login, PDF invoices, admin dashboard, chat widget, discounts, multi-language support, price range filter, and privacy policy page.

### Sprint 5 (with bugs)
**Features**: Includes all Sprint 5 features plus 90+ intentional bugs for testing purposes.

### Sprint 5 (performance)
**Features**: Includes all Sprint 5 features with performance degradation for testing.

## Detailed User Stories and Acceptance Criteria

### Sprint 1: Product Catalog

#### Product Overview
**User Story**: As a visitor, I want to see an overview of all available products, so that I can browse the catalog and find items of interest.

**Acceptance Criteria**:
- AC1: Product overview is accessible
- AC2: Product details are accessible
- AC3: Category pages are accessible
- AC4: Contact form is accessible
- AC5: Contact form can be submitted

#### Categories
**User Story**: As a visitor, I want to see an overview of all available categories, so that I can browse the catalog by category.

**Acceptance Criteria**:
- AC1: Category overview is accessible
- AC2: Category pages show products

#### Brands
**User Story**: As a visitor, I want to see an overview of all available brands, so that I can browse the catalog by brand.

**Acceptance Criteria**:
- AC1: Brand overview is accessible
- AC2: Brand pages show products

#### Contact
**User Story**: As a visitor, I want to send a message to the business owner, so that I can exchange information with them.

**Acceptance Criteria**:
- AC1: Contact form is accessible
- AC2: Contact form can be submitted

### Sprint 2: Users & Search

#### Product Overview
**User Story**: As a visitor, I want to browse a paginated overview of all products with the ability to search, filter, and sort, so that I can efficiently find products of interest.

**Acceptance Criteria**:
- AC1: Pagination is available
- AC2: Search is available
- AC3: Filtering is available
- AC4: Sorting is available
- AC5: Search, filter, and sort work together

#### Categories
**User Story**: As a visitor, I want to browse a paginated overview of products in a category with the ability to search, filter, and sort, so that I can efficiently find products of interest in a category.

**Acceptance Criteria**:
- AC1: Pagination is available
- AC2: Search is available
- AC3: Filtering is available
- AC4: Sorting is available
- AC5: Search, filter, and sort work together

#### Contact
**User Story**: As a visitor, I want to send a message to the business owner, so that I can exchange information with them.

**Acceptance Criteria**:
- AC1: Contact form is accessible
- AC2: Contact form can be submitted

### Sprint 3: Checkout & Rentals

#### Product Detail
**User Story**: As a visitor, I want to add products to my cart from the product detail page, so that I can purchase them later.

**Acceptance Criteria**:
- AC1: Add to cart button is visible
- AC2: Add to cart functionality works
- AC3: Quantity can be adjusted

#### Cart
**User Story**: As a customer, I want to review my cart before checkout, so that I can see what I'm buying and make changes.

**Acceptance Criteria**:
- AC1: Cart is accessible
- AC2: Cart shows items
- AC3: Cart allows quantity changes
- AC4: Cart allows item removal

#### Checkout
**User Story**: As a customer, I want to checkout my cart, so that I can purchase the items.

**Acceptance Criteria**:
- AC1: Checkout is accessible
- AC2: Billing address is required
- AC3: Payment is required
- AC4: Order can be placed

#### Rentals
**User Story**: As a visitor, I want to see a list of rentable products, so that I can rent tools.

**Acceptance Criteria**:
- AC1: Rentals page is accessible
- AC2: Rental products are marked

#### Contact
**User Story**: As a visitor, I want to send a message to the business owner, so that I can exchange information with them.

**Acceptance Criteria**:
- AC1: Contact form is accessible
- AC2: Contact form can be submitted

### Sprint 4: Auth & Accounts

#### User Registration
**User Story**: As a new visitor, I want to create an account by providing my personal details, so that I can log in and access features like checkout, favorites, and my account.

**Acceptance Criteria**:
- AC1: Registration form is accessible
- AC2: Registration works
- AC3: Email is unique
- AC4: Password strength is enforced

#### User Login
**User Story**: As a registered user, I want to log in with my email and password, so that I can access my account.

**Acceptance Criteria**:
- AC1: Login form is accessible
- AC2: Login works
- AC3: Invalid credentials are rejected

#### Forgot Password
**User Story**: As a user who has forgotten their password, I want to reset my password, so that I can log in again.

**Acceptance Criteria**:
- AC1: Forgot password form is accessible
- AC2: Password reset email is sent
- AC3: Password can be reset

#### Profile
**User Story**: As a logged-in user, I want to view and edit my profile, so that I can manage my personal information.

**Acceptance Criteria**:
- AC1: Profile is accessible
- AC2: Profile can be edited

#### Favorites
**User Story**: As a logged-in user, I want to add products to my favorites, so that I can keep track of products I like.

**Acceptance Criteria**:
- AC1: Favorites can be added
- AC2: Favorites list is accessible
- AC3: Favorites can be removed

#### Invoices
**User Story**: As a logged-in user, I want to view my invoices, so that I can see my order history.

**Acceptance Criteria**:
- AC1: Invoices are accessible
- AC2: Invoice details are accessible

#### Messages
**User Story**: As a logged-in user, I want to view messages from the business, so that I can stay informed.

**Acceptance Criteria**:
- AC1: Messages are accessible
- AC2: Message details are accessible

#### Sorting
**User Story**: As a visitor, I want to sort products by name, price, or date, so that I can find products more easily.

**Acceptance Criteria**:
- AC1: Sorting is available

#### Contact
**User Story**: As a visitor, I want to send a message to the business owner, so that I can exchange information with them.

**Acceptance Criteria**:
- AC1: Contact form is accessible
- AC2: Contact form can be submitted

### Sprint 5: Full Platform

#### Shopping Cart
**User Story**: As a customer, I want my cart to persist across sessions, so that I don't lose my items.

**Acceptance Criteria**:
- AC1: Cart persists
- AC2: Cart is shared across devices
- AC3: Cart shows quantity
- AC4: Cart shows total price
- AC5: Minimum quantity
- AC6: Maximum quantity

#### Payment Methods
**User Story**: As a customer, I want to pay with credit card, PayPal, or bank transfer, so that I can choose my preferred payment method.

**Acceptance Criteria**:
- AC1: Credit card payment is available
- AC2: PayPal payment is available
- AC3: Bank transfer payment is available

#### Password Strength
**User Story**: As a user registering or changing password, I want to see a password strength indicator, so that I can create a strong password.

**Acceptance Criteria**:
- AC1: Password strength is shown
- AC2: Weak passwords are rejected

#### Account Locking
**User Story**: As a user, I want my account to lock after repeated failed logins, so that my account is protected.

**Acceptance Criteria**:
- AC1: Account locks after failed attempts
- AC2: Locked account message is shown

#### Two-Factor Authentication
**User Story**: As a user, I want to enable two-factor authentication, so that my account is more secure.

**Acceptance Criteria**:
- AC1: 2FA can be enabled
- AC2: 2FA is required for login

#### Social Login
**User Story**: As a user, I want to log in with Google or GitHub, so that I don't need to remember another password.

**Acceptance Criteria**:
- AC1: Google login is available
- AC2: GitHub login is available

#### PDF Invoices
**User Story**: As a customer, I want to download PDF invoices, so that I can keep records.

**Acceptance Criteria**:
- AC1: PDF download is available
- AC2: PDF contains order details

#### Admin Dashboard
**User Story**: As an admin, I want to see an admin dashboard, so that I can manage the site.

**Acceptance Criteria**:
- AC1: Admin dashboard is accessible
- AC2: Admin can manage users
- AC3: Admin can manage products
- AC4: Admin can manage orders

#### Chat Widget
**User Story**: As a customer, I want to chat with support, so that I can get help quickly.

**Acceptance Criteria**:
- AC1: Chat widget is visible
- AC2: Chat can be started

#### Discounts
**User Story**: As a customer, I want to apply discount codes, so that I can get discounts.

**Acceptance Criteria**:
- AC1: Discount code can be entered
- AC2: Invalid codes are rejected

#### Multi-Language Support
**User Story**: As a visitor, I want to see the site in my language, so that I can understand it better.

**Acceptance Criteria**:
- AC1: Language can be selected
- AC2: Content is translated

#### Price Range Filter
**User Story**: As a visitor, I want to filter products by price range, so that I can find products in my budget.

**Acceptance Criteria**:
- AC1: Price range filter is available

#### Privacy Policy
**User Story**: As a visitor, I want to read the privacy policy, so that I know how my data is handled.

**Acceptance Criteria**:
- AC1: Privacy policy is accessible

#### Contact
**User Story**: As a visitor, I want to send a message to the business owner, so that I can exchange information with them.

**Acceptance Criteria**:
- AC1: Contact form is accessible
- AC2: Contact form can be submitted

## Testing Considerations

This application is designed for comprehensive testing across all levels:
- **Unit Testing**: Backend logic with Pest
- **API Testing**: REST endpoints with Playwright or other tools
- **Integration Testing**: API and frontend interactions
- **End-to-End Testing**: Full user workflows with Playwright
- **Performance Testing**: Using the performance version
- **Security Testing**: Authentication, authorization, data protection
- **Accessibility Testing**: UI compliance
- **Cross-Browser Testing**: Different browsers and devices
- **Mobile Testing**: Integrated mobile app

The incremental sprint approach allows testing teams to:
- Start with basic functionality and build up complexity
- Test regressions as features are added
- Practice different testing strategies for different maturity levels
- Learn testing techniques on a realistic e-commerce application

## Existing Test Framework Analysis

Based on analysis of the Playwright test repository, the following test infrastructure and coverage exists:

### Test Framework Architecture

- **Framework**: Playwright with TypeScript
- **Configuration**: Separate configs for different test types (ui-tests, setup, calculation)
- **Base URL**: Configurable via `UI_URL` environment variable
- **API URL**: Configurable via `API_URL` environment variable
- **Test Data**: Environment variables for multiple user accounts (admin, customers)
- **Authentication**: Storage state setup for different user roles

### Page Object Model

The framework implements page objects for key application areas:

- **LoginPage**: Handles authentication flows including 2FA
- **HomePage**: Product browsing and cart interactions
- **CheckoutPage**: Complete checkout flow

### Test Data Management

- **Data Factories**: 
  - User registration and login token generation
  - Brand creation
  - OTP/TOTP generation for 2FA testing
- **Fixtures**: 
  - API request helpers
  - Modified page navigation
  - Product page routing
  - Request timing monitoring

### Current Test Coverage

#### Authentication Tests (`tests/auth/`)
- **Login**: Valid admin and customer credentials
- **Logout**: Session termination
- **2FA**: Time-based OTP authentication flow

#### Account Management (`tests/account/`)
- **Profile Management**: User account operations

#### Checkout Tests (`tests/checkout/`)
- **Basic Checkout**: Full e-commerce flow from cart to completion
- **API Integration**: Checkout with API fixtures
- **Page Fixtures**: Checkout with page object fixtures
- **Route Mocking**: Checkout with network route interception

#### Contact Form (`tests/contact/`)
- **Form Submission**: Contact form validation and success messaging

#### Admin Features (`tests/admin/`)
- **Brand Management**: Admin interface for brand operations

#### Scenarios (`tests/scenarios/`)
- **Add to Cart**: Product selection and cart addition workflows

### Test Infrastructure Features

- **Parallel Execution**: Fully parallel test runs
- **Retry Logic**: Configurable retries (2 in CI, 2 locally)
- **Reporting**: HTML reports, list output, Currents integration
- **Tracing**: Full trace capture on failures
- **Screenshots**: Automatic screenshots on failures
- **Video Recording**: Test execution videos
- **CI/CD Ready**: GitHub Actions integration

### Authentication Setup

The framework includes comprehensive auth setup:
- **Admin User**: John Doe (admin@practicesoftwaretesting.com)
- **Customer Users**: Jane Doe, Jack Howe, Bob Smith
- **2FA Enabled User**: Testy McTester with OTP
- **Storage States**: Pre-authenticated sessions for different roles

### Feature Mapping

The repository includes feature mapping (`featureMap.yml`) that tracks feature availability across pages:
- Authentication features (login, register, forgot password)
- Product catalog features (sorting, filtering, pagination)
- Product detail features (add to cart, favorites, related products)

### Test Execution

```bash
# Run all tests
npm test

# Run specific test
npx playwright test tests/auth/login.spec.ts

# Run with codegen
npx playwright codegen

# Run home page tests with specific config
npm run home-test
```

### Gaps and Opportunities for Enhancement

Based on the application features and existing tests, the following areas could benefit from additional test coverage:

1. **Product Search & Filtering**: Advanced search functionality
2. **Product Categories**: Category browsing and navigation
3. **Favorites Management**: Add/remove favorites functionality
4. **Invoice Management**: PDF download and invoice viewing
5. **Admin Dashboard**: Full admin user/product/order management
6. **Social Login**: Google/GitHub authentication
7. **Multi-language Support**: Language switching
8. **Discount Codes**: Coupon application
9. **Chat Widget**: Customer support chat
10. **Performance Testing**: Load and performance scenarios
11. **Accessibility Testing**: WCAG compliance
12. **Mobile Responsiveness**: Cross-device testing
13. **API Testing**: Direct API endpoint testing
14. **Database Testing**: Data integrity and migration testing
15. **Security Testing**: Authentication bypass, XSS, CSRF

### Test Strategy Recommendations

1. **Sprint-Based Testing**: Align test development with application sprints
2. **Risk-Based Testing**: Prioritize critical user journeys (login → browse → cart → checkout)
3. **API-First Testing**: Test APIs independently before UI integration
4. **Cross-Browser Testing**: Ensure compatibility across supported browsers
5. **Visual Regression**: Screenshot comparison for UI consistency
6. **Performance Baselines**: Establish performance benchmarks
7. **Security Scanning**: Regular security vulnerability assessment

This existing framework provides a solid foundation for comprehensive test automation, with room for expansion to cover all application features across different testing levels.
