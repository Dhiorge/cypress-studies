# cypress-studies
Estudos e exercícios de Cypress

## 🔐 Login Test Automation

This test suite validates the authentication flow of the application using Cypress, covering both positive and negative scenarios to ensure the login functionality behaves as expected.

### 🎯 Test Scenarios

| Test Case | Expected Result | Status |
|-----------|-----------------|--------|
| Valid Login | User is successfully authenticated and redirected to the application | ✅ Passed |
| Invalid Password | Authentication is denied and an error message is displayed | ✅ Passed |
| Invalid Email | Authentication is denied and an error message is displayed | ✅ Passed |

### ✅ Validations Performed

#### Successful Login
- Opens the application.
- Submits valid user credentials.
- Confirms the authenticated user's name is displayed.
- Verifies the welcome message after login.
- Ensures all expected elements are visible.

#### Invalid Password
- Attempts authentication with a valid email and an incorrect password.
- Verifies that access is denied.
- Confirms the error message is visible.

#### Invalid Email
- Attempts authentication with an invalid email and a valid password.
- Verifies that access is denied.
- Confirms the error message is visible.

### 🛠 QA Approach

This test suite follows common Quality Assurance practices by validating:

- Positive authentication flow.
- Negative authentication scenarios.
- UI element visibility.
- Text content assertions.
- User feedback validation.
- Authentication reliability.
- Regression coverage for the login feature.

### 📌 Cypress Assertions Used

```javascript
.should('be.visible')
.should('have.text')
cy.contains()
```

### 📊 Test Coverage

- ✅ Login with valid credentials
- ✅ Login with invalid password
- ✅ Login with invalid email
- ✅ User information validation
- ✅ Welcome message validation
- ✅ Error message validation
- ✅ UI visibility checks

---

**Objective:** Ensure the authentication feature remains stable, reliable, and resilient against invalid login attempts while providing consistent feedback to the user.
<img width="1896" height="1001" alt="Login Test  Successful Authentication  Passed" src="https://github.com/user-attachments/assets/9bbac596-defd-41c8-949c-6f2bf4f2c6f2" />


<p align="center">
<img width="1980" height="1280" alt="Form Submission _Status Passed" src="https://github.com/user-attachments/assets/fe7d164a-a68d-4bc9-a38e-ea886c0790a4" />
</p>


