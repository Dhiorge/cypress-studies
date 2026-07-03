# cypress-studies
Estudos e exercícios de Cypress

<h2 align="center">🔐 Login Test Automation</h2>

<p align="center">
Automated end-to-end authentication tests developed with <strong>Cypress</strong>, validating both positive and negative login scenarios while ensuring application stability and user authentication reliability.
</p>

---

<h3>🎯 Test Coverage</h3>

<table>
<tr>
<th>Scenario</th>
<th>Validation</th>
<th>Status</th>
</tr>

<tr>
<td>✅ Valid Login</td>
<td>User is successfully authenticated and redirected to the application.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>❌ Invalid Password</td>
<td>System denies authentication and displays an access denied message.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>❌ Invalid Email</td>
<td>System denies authentication and displays an access denied message.</td>
<td>✔ Passed</td>
</tr>

</table>

---

<h3>🧪 QA Validations</h3>

<ul>
<li>✔ Authentication using valid credentials</li>
<li>✔ Authentication using invalid password</li>
<li>✔ Authentication using invalid email</li>
<li>✔ User information validation</li>
<li>✔ Welcome message validation</li>
<li>✔ Authentication error handling</li>
<li>✔ Visibility assertions</li>
<li>✔ Text content assertions</li>
<li>✔ End-to-End Login Flow</li>
</ul>

---

<h3>⚙ Cypress Assertions</h3>

```javascript
.should('be.visible')
.should('have.text')
cy.contains()
```

---

<h3>📋 Test Flow</h3>

```text
Launch Application
        │
        ▼
 Submit Credentials
        │
        ▼
 ┌───────────────┐
 │ Credentials ? │
 └───────┬───────┘
         │
  ┌──────┴──────┐
  ▼             ▼
Valid         Invalid
  │             │
  ▼             ▼
Validate     Validate
Dashboard    Error Message
```

---

<h3>📊 Automation Checklist</h3>

- ✅ Functional Testing
- ✅ UI Validation
- ✅ Authentication Testing
- ✅ Negative Testing
- ✅ Positive Testing
- ✅ Regression Ready
- ✅ End-to-End Automation
- ✅ Smoke Test Coverage

---

<h3>🛠 Tech Stack</h3>

<p>

<img src="https://img.shields.io/badge/Cypress-Automation-69D3A7?style=for-the-badge&logo=cypress&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/QA-Testing-blue?style=for-the-badge"/>

<img src="https://img.shields.io/badge/E2E-Tests-success?style=for-the-badge"/>

</p>

---

<h3>🎯 Objective</h3>

<blockquote>

Ensure the login functionality remains stable by validating successful authentication, handling invalid credential attempts, and verifying that the application consistently provides accurate user feedback through automated End-to-End testing.

</blockquote>

---

<div align="center">

### 🚀 Test Status

🟢 **All Login Scenarios Passed Successfully**

</div>

<img width="1896" height="1001" alt="Login Test  Successful Authentication  Passed" src="https://github.com/user-attachments/assets/9bbac596-defd-41c8-949c-6f2bf4f2c6f2" />


<h2 align="center">📝 Consultancy Request Form Automation</h2>

<p align="center">
Comprehensive End-to-End automation developed with <strong>Cypress</strong> to validate the complete consultancy request workflow, including authentication, form interaction, file upload, dynamic components, business rules, and successful submission.
</p>

---

<h3>🎯 Test Objective</h3>

<p>

Validate that a user can successfully submit a consultancy request by interacting with every critical component of the form while ensuring data integrity, UI consistency, and business rule compliance.

</p>

---

<h3>📊 Test Coverage</h3>

<table>

<tr>
<th>Feature</th>
<th>Validation</th>
<th>Status</th>
</tr>

<tr>
<td>🔐 Authentication</td>
<td>User logs into the application successfully.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>📂 Navigation</td>
<td>Access Consultancy Form page.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>📝 Personal Information</td>
<td>Name, Email and Phone fields completed.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>📋 Dropdown</td>
<td>Consultancy type selected correctly.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>🏢 Radio Buttons</td>
<td>Company profile selection validated.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>📄 CNPJ</td>
<td>Corporate document successfully filled.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>☑ Multiple Checkboxes</td>
<td>Digital marketing channels selected.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>📎 File Upload</td>
<td>Attachment uploaded successfully.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>📝 Text Area</td>
<td>Consultancy description submitted.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>🏷 Dynamic Tags</td>
<td>Technology tags created dynamically.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>✅ Terms Acceptance</td>
<td>Terms checkbox validated.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>🚀 Form Submission</td>
<td>Request submitted successfully.</td>
<td>✔ Passed</td>
</tr>

<tr>
<td>🎉 Success Modal</td>
<td>Confirmation modal displayed.</td>
<td>✔ Passed</td>
</tr>

</table>

---

<h3>🧪 QA Validations</h3>

<ul>

<li>✔ End-to-End User Journey</li>

<li>✔ Login Validation</li>

<li>✔ Navigation Validation</li>

<li>✔ Input Fields Validation</li>

<li>✔ Phone Mask Validation</li>

<li>✔ Dropdown Selection</li>

<li>✔ Radio Button Validation</li>

<li>✔ Checkbox Validation</li>

<li>✔ File Upload Validation</li>

<li>✔ Dynamic Component Validation</li>

<li>✔ Tag Creation Validation</li>

<li>✔ Form Submission</li>

<li>✔ Success Message Validation</li>

<li>✔ UI Visibility Assertions</li>

<li>✔ Regression Ready</li>

</ul>

---

<h3>⚙ Cypress Commands & Assertions</h3>

```javascript
cy.type()
cy.check()
cy.select()
cy.selectFile()
cy.click()
cy.contains()

.should('be.visible')
.should('have.text')
.should('have.value')
.should('be.checked')
.should('not.be.checked')
```

---

<h3>🧭 Automation Workflow</h3>

```text
Launch Application
        │
        ▼
Authenticate User
        │
        ▼
Navigate to Consultancy Form
        │
        ▼
Fill Personal Information
        │
        ▼
Select Consultancy Type
        │
        ▼
Choose Company Profile
        │
        ▼
Fill Corporate Information
        │
        ▼
Select Marketing Channels
        │
        ▼
Upload Attachment
        │
        ▼
Describe Consultancy Needs
        │
        ▼
Add Technology Tags
        │
        ▼
Accept Terms
        │
        ▼
Submit Form
        │
        ▼
Validate Success Modal
```

---

<h3>📋 Automated Components</h3>

- ✅ Authentication
- ✅ Navigation
- ✅ Text Inputs
- ✅ Phone Mask
- ✅ Select Dropdown
- ✅ Radio Buttons
- ✅ Checkboxes
- ✅ File Upload
- ✅ Text Area
- ✅ Dynamic Tags
- ✅ Success Modal
- ✅ Functional Validation
- ✅ UI Validation
- ✅ Business Rules
- ✅ End-to-End Flow

---

<h3>🛠 Tech Stack</h3>

<p>

<img src="https://img.shields.io/badge/Cypress-E2E_Testing-69D3A7?style=for-the-badge&logo=cypress&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/Test_Automation-QA-blue?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Form_Testing-Complete-success?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Regression-Ready-brightgreen?style=for-the-badge"/>

</p>

---

<h3>📈 Automation Metrics</h3>

| Metric | Result |
|---------|--------|
| Authentication | ✅ |
| Form Completion | ✅ |
| File Upload | ✅ |
| Dynamic Tags | ✅ |
| Business Rules | ✅ |
| Success Modal | ✅ |
| Assertions | 20+ |
| Test Result | 🟢 Passed |

---

<h3>🎯 Quality Assurance Focus</h3>

<blockquote>

This automated test validates the complete consultancy request process from login to successful submission, ensuring all user interactions, business rules, dynamic elements, and UI feedback function correctly. The scenario provides reliable regression coverage for one of the application's primary business workflows.

</blockquote>

---

<div align="center">

# 🚀 End-to-End Consultancy Workflow

### 🟢 Test Status

**✔ All validations completed successfully**

<img src="https://img.shields.io/badge/Status-PASSED-success?style=for-the-badge"/>

</div>

<p align="center">
<img width="1980" height="1280" alt="Form Submission _Status Passed" src="https://github.com/user-attachments/assets/fe7d164a-a68d-4bc9-a38e-ea886c0790a4" />
</p>


