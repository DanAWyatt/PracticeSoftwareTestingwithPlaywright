# ISTQB Specialist - Acceptance Testing (CT-AcT) v1.0

## Overview
The Acceptance Testing specialist certification focuses on testing that validates whether a system meets business and user requirements, including UAT, business acceptance testing, and operational acceptance testing.

**Syllabus Version:** 1.0  
**Typical Duration:** 20 hours  
**Prerequisite:** ISTQB Foundation Level Certification  
**Target Audience:** Business analysts, acceptance testers, UAT coordinators, business users, product owners  

---

## Core Competencies

### 1. Acceptance Testing Fundamentals

#### Definition and Purpose
**Acceptance Testing:**
- Final confirmation that system meets business requirements
- Performed by/with business users
- Validates acceptance criteria
- Determines system readiness for production

**Key Objectives:**
- Validate business requirements met
- Verify system functionality from user perspective
- Confirm system satisfies acceptance criteria
- Ensure user/business confidence
- Establish baseline for production

#### Types of Acceptance Testing

**User Acceptance Testing (UAT)**
- End users validate system
- Functional completeness
- Usability and workflow
- Data migration verification
- Performance acceptability

**Business Acceptance Testing (BAT)**
- Business stakeholders verify requirements
- Business process validation
- Business rules verification
- Business value confirmation

**Operational Acceptance Testing (OAT)**
- IT operations verification
- Backup/restore procedures
- Administration functions
- Performance and capacity
- Maintenance procedures
- Disaster recovery

**Contract Acceptance Testing (CAT)**
- Verify contractual requirements
- Acceptance criteria fulfillment
- Performance standards
- Service level agreements

**Regulatory Acceptance Testing (RAT)**
- Compliance with regulations
- Statutory requirements
- Industry standards
- Audit requirements
- Data protection requirements

#### Acceptance vs. System Testing
| Aspect | System Testing | Acceptance Testing |
|--------|---|---|
| Performed By | QA/Test Team | Business/Users |
| Perspective | Technical | Business |
| Focus | Complete functionality | Business requirements |
| Environment | Test environment | Production-like |
| Data | Test data | Real/realistic data |
| Success Criteria | Test pass/fail | Business acceptance |
| Decision | Quality assessment | Go/no-go production |

---

### 2. Acceptance Test Planning

#### Acceptance Test Strategy
**Components:**
- Definition of acceptance criteria
- Types of testing required
- Test approach and methodology
- Team composition
- Responsibilities
- Timeline and schedule
- Sign-off procedures
- Escalation process

#### Defining Acceptance Criteria
**Characteristics:**
- Specific and measurable
- Traceable to requirements
- Testable
- Realistic and achievable
- Clear definition of success

**Acceptance Criteria Examples:**

*Feature: User Login*
```
Given: User registration completed
When: User enters valid credentials
Then: User logged in successfully
And: User dashboard displayed within 2 seconds
```

*Non-Functional: Performance*
```
Acceptance Criterion: Response time < 2 seconds for 95% of requests
Acceptance Criterion: Support 1000 concurrent users
Acceptance Criterion: Database queries complete within 500ms
```

#### Acceptance Test Plan
**Contents:**
- Executive summary
- Acceptance criteria
- Test approach and methodology
- User roles and responsibilities
- Test environment requirements
- Test data requirements
- Schedule and milestones
- Entry and exit criteria
- Sign-off procedures
- Risk assessment
- Contingency planning

#### Entry Criteria
- Application build complete
- System testing completed
- Critical defects resolved
- Test environment production-ready
- Test data prepared
- Users trained
- UAT team assigned
- Acceptance test cases ready

#### Exit Criteria
- All planned tests executed
- Acceptance criteria verified
- Critical/major defects resolved
- Performance standards met
- Data integrity verified
- Business sign-off obtained
- Go/no-go decision made
- Lessons learned documented

---

### 3. Acceptance Test Design

#### User Story Acceptance Criteria
**User Story Format:**
```
As a [user type]
I want [functionality]
So that [benefit]
```

**Acceptance Criteria:**
```
Given [precondition]
When [action]
Then [expected result]
```

**Example:**
```
As a customer
I want to apply discount code at checkout
So that I save money on my purchase

Acceptance Criteria:
- Given customer has valid discount code
- When customer enters code in checkout
- Then discount applied to total
- And updated total displayed
- And confirmation message shown
```

#### Business Process Testing
**Process-Based Testing:**
- Map end-to-end business processes
- Identify process steps
- Test sequential execution
- Test decision points
- Test error handling
- Verify process outcomes

**Process Testing Scenarios:**
1. Normal process flow (happy path)
2. Alternative flows (variations)
3. Exception handling (errors)
4. Edge cases and boundaries
5. Integration between processes

#### Workflow Acceptance Testing
**Workflow Elements:**
- Workflow initiation
- Task assignment
- Task execution
- Task completion
- State transitions
- Escalation procedures
- Approval workflows
- Rejection handling

**Testing Approach:**
- Document current workflow
- Map desired workflow
- Test workflow transitions
- Verify data flow
- Test error scenarios
- Validate notifications

#### Data Migration Acceptance
**Migration Testing:**
- Data completeness
- Data accuracy
- Data format conversion
- Duplicate handling
- Referential integrity
- Performance of bulk operations
- Rollback procedures

**Test Scenarios:**
- Old system data → New system
- Data transformation accuracy
- Orphaned record handling
- Data loss detection
- Performance under volume
- Rollback verification

---

### 4. UAT Execution and User Involvement

#### UAT Team Organization
**Key Roles:**
- **UAT Coordinator:** Overall UAT coordination and management
- **Business Owner:** Approves requirements and sign-off
- **End Users:** Execute tests and validate functionality
- **Subject Matter Experts:** Provide domain expertise
- **System Administrator:** Environment and data management
- **Test Analyst:** Test case design and coordination

#### User Training
**Training Content:**
- System functionality overview
- How to execute test cases
- How to report issues
- Escalation procedures
- Tools and access procedures
- Data security requirements

**Training Methods:**
- Live demonstrations
- Hands-on practice
- Documentation
- FAQ preparation
- Help desk setup
- Post-training support

#### UAT Execution Process
1. **Environment Preparation**
   - System deployed to UAT environment
   - Data loaded and verified
   - Users have access
   - Tools configured
   - Support team ready

2. **Test Case Execution**
   - User executes test case
   - User follows test steps
   - User records results
   - User captures evidence
   - User reports deviations

3. **Issue Documentation**
   - Issue description
   - Steps to reproduce
   - Screenshots/logs
   - Severity assessment
   - User name and date

4. **Defect Resolution**
   - Defect triage
   - Assignment and fixing
   - Verification testing
   - Retest by user
   - Closure

5. **Progress Tracking**
   - Test execution dashboard
   - Defect trend analysis
   - Status reporting
   - Risk assessment
   - Go/no-go readiness

#### Managing UAT Challenges
**Common Issues:**
- User availability
- Competing priorities
- Lack of engagement
- Environment instability
- Inadequate test data
- Changing requirements
- Resistance to change

**Solutions:**
- Executive sponsorship
- Clear communication
- Adequate training
- Realistic timelines
- Single point of contact
- Escalation procedures
- Change management

---

### 5. Acceptance Test Documentation

#### Test Case Documentation
**User-Friendly Format:**
- Clear, simple language
- Step-by-step instructions
- Expected results for each step
- Sample data
- Screenshots
- Minimal technical jargon

**Example Test Case:**
```
Test Case: Place Order with Discount Code
Objective: Verify discount code application

Preconditions:
- User logged in
- Items in shopping cart
- Valid discount code available

Test Steps:
1. Navigate to checkout
2. Review order total
3. Locate discount code field
4. Enter discount code "SAVE20"
5. Click Apply button
6. Review new total

Expected Results:
- Discount applied (20% reduction)
- New total displayed
- Success message shown
- Email confirmation sent
```

#### Test Result Documentation
**Recording Results:**
- Test case ID
- Test case name
- Executed by (user name)
- Execution date/time
- Pass/Fail status
- Comments/observations
- Evidence (screenshots)
- Issues encountered

#### Issue/Defect Reporting
**Defect Report Contents:**
- Defect ID
- Test case ID
- Environment details
- Summary of issue
- Steps to reproduce
- Expected vs. actual
- Severity
- Screenshots/logs
- User feedback
- Date/time reported

**Severity Classification:**
- **Critical:** System unusable, data loss
- **Major:** Significant functionality impaired
- **Minor:** Minor feature issue
- **Cosmetic:** Appearance/UI issue

---

### 6. Acceptance Criteria Verification

#### Testing Non-Functional Acceptance Criteria
**Performance Acceptance:**
- Response time targets
- Throughput requirements
- Load capacity
- Scalability needs
- Measurement methodology
- Performance testing results

**Usability Acceptance:**
- User interface intuitiveness
- Navigation effectiveness
- Help system adequacy
- Accessibility compliance
- User training effectiveness

**Reliability Acceptance:**
- System uptime requirements
- Failure recovery
- Data protection
- Backup/restore procedures
- Disaster recovery capabilities

**Security Acceptance:**
- Authentication functioning
- Authorization correct
- Data encrypted
- Audit logging
- Compliance verified

**Compatibility Acceptance:**
- Supported browsers
- Operating systems
- Mobile devices
- Third-party integrations
- Data formats

---

### 7. Business Acceptance Validation

#### Business Process Verification
**Verification Approach:**
1. Document current state process
2. Define desired future state
3. Execute business process tests
4. Collect process metrics
5. Compare to baseline
6. Verify improvement

#### Business Rules Testing
**Business Rule Testing:**
- Identify all business rules
- Test rule compliance
- Test rule interactions
- Test rule exceptions
- Verify rule consistency

**Example Business Rules:**
- Discount only applies to first purchase
- Maximum discount 50% of order total
- Discount expires after 30 days
- Discount not combinable with other offers

#### Compliance Verification
**Regulatory Compliance:**
- Identify applicable regulations
- Define compliance requirements
- Design compliance tests
- Execute compliance tests
- Document compliance

**Examples:**
- GDPR data protection requirements
- HIPAA patient privacy
- PCI-DSS payment processing
- Accessibility standards (WCAG)
- Industry-specific regulations

#### Sign-Off Process
**Stakeholder Sign-Off:**
- Business owner
- Executive sponsor
- Compliance officer
- Security officer
- Operations manager

**Sign-Off Documentation:**
- Acceptance criteria met
- Known issues documented
- Risk acceptance
- Go/no-go decision
- Contingency plans
- Support readiness

---

## Acceptance Testing by Environment

### Test Environment Setup
- Production-equivalent configuration
- Realistic data volume
- Production-like performance
- All interfaces/integrations
- Backup/restore capabilities
- Monitoring and logging

### UAT Environment Considerations
- User accessibility
- Data refresh schedules
- Privacy of test data
- Segregation from production
- Support availability
- Issue tracking system
- Communication channels

### Production Readiness
**Checks Before Production:**
- All tests passed
- Critical defects resolved
- Performance verified
- Security validated
- Documentation complete
- Support trained
- Rollback plan tested
- Communication plan ready
- Go-live authorization
- Monitoring activated

---

## Key Terminology

- **Acceptance Criteria:** Conditions for test success
- **UAT:** User Acceptance Testing
- **Sign-off:** Formal approval
- **Business Process:** Sequence of business activities
- **Regression:** Return of previously fixed defects
- **Go-live:** Production deployment
- **Stakeholder:** Person with interest in outcome
- **Traceability:** Link from requirements to tests
- **Compliance:** Adherence to regulations/standards

---

## Cross-References

- **CTAL-TA (Test Analyst):** Detailed test design techniques
- **CTAL-TTA (Technical Test Analyst):** Technical automation aspects
- **CTAL-TM (Test Manager):** UAT management and coordination
- **CT-SEC (Security Testing):** Security acceptance validation

---

## Learning Objectives

By completing CT-AcT, professionals should be able to:

1. **Understand** acceptance testing objectives and types
2. **Plan** user acceptance testing activities
3. **Design** acceptance test cases
4. **Coordinate** UAT with business users
5. **Execute** acceptance tests
6. **Document** issues and results
7. **Verify** business requirements met
8. **Manage** UAT timeline and resources
9. **Obtain** stakeholder sign-off
10. **Ensure** production readiness

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
