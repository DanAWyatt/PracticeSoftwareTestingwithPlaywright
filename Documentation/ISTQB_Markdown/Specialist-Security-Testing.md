# ISTQB Specialist - Security Testing (CT-SEC) v1.0

## Overview
The Security Testing specialist certification equips professionals with specialized knowledge of security vulnerabilities, attacks, and testing techniques to identify and prevent security issues.

**Syllabus Version:** 1.0  
**Typical Duration:** 20 hours  
**Prerequisite:** ISTQB Foundation Level Certification  
**Target Audience:** Security testers, penetration testers, security analysts, QA professionals with security focus  

---

## Core Competencies

### 1. Security Fundamentals

#### Security Triad (CIA)
- **Confidentiality:** Data accessible only to authorized users
- **Integrity:** Data accurate and not altered by unauthorized parties
- **Availability:** System accessible when needed

#### Security Testing Objectives
- Identify security vulnerabilities
- Verify security controls
- Assess security risks
- Ensure compliance
- Educate stakeholders
- Improve security posture

#### Security vs. Functionality Testing
- Security testing: Intentional attempts to break system
- Functional testing: Validates expected behavior
- Complementary approaches
- Different mindset required

#### Types of Threats
- **User Attack:** External user attempting unauthorized access
- **Internal Attack:** Authorized user exceeding permissions
- **Physical Attack:** Physical access to systems
- **Social Engineering:** Manipulating people
- **Malware:** Malicious software

---

### 2. OWASP Top 10 (2021) Testing

#### 1. Broken Access Control
**Vulnerability Types:**
- Horizontal privilege escalation (access other user's data)
- Vertical privilege escalation (access higher privilege functions)
- Missing access control checks
- URL manipulation
- Path traversal
- Direct object references

**Test Approaches:**
- Enumerate user roles/permissions
- Attempt access to unauthorized resources
- Try to access admin functions with user account
- Modify object IDs in requests
- Test with deleted/disabled accounts
- Cross-tenant data access

#### 2. Cryptographic Failures
**Common Issues:**
- Unencrypted sensitive data in transit
- Unencrypted sensitive data at rest
- Weak encryption algorithms
- Insufficient key length
- Hard-coded encryption keys
- Improper key management

**Test Approaches:**
- Inspect data transmitted over network
- Analyze encryption strength
- Test SSL/TLS configuration
- Verify data at rest encryption
- Check key storage
- Test data in logs/backups

#### 3. Injection
**Injection Types:**
- SQL injection
- Command injection
- LDAP injection
- XML injection
- OS command injection
- Path traversal

**SQL Injection Testing:**
```
Input: ' OR '1'='1
Input: admin' --
Input: 1'; DROP TABLE users; --
```

**Test Approaches:**
- Input special characters
- Use SQL metacharacters
- Test error-based detection
- Try time-based blind SQL injection
- Test parameterized queries
- Verify input validation

#### 4. Insecure Design
**Design Flaws:**
- Missing security controls
- Inadequate threat modeling
- Unsafe design patterns
- Missing rate limiting
- Missing MFA
- Weak password policies

**Test Approaches:**
- Analyze design documentation
- Identify missing controls
- Test business logic flaws
- Verify authentication flows
- Check authorization design
- Test rate limiting

#### 5. Security Misconfiguration
**Configuration Issues:**
- Default credentials unchanged
- Unnecessary features enabled
- Security headers missing
- Verbose error messages
- Outdated software
- Missing security patches

**Test Approaches:**
- Try default credentials
- Enumerate enabled services
- Check HTTP headers
- Analyze error messages
- Scan for outdated components
- Review configurations

#### 6. Vulnerable and Outdated Components
**Issues:**
- Known CVEs in libraries
- End-of-life components
- Missing security patches
- Untracked dependencies

**Test Approaches:**
- Identify component versions
- Check CVE databases
- Use dependency scanning tools
- Test for known exploits
- Verify patching status

#### 7. Authentication Failures
**Vulnerabilities:**
- Weak password policies
- Account enumeration
- Session hijacking
- Credential stuffing
- MFA bypass
- Session fixation

**Test Approaches:**
- Test password complexity
- Attempt brute force attacks
- Check session management
- Test credential reset
- Verify MFA implementation
- Analyze session tokens

#### 8. Software and Data Integrity Failures
**Issues:**
- Insecure CI/CD
- Unsigned updates
- Insufficient logging
- Unverified data sources
- Insecure deserialization

**Test Approaches:**
- Verify update signatures
- Check deployment security
- Analyze object serialization
- Test plugin/library loading
- Verify source integrity

#### 9. Logging and Monitoring Failures
**Issues:**
- Insufficient logging
- Sensitive data in logs
- Missing alerting
- No log integrity checks
- Logs easily deleted
- Detection evasion

**Test Approaches:**
- Verify security events logged
- Check log content
- Test log retention
- Verify log integrity
- Test alerting
- Attempt log deletion

#### 10. Server-Side Request Forgery (SSRF)
**Vulnerability:**
- Server makes requests on attacker's behalf
- Access to internal systems
- Cloud metadata access
- Port scanning

**Test Approaches:**
- Test URL input fields
- Try internal IP addresses
- Access cloud metadata endpoints
- Test redirect following
- Bypass URL filters
- Port scanning from server

---

### 3. Web Application Security Testing

#### Authentication Testing
**Password Security:**
- Password reset functionality
- Brute force protection
- Password history
- Password strength requirements
- Account lockout mechanisms
- Password expiration policies

**Session Management:**
- Session token generation
- Session timeout
- Session fixation
- Session hijacking
- Concurrent sessions
- Session logout

**Multi-Factor Authentication:**
- MFA bypass attempts
- Remember me functionality
- MFA bypass with account recovery
- MFA implementation verification

#### Authorization Testing
**Access Control:**
- Role-based access control (RBAC)
- Attribute-based access control (ABAC)
- Broken object level authorization
- Insecure direct object references (IDOR)
- Forced browsing
- Path traversal

**Test Methodology:**
- Map application functionality
- Identify user roles
- Test cross-role access
- Test object reference manipulation
- Try directory traversal
- Verify authorization checks

#### Input Validation Testing
**Common Input Attacks:**
- Cross-Site Scripting (XSS)
- SQL Injection
- Command Injection
- XML Injection
- Path Traversal
- Buffer Overflow

**Testing Approach:**
- Identify input fields
- Test with malicious payloads
- Analyze error responses
- Test encoding bypasses
- Verify output encoding
- Test multiple encodings

#### CSRF (Cross-Site Request Forgery)
**Vulnerability:**
- Attacker tricks user into making unwanted request
- User's session/cookies used
- Action performed without consent

**Testing:**
- Identify state-changing operations
- Check for CSRF tokens
- Verify token validation
- Test token reuse
- Test with different browser
- Test with disabled JavaScript

#### API Security Testing
**API-Specific Vulnerabilities:**
- Broken object level authorization
- Excessive data exposure
- Lack of rate limiting
- Lack of authentication
- Unrestricted file uploads
- Weak API key management

**Testing:**
- Analyze API endpoints
- Test without authentication
- Test with invalid tokens
- Check response data
- Test file uploads
- Verify rate limiting

---

### 4. Encryption and Cryptography

#### Encryption Technologies
**Symmetric Encryption:**
- AES (Advanced Encryption Standard) - Current standard
- DES/3DES (deprecated)
- RC4 (deprecated)
- Key management challenges

**Asymmetric Encryption:**
- RSA (1024, 2048, 4096-bit)
- ECC (Elliptic Curve)
- Key size importance
- Certificate management

**Hashing:**
- MD5 (broken)
- SHA-1 (deprecated)
- SHA-256, SHA-512 (current standard)
- Salting requirements
- Collision resistance

#### SSL/TLS Configuration
**Protocol Versions:**
- TLS 1.0-1.1 (deprecated)
- TLS 1.2 (acceptable)
- TLS 1.3 (recommended)
- SSL 2.0/3.0 (broken)

**Certificate Testing:**
- Certificate validity
- Domain mismatch
- Self-signed certificates
- Expired certificates
- Chain verification
- Certificate pinning

**Cipher Suite Testing:**
- Weak ciphers
- Null ciphers
- Export-grade ciphers
- Perfect forward secrecy
- Cipher suite strength

#### Testing Tools
- nmap (SSL scanning)
- testssl.sh (SSL/TLS assessment)
- OpenSSL (encryption testing)
- Wireshark (packet analysis)
- Burp Suite (encryption validation)

---

### 5. Penetration Testing Basics

#### Penetration Testing Phases
1. **Reconnaissance:** Gather information
2. **Scanning:** Identify open ports and services
3. **Enumeration:** Identify resources and vulnerabilities
4. **Exploitation:** Attempt to compromise systems
5. **Reporting:** Document findings

#### Vulnerability Scanning
**Tools:**
- Nessus: Comprehensive vulnerability scanner
- OpenVAS: Open-source scanner
- Qualys: Cloud-based scanner
- Rapid7 Nexpose: Enterprise scanner

**Process:**
- Configure scan parameters
- Execute scan
- Analyze results
- Verify findings
- Test patches

#### Social Engineering
**Testing Methods:**
- Phishing emails
- Pretexting calls
- Physical security tests
- USB drop attacks
- Dumpster diving

**Ethical Considerations:**
- Obtain written authorization
- Define scope clearly
- Minimize impact
- Follow legal guidelines
- Document findings

---

### 6. Security Test Planning

#### Security Threat Modeling
**Approach:**
- Identify assets
- Identify threats
- Identify vulnerabilities
- Assess risks
- Plan mitigations

**Methodologies:**
- STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- PASTA: Process for Attack Simulation and Threat Analysis
- TRIKE: Risk-based approach

#### Security Test Design
**Test Case Design:**
- Valid input tests
- Invalid input tests
- Boundary tests
- Encoding bypass tests
- Authentication tests
- Authorization tests

**Coverage Considerations:**
- OWASP Top 10 coverage
- Industry compliance (PCI-DSS, HIPAA)
- Business risk assessment
- Threat likelihood
- Impact severity

#### Security Metrics
- Vulnerability density
- Severity distribution
- Patch status
- Security test coverage
- Remediation time
- Trend analysis

---

## Security Testing by SDLC Phase

### Phase 1: Planning & Requirements
**Activities:**
- Threat modeling
- Security requirements definition
- Security acceptance criteria
- Risk assessment
- Compliance requirements
- Budget allocation

**Artifacts:**
- Threat model
- Security requirements
- Test plan
- Risk register

### Phase 2: Analysis & Design
**Activities:**
- Security requirement analysis
- Secure design review
- Attack surface analysis
- Security test case design
- OWASP coverage planning

**Artifacts:**
- Security test cases
- Threat documentation
- Attack scenarios
- Test data with sensitive values

### Phase 3: Implementation
**Activities:**
- Security test environment setup
- Vulnerability scanning setup
- Penetration test preparation
- Test automation scripts
- Security baseline definition

**Artifacts:**
- Scanning reports (baseline)
- Security automation scripts
- Test data with PII

### Phase 4: Execution
**Activities:**
- Execute security tests
- Run vulnerability scans
- Conduct penetration testing
- Log security defects
- Validate fixes
- Verify compliance

**Artifacts:**
- Security test results
- Vulnerability reports
- Penetration test report
- Defect reports

### Phase 5: Closure
**Activities:**
- Final security assessment
- Compliance verification
- Risk analysis
- Recommendations
- Lessons learned

**Artifacts:**
- Security summary report
- Compliance attestation
- Risk assessment report

---

## Compliance and Standards

### PCI DSS (Payment Card Industry)
- Secure network architecture
- Cardholder data protection
- Vulnerability management
- Access control
- Security monitoring
- Security policy

### HIPAA (Health Insurance Portability and Accountability Act)
- Patient privacy protection
- Data encryption
- Access controls
- Audit logging
- Breach notification

### GDPR (General Data Protection Regulation)
- Data subject rights
- Consent requirements
- Data protection by design
- Privacy impact assessments
- Breach notification
- Data minimization

### SOC 2
- Security, Availability, Processing Integrity
- Confidentiality, Privacy controls
- Continuous monitoring
- Evidence collection

---

## Key Terminology

- **Vulnerability:** Weakness that can be exploited
- **Exploit:** Code/technique that exploits vulnerability
- **Zero-day:** Unknown vulnerability
- **Threat:** Potential to cause harm
- **Risk:** Probability × Impact
- **Payload:** Malicious data sent in attack
- **Firewall:** Network security device
- **IDS/IPS:** Intrusion Detection/Prevention System
- **WAF:** Web Application Firewall
- **Hardening:** Security configuration optimization

---

## Common Security Testing Tools

- **Burp Suite:** Web application security testing
- **OWASP ZAP:** Web application scanner
- **Metasploit:** Penetration testing framework
- **Nmap:** Network scanning and mapping
- **SQLMap:** SQL injection detection
- **Wireshark:** Network packet analysis
- **OpenSSL:** Cryptography and SSL/TLS testing
- **Nikto:** Web server scanner
- **w3af:** Web attack and audit framework

---

## Learning Objectives

By completing CT-SEC, professionals should be able to:

1. **Understand** security fundamentals and terminology
2. **Identify** security vulnerabilities
3. **Apply** OWASP Top 10 testing techniques
4. **Conduct** security tests for web applications
5. **Analyze** encryption and cryptographic controls
6. **Perform** basic penetration testing
7. **Design** security test cases
8. **Report** security findings
9. **Apply** security testing metrics
10. **Ensure** compliance with security standards

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
