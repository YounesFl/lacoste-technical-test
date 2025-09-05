Feature: Lacoste User Registration
  As a potential customer
  I want to create an account on Lacoste website
  So that I can save my preferences and track my orders

  Background:
    Given I am on the Lacoste website
    When I click on "My Account"

  Scenario: Complete user registration with all fields
    Given I enter a new email address "test@example.com"
    And I am redirected to the registration form
    When I fill in all the registration fields:
      | Field                    | Value                |
      | Email                    | test@example.com     |
      | Password                 | SecurePass123!       |
      | Password confirmation    | SecurePass123!       |
      | Civility                 | Mrs                  |
      | First name               | Marie                |
      | Last name                | Dupont               |
      | Mobile phone             | +33612345678         |
      | Date of birth            | 15/03/1990           |
    And I check "Remember me"
    And I check "I accept to receive offers and benefits"
    And I check "I accept terms and conditions and privacy policy"
    And I submit the registration form
    Then I should see a confirmation message
    And I should receive a confirmation email

  Scenario: Registration form validation for required fields
    Given I am on the registration form
    When I submit the form without filling required fields
    Then I should see validation errors for:
      | Required field           |
      | Email                    |
      | Password                 |
      | Password confirmation    |
      | Civility                 |
      | First name               |
      | Last name                |
      | Terms and conditions     |
    And the form should not be submitted

  Scenario: Registration attempt with existing email
    Given I enter an existing email address "existing@lacoste.com"
    When I try to proceed with registration
    Then I should see an error message "This email address is already registered"
    And I should see a "Sign in with this account" link
    When I click "Sign in with this account"
    Then I should be redirected to the login form
    And the email field should be pre-filled with "existing@lacoste.com"

  Scenario: Password validation rules
    Given I am on the registration form
    When I enter "123" as password
    Then I should see "Password must be at least 8 characters long"
    When I enter "password" as password
    Then I should see "Password must contain uppercase, lowercase and numbers"
    When I enter "Password123" as password
    And I enter "Password456" as confirmation
    Then I should see "Passwords do not match"

  Scenario: Data processing information display
    Given I am on the registration form
    Then I should see the data processing card with text:
      """
      Lacoste is responsible for processing your personal data
      """
    And I should see the optional checkbox "Accept to receive offers and benefits"
    And I should see the required checkbox "Accept terms and conditions and privacy policy"
    And the required checkbox should be marked as mandatory