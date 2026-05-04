# ISTQB Specialist - Test Automation Skills (CT-TAS) v1.0

## Overview
The Test Automation Skills specialist certification focuses on practical programming and scripting skills for implementing automated tests. Emphasizes hands-on coding and automation implementation.

**Syllabus Version:** 1.0  
**Typical Duration:** 20 hours  
**Prerequisite:** ISTQB Foundation Level Certification  
**Target Audience:** Test automation engineers, QA engineers, developers in test, automation programmers  

---

## Core Competencies

### 1. Programming Fundamentals for Test Automation

#### Programming Concepts
**Variables and Data Types:**
- Strings (text data)
- Numbers (integers, floats)
- Booleans (true/false)
- Collections (arrays, lists, dictionaries)
- Objects and classes
- Type casting and conversion

**Control Flow:**
- If/else statements (conditional execution)
- Switch statements (multiple conditions)
- Loops (for, while, do-while)
- Break and continue
- Loop control

**Functions and Methods:**
- Function definition and calling
- Parameters and return values
- Scope and lifetime
- Recursion basics
- Built-in functions/methods
- Lambda functions/anonymous functions

**Error Handling:**
- Try/catch/finally blocks
- Exception handling
- Custom exceptions
- Logging errors
- Graceful failure handling

#### Object-Oriented Programming
**Classes and Objects:**
- Class definition
- Objects instantiation
- Properties and methods
- Constructors and destructors
- Access modifiers (public, private, protected)

**OOP Principles:**
- **Encapsulation:** Data hiding and access control
- **Inheritance:** Class hierarchy and code reuse
- **Polymorphism:** Method overriding and overloading
- **Abstraction:** Interface implementation

**Design Patterns:**
- Singleton: Single instance creation
- Factory: Object creation abstraction
- Builder: Complex object construction
- Observer: Event handling
- Strategy: Algorithm encapsulation

---

### 2. Web Application Automation

#### Selenium WebDriver
**WebDriver Basics:**
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

# Initialize driver
driver = webdriver.Chrome()
driver.get("https://example.com")
```

**Element Locators:**
- **ID:** `find_element(By.ID, "elementId")`
- **Name:** `find_element(By.NAME, "elementName")`
- **Class:** `find_element(By.CLASS_NAME, "className")`
- **CSS:** `find_element(By.CSS_SELECTOR, "css.selector")`
- **XPath:** `find_element(By.XPATH, "//element")`
- **Link Text:** `find_element(By.LINK_TEXT, "text")`

**User Interactions:**
```python
element.click()
element.send_keys("text input")
element.clear()
element.submit()
element.is_displayed()
element.is_enabled()
element.get_attribute("attr")
element.text
```

**Navigation:**
```python
driver.get(url)
driver.back()
driver.forward()
driver.refresh()
```

**Waits and Synchronization:**
```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Explicit wait
wait = WebDriverWait(driver, 10)
element = wait.until(
    EC.presence_of_element_located((By.ID, "myElement"))
)
```

**Window/Tab Handling:**
```python
driver.window_handles
driver.switch_to.window(handle)
driver.switch_to.frame(frame)
driver.execute_script(script)
```

#### Cypress Framework
**Cypress Features:**
- Modern test runner
- Built-in assertions
- Time-travel debugging
- Network request control
- Automatic waiting

**Cypress Basics:**
```javascript
describe('Login Tests', () => {
  it('should login successfully', () => {
    cy.visit('https://example.com')
    cy.get('[data-cy=username]').type('user')
    cy.get('[data-cy=password]').type('password')
    cy.get('[data-cy=login]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

**Cypress Commands:**
- Navigation: `cy.visit()`, `cy.go()`
- Querying: `cy.get()`, `cy.contains()`, `cy.within()`
- Actions: `cy.click()`, `cy.type()`, `cy.select()`
- Assertions: `cy.should()`, `cy.expect()`
- Network: `cy.intercept()`, `cy.request()`

#### PlayWright Framework
**PlayWright Advantages:**
- Multi-browser support
- Strong API
- Built-in tracing
- Screenshots and videos
- Code generation

**PlayWright Example:**
```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://example.com")
    page.click("text=Login")
    page.fill("#username", "user")
    page.fill("#password", "password")
    page.click("button:has-text('Sign in')")
    assert page.url == "https://example.com/dashboard"
    browser.close()
```

#### Page Object Model Implementation
**Page Class Example:**
```python
class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        
    # Locators
    USERNAME_FIELD = (By.ID, "username")
    PASSWORD_FIELD = (By.ID, "password")
    LOGIN_BUTTON = (By.ID, "loginBtn")
    
    # Methods
    def enter_username(self, username):
        self.driver.find_element(*self.USERNAME_FIELD).send_keys(username)
    
    def enter_password(self, password):
        self.driver.find_element(*self.PASSWORD_FIELD).send_keys(password)
    
    def click_login(self):
        self.driver.find_element(*self.LOGIN_BUTTON).click()
    
    def login(self, username, password):
        self.enter_username(username)
        self.enter_password(password)
        self.click_login()
```

**Test Using Page Object:**
```python
def test_login():
    driver = webdriver.Chrome()
    login_page = LoginPage(driver)
    login_page.login("user", "password")
    assert driver.current_url == "https://example.com/dashboard"
```

---

### 3. API Automation

#### REST API Basics
**HTTP Methods:**
- GET: Retrieve resource
- POST: Create resource
- PUT: Replace resource
- PATCH: Partial update
- DELETE: Remove resource
- HEAD: Like GET without body

**HTTP Status Codes:**
- 2xx: Success
- 3xx: Redirection
- 4xx: Client error
- 5xx: Server error

#### REST Assured (Java)
```java
import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

// GET Request
get("https://api.example.com/users")
    .then()
    .statusCode(200)
    .body("id", hasItems(1, 2, 3));

// POST Request
given()
    .header("Content-Type", "application/json")
    .body(new User("John", "john@example.com"))
    .when()
    .post("https://api.example.com/users")
    .then()
    .statusCode(201)
    .body("id", notNullValue());

// Path Parameters
given()
    .pathParam("userId", 123)
    .when()
    .get("https://api.example.com/users/{userId}")
    .then()
    .statusCode(200);

// Query Parameters
given()
    .queryParam("status", "active")
    .queryParam("page", 1)
    .when()
    .get("https://api.example.com/users")
    .then()
    .statusCode(200);
```

#### Requests Library (Python)
```python
import requests
import json

# GET Request
response = requests.get('https://api.example.com/users')
assert response.status_code == 200
data = response.json()

# POST Request
payload = {'name': 'John', 'email': 'john@example.com'}
response = requests.post(
    'https://api.example.com/users',
    json=payload,
    headers={'Content-Type': 'application/json'}
)
assert response.status_code == 201

# PUT Request
response = requests.put(
    'https://api.example.com/users/123',
    json={'name': 'Jane'}
)

# DELETE Request
response = requests.delete('https://api.example.com/users/123')
assert response.status_code == 204

# Response Validation
assert response.headers['Content-Type'] == 'application/json'
assert response.elapsed.total_seconds() < 2  # Performance check
```

#### API Test Patterns
**Authentication:**
```python
# Basic Auth
response = requests.get(url, auth=('user', 'password'))

# Bearer Token
headers = {'Authorization': 'Bearer token123'}
response = requests.get(url, headers=headers)

# API Key
headers = {'X-API-Key': 'api_key_123'}
response = requests.get(url, headers=headers)
```

**Response Assertion:**
```python
# Status Code
assert response.status_code == 200

# JSON Content
assert response.json()['id'] == 123
assert response.json()['name'] == 'John'

# Headers
assert 'application/json' in response.headers['Content-Type']

# Response Time
assert response.elapsed.total_seconds() < 2
```

---

### 4. Test Data Management

#### Test Data Generation
**Hard-Coded Data:**
```python
test_data = {
    'username': 'testuser',
    'email': 'test@example.com',
    'password': 'TestPass123!'
}
```

**Data from CSV:**
```python
import csv

def load_csv_data(filename):
    with open(filename, 'r') as f:
        reader = csv.DictReader(f)
        return list(reader)

test_data = load_csv_data('test_data.csv')
```

**Database Query:**
```python
import sqlite3

def get_test_user():
    conn = sqlite3.connect('test.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = 1")
    return cursor.fetchone()
```

**Faker Library (Synthetic Data):**
```python
from faker import Faker

fake = Faker()
test_data = {
    'name': fake.name(),
    'email': fake.email(),
    'phone': fake.phone_number(),
    'date': fake.date_of_birth()
}
```

#### Test Data Cleanup
```python
@pytest.fixture
def setup_teardown():
    # Setup
    user = create_test_user('testuser')
    yield user
    
    # Teardown (cleanup)
    delete_test_user('testuser')
```

---

### 5. Test Organization and Execution

#### Test Framework Structure
**Project Layout:**
```
tests/
  ├── fixtures/
  │   └── conftest.py
  ├── page_objects/
  │   ├── login_page.py
  │   └── dashboard_page.py
  ├── tests/
  │   ├── test_login.py
  │   ├── test_dashboard.py
  │   └── test_checkout.py
  ├── data/
  │   ├── test_data.csv
  │   └── test_data.json
  └── utils/
      ├── browser_utils.py
      └── api_utils.py
```

#### Test Organization with pytest
```python
import pytest

class TestLogin:
    def test_valid_login(self):
        # Test implementation
        pass
    
    def test_invalid_password(self):
        # Test implementation
        pass
    
    @pytest.mark.skip(reason="Not implemented yet")
    def test_forgot_password(self):
        pass
    
    @pytest.mark.parametrize("username,password", [
        ("user1", "pass1"),
        ("user2", "pass2"),
    ])
    def test_multiple_users(self, username, password):
        # Test with different data
        pass
```

#### Fixtures and Hooks
```python
@pytest.fixture(scope="session")
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

@pytest.fixture
def login_page(driver):
    login_page = LoginPage(driver)
    login_page.navigate()
    return login_page

def pytest_addoption(parser):
    parser.addoption("--browser", default="chrome")

def pytest_configure(config):
    browser = config.getoption("--browser")
    print(f"Running tests on {browser}")
```

#### Test Execution and Reporting
```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_login.py

# Run specific test
pytest tests/test_login.py::TestLogin::test_valid_login

# Run with markers
pytest -m smoke

# Parallel execution
pytest -n auto

# Generate HTML report
pytest --html=report.html

# Coverage report
pytest --cov=. --cov-report=html
```

---

### 6. Debugging and Logging

#### Logging Implementation
```python
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('test.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

logger.debug("Debug message")
logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")
logger.critical("Critical message")
```

#### Screenshots and Artifacts
```python
def take_screenshot(driver, filename):
    driver.save_screenshot(f'screenshots/{filename}.png')

@pytest.fixture
def screenshot_on_failure(request):
    yield
    if request.node.rep_call.failed:
        take_screenshot(driver, request.node.name)
```

#### Debugging Tools
- Print statements and logging
- IDE debugging (breakpoints, step-through)
- Browser developer tools
- Charles/Fiddler (HTTP proxy)
- Screenshots/video recording
- Log analysis

---

### 7. CI/CD Integration

#### GitHub Actions Example
```yaml
name: Automated Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: '3.9'
      - run: pip install -r requirements.txt
      - run: pytest tests/
```

#### Jenkins Pipeline
```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }
        stage('Test') {
            steps {
                sh 'pytest tests/ --junit-xml=report.xml'
            }
        }
        stage('Report') {
            steps {
                junit 'report.xml'
            }
        }
    }
}
```

---

## Test Automation Workflow

### Step 1: Environment Setup
- Install tools (IDE, frameworks, browsers)
- Configure version control
- Set up test environment
- Configure CI/CD pipeline

### Step 2: Framework Development
- Create project structure
- Implement page objects/utilities
- Set up test data management
- Implement logging/reporting

### Step 3: Test Implementation
- Write test cases
- Implement assertions
- Handle errors gracefully
- Add logging

### Step 4: Debugging and Testing
- Run tests locally
- Debug failures
- Verify test reliability
- Optimize performance

### Step 5: Integration
- Configure CI/CD
- Set up automated execution
- Integrate with test management
- Set up notifications

### Step 6: Maintenance
- Update tests as application changes
- Refactor automation code
- Monitor test health
- Improve automation metrics

---

## Best Practices

1. **Keep tests simple and focused**
2. **Use meaningful names**
3. **DRY principle (Don't Repeat Yourself)**
4. **Page Object Model for UI tests**
5. **Proper error handling**
6. **Comprehensive logging**
7. **Realistic test data**
8. **Version control all code**
9. **Code reviews**
10. **Regular refactoring**

---

## Key Terminology

- **Locator:** Method to identify UI element
- **Assertion:** Verification of expected outcome
- **Test Fixture:** Setup/teardown for tests
- **Mock:** Simulated component for testing
- **Stub:** Temporary implementation
- **Parameter:** Input value for test
- **Iteration:** Multiple test runs with different data
- **CI/CD:** Continuous Integration/Deployment
- **Framework:** Infrastructure for test automation
- **Page Object:** Abstraction of UI page

---

## Learning Objectives

By completing CT-TAS, professionals should be able to:

1. **Write** test automation code
2. **Implement** Page Object Model
3. **Automate** web application tests
4. **Test** REST APIs
5. **Manage** test data effectively
6. **Organize** test code structure
7. **Debug** test failures
8. **Implement** logging and reporting
9. **Integrate** automation with CI/CD
10. **Apply** best practices and design patterns

---

## Exam Information

**Format:** Multiple choice (40 questions)  
**Time:** 60 minutes  
**Pass Score:** 65%  
**Prerequisites:** ISTQB CTFL  
**Renewal:** Every 3 years  

---

*Last Updated: 2024*  
*ISTQB® is a registered trademark of the International Software Testing Qualifications Board*
