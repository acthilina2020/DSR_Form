/// <reference types="cypress" />
import submitPage from "../../Pages/submitPage";
import { faker } from "@faker-js/faker";

describe("Verify the form can not be submitted with no values",
{
  retries: {
    runMode: 2,
    openMode: 2,
  },
},
() => {
  const base_url: string = Cypress.env('CYPRESS_BASE_URL');

  beforeEach(() => {
    cy.visit(`${base_url}/web-ui-playground`, { retryOnNetworkFailure: true });
  });

  it("Verify all validation errors", () => {
    submitPage.clickSubmitButton();
    expect(submitPage.isDisplayed()).to.be.true;
    submitPage.errorValidFirstNameIsRequired().should("have.text", "Valid first name is required.");
    submitPage.errorValidLastNameIsRequired().should("have.text", "Valid last name is required.");
    submitPage.errorValidEmailIsRequired().should("have.text", "Valid email is required.");
    submitPage.errorValidPhoneNumberIsRequired().should("have.text", "Valid phone number is required.");
    submitPage.errorChooseYourGender().should("have.text", "Choose your gender.");
    submitPage.errorAttachYourCvFile().should("have.text", "Attach your CV file.");
    submitPage.errorProcessingPersonalData().should("have.text", "You must agree to the processing of personal data.");
  });

  it("Verify unsuccessful form submision with valid data with agreeing to process data checkbox unchecked ", () => {
    submitPage.firstNameInputField().type(faker.person.firstName());
    submitPage.lastNameInputField().type(faker.person.lastName());
    submitPage.emailInputField().type(faker.internet.email());
    submitPage.phoneInputField().type("6767677898");
    submitPage.genderMaleRadioButton().click();
    cy.UploadCV();
    submitPage.clickSubmitButton();
    submitPage.errorUncheckedProcessingData().should("have.text", "You must agree to the processing of personal data.");
    submitPage.submitButton().should("be.visible");
  });

  it("Verify error for invalid email input", () => {
    submitPage.firstNameInputField().type(faker.person.firstName());
    submitPage.lastNameInputField().type(faker.person.lastName());
    submitPage.emailInputField().type("invalidEmailInput");
    submitPage.phoneInputField().type("6767677898");
    submitPage.genderMaleRadioButton().click();
    cy.UploadCV();
    submitPage.processingDataCheckBox().click();
    submitPage.clickSubmitButton();
    submitPage.errorInvalidEmail().should("have.text", "Valid email is required.");
    submitPage.submitButton().should("be.visible");
  });

  it("Verify error for invalid phone number input", () => {
    submitPage.firstNameInputField().type(faker.person.firstName());
    submitPage.lastNameInputField().type(faker.person.lastName());
    submitPage.emailInputField().type(faker.internet.email());
    submitPage.phoneInputField().type("invalidPhoneNumber");
    submitPage.genderMaleRadioButton().click();
    cy.UploadCV();
    submitPage.processingDataCheckBox().click();
    submitPage.clickSubmitButton();
    submitPage.errorInvalidPhoneNumber().should("have.text", "Valid phone number is required.");
    submitPage.submitButton().should("be.visible");
  });
});
