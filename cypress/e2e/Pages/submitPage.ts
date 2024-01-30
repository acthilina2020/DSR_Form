class submitPage {
  
  //Page constants
  base_url: string = Cypress.env("CYPRESS_BASE_URL");
  pathname = `/web-ui-playground/`;

  //Page selectors
  firstNameInputField() {
    return cy.get(`input[type='text'][name='FirstName'][id='1']`).first();
  }
  lastNameInputField() {
    return cy.get(`input[type='text'][name='LastName'][id='2']`).first();
  }
  emailInputField() {
    return cy.get(`input[type='text'][name='Email'][id='3']`).first();
  }
  phoneInputField() {
    return cy.get(`input[type='tel'][name='PhoneNumber'][id='4']`).first();
  }
  genderMaleRadioButton() {
    return cy.get(`input[type='radio'][name='Gender'][value='Male']`).first();
  }
  genderFemaleRadioButton() {
    return cy.get(`input[type='radio'][name='Gender'][value='Female']`).first();
  }
  vacancyDropDownList() {
    return cy.get(`#root > form > select[name='Vacancy']`).first();
  }
  chooseFileCv() {
    return cy.get(`input[type='file'][name='myfile'][id='myfile']`).first();
  }
  processingDataCheckBox() {
    return cy.get(`input[type='checkbox'][name='Agreement'][id='5']`).first();
  }
  submitButton() {
    return cy.get(`input[type='submit'][name='submitbutton'][id='99']`).first();
  }
  errorValidFirstNameIsRequired() {
    return cy.get(`#root > form > p:nth-child(3)`).first();
  }
  errorValidLastNameIsRequired() {
    return cy.get(`#root > form > p:nth-child(6)`).first();
  }
  errorValidEmailIsRequired() {
    return cy.get(`#root > form > p:nth-child(9)`).first();
  }
  errorInvalidEmail() {
    return cy.get(`#root > form > p`).first();
  }
  errorValidPhoneNumberIsRequired() {
    return cy.get(`#root > form > p:nth-child(12)`).first();
  }
  errorInvalidPhoneNumber() {
    return cy.get(`#root > form > p`).first();
  }
  errorChooseYourGender() {
    return cy.get(`#root > form > p:nth-child(16)`).first();
  }
  errorAttachYourCvFile() {
    return cy.get(`#root > form > p:nth-child(21)`).first();
  }
  errorProcessingPersonalData() {
    return cy.get(`#root > form > p:nth-of-type(7)`).first();
  }
  errorUncheckedProcessingData() {
    return cy.get(`#root > form > p`).first();
  }

  //Page functions
  clickSubmitButton() {
    this.submitButton().click();
  }

  isDisplayed() {
    (this.submitButton(),
    this.errorValidFirstNameIsRequired(),
    this.errorValidLastNameIsRequired(),
    this.errorValidEmailIsRequired(),
    this.errorValidPhoneNumberIsRequired(),
    this.errorChooseYourGender(),
    this.errorAttachYourCvFile(),
    this.errorProcessingPersonalData(),
    this.submitButton()).should("be.visible");

    cy.location().should((loc) => {
      expect(loc.origin).to.eq(this.base_url);
      expect(loc.pathname).to.eq(this.pathname);
    });

    return true;
  }
}
export default new submitPage();
