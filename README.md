<div align="center">

# 🚀 Cypress Studies

### End-to-End Test Automation Portfolio

Automated test scenarios developed with **Cypress** using QA best practices for **Functional Testing**, **UI Validation**, **Regression Testing**, and **End-to-End Automation**.

<br>

<img src="https://img.shields.io/badge/Cypress-E2E-69D3A7?style=for-the-badge&logo=cypress&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/QA-Automation-blue?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Status-In_Progress-success?style=for-the-badge"/>

</div>

---

# 📚 Contents

- 🔐 Login Automation
- 📝 Consultancy Request Automation
- 🛠 Tech Stack
- 📂 Project Structure
- ▶ Running the Project
- 🚧 Roadmap

---

# ✨ Features

- ✅ End-to-End Testing
- ✅ Functional Testing
- ✅ UI Validation
- ✅ Positive Scenarios
- ✅ Negative Scenarios
- ✅ Custom Commands
- ✅ Dynamic Components
- ✅ File Upload
- ✅ Form Validation
- ✅ Assertions
- ✅ Regression Ready

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Cypress | End-to-End Automation |
| JavaScript (ES6+) | Test Development |
| Node.js | Runtime |
| Git & GitHub | Version Control |

---

# 📂 Project Structure

```text
📦 cypress-studies
│
├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── support
│   └── screenshots
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# 🔐 Project 01 — Login Automation

## 🎯 Objective

Validate the complete authentication flow by covering both successful and unsuccessful login attempts.

### ✔ Test Coverage

| Scenario | Status |
|----------|--------|
| Valid Login | ✅ |
| Invalid Password | ✅ |
| Invalid Email | ✅ |
| Welcome Message Validation | ✅ |
| User Name Validation | ✅ |
| Authentication Error Validation | ✅ |

### 🧪 Validations

- Authentication using valid credentials
- Authentication using invalid password
- Authentication using invalid email
- UI Visibility
- Welcome Message
- Logged User
- Error Handling
- End-to-End Login Flow

### ⚙ Assertions

```javascript
.should('be.visible')
.should('have.text')
cy.contains()
```

### 📸 Test Evidence

<p align="center">

<img width="1896" alt="Login Automation" src="https://github.com/user-attachments/assets/9bbac596-defd-41c8-949c-6f2bf4f2c6f2"/>

</p>

---

# 📝 Project 02 — Consultancy Request Form

## 🎯 Objective

Automate the complete consultancy request workflow, validating every critical component from authentication to successful submission.

### ✔ Test Coverage

| Feature | Status |
|----------|--------|
| Authentication | ✅ |
| Navigation | ✅ |
| Personal Information | ✅ |
| Phone Validation | ✅ |
| Dropdown | ✅ |
| Radio Buttons | ✅ |
| Checkbox | ✅ |
| File Upload | ✅ |
| Text Area | ✅ |
| Dynamic Tags | ✅ |
| Terms Acceptance | ✅ |
| Form Submission | ✅ |
| Success Modal | ✅ |

### 🧪 Components Validated

- Authentication
- Navigation
- Input Fields
- Phone Mask
- Select Dropdown
- Radio Buttons
- Checkboxes
- File Upload
- Dynamic Tags
- Text Area
- Success Modal
- Business Rules
- UI Validation
- End-to-End Flow

### ⚙ Commands & Assertions

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

### 📸 Test Evidence

<p align="center">

<img width="1980" alt="Consultancy Automation" src="https://github.com/user-attachments/assets/fe7d164a-a68d-4bc9-a38e-ea886c0790a4"/>

</p>

---

# 💼 QA Skills Demonstrated

- ✔ Cypress Automation
- ✔ JavaScript
- ✔ DOM Interaction
- ✔ Assertions
- ✔ Functional Testing
- ✔ UI Testing
- ✔ End-to-End Testing
- ✔ Regression Testing
- ✔ Custom Commands
- ✔ File Upload
- ✔ Dynamic Components
- ✔ Form Validation
- ✔ Test Design
- ✔ Git & GitHub

---

# ▶ Running the Project

```bash
git clone https://github.com/Dhiorge/cypress-studies.git

cd cypress-studies

npm install

npx cypress open
```

---

# 🚧 Roadmap

- ✅ Login Automation
- ✅ Consultancy Request Form
- 🔄 API Testing
- 🔄 Fixtures
- 🔄 Database Validation
- 🔄 GitHub Actions
- 🔄 CI/CD Pipeline
- 🔄 Playwright Automation

---

<div align="center">

# ⭐ Automation Status

<img src="https://img.shields.io/badge/Tests-Passed-success?style=for-the-badge"/>

<img src="https://img.shields.io/badge/QA-End--to--End-blue?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Cypress-Stable-69D3A7?style=for-the-badge"/>

### Thanks for visiting my repository!

</div>
