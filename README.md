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


<p align="center">
<img width="1980" height="1280" alt="Form Submission _Status Passed" src="https://github.com/user-attachments/assets/fe7d164a-a68d-4bc9-a38e-ea886c0790a4" />
</p>


