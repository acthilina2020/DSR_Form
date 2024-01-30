/// <reference types="cypress" />
import submitPage from "../../Pages/submitPage";

describe(
  "Verify user can submit the form successfully",
  {
    retries: {
      runMode: 2,
      openMode: 2,
    },
  },
  () => {
    const base_url: string = Cypress.env("CYPRESS_BASE_URL");

    beforeEach(() => {
      cy.visit(`${base_url}/web-ui-playground`, { retryOnNetworkFailure: true });
    });

    it("Verify successful form submision with the values : male as gender and QA Engineer for the vacancy field", () => {
      const stub = cy.stub();
      cy.on("window:alert", stub);
      submitPage.firstNameInputField().type("John");
      submitPage.lastNameInputField().type("Smith");
      submitPage.emailInputField().type("john@gmail.com");
      submitPage.phoneInputField().type("6767677898");
      submitPage.genderMaleRadioButton().click();
      cy.UploadCV();
      submitPage.processingDataCheckBox().click();
      submitPage.clickSubmitButton();
      cy.then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          '{"FirstName":"John","LastName":"Smith","Email":"john@gmail.com","PhoneNumber":"6767677898","Gender":"Male","Vacancy":"QA Engineer","CV":{},"Agreement":true}'
        );
      });
    });

    it("Verify successful form submision with the value female", () => {
      const stub = cy.stub();
      cy.on("window:alert", stub);
      submitPage.firstNameInputField().type("Jane");
      submitPage.lastNameInputField().type("Smith");
      submitPage.emailInputField().type("jane@gmail.com");
      submitPage.phoneInputField().type("6476765343");
      submitPage.genderFemaleRadioButton().click();
      cy.UploadCV();
      submitPage.processingDataCheckBox().click();
      submitPage.clickSubmitButton();
      cy.then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          '{"FirstName":"Jane","LastName":"Smith","Email":"jane@gmail.com","PhoneNumber":"6476765343","Gender":"Female","Vacancy":"QA Engineer","CV":{},"Agreement":true}'
        );
      });
    });

    it("Verify successful form submision with the value QAA Engineer for the vacancy field", () => {
      const stub = cy.stub();
      cy.on("window:alert", stub);
      submitPage.firstNameInputField().type("Matt");
      submitPage.lastNameInputField().type("Taylor");
      submitPage.emailInputField().type("matt@gmail.com");
      submitPage.phoneInputField().type("6567679876");
      submitPage.genderMaleRadioButton().click();
      submitPage.vacancyDropDownList().select("QAA Engineer");
      cy.UploadCV();
      submitPage.processingDataCheckBox().click();
      submitPage.clickSubmitButton();
      cy.then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          '{"FirstName":"Matt","LastName":"Taylor","Email":"matt@gmail.com","PhoneNumber":"6567679876","Gender":"Male","Vacancy":"QAA Engineer","CV":{},"Agreement":true}'
        );
      });
    });

    it("Verify successful form submision with the value Business Analyst for the vacancy field", () => {
      const stub = cy.stub();
      cy.on("window:alert", stub);
      submitPage.firstNameInputField().type("Jack");
      submitPage.lastNameInputField().type("Warn");
      submitPage.emailInputField().type("jack@gmail.com");
      submitPage.phoneInputField().type("8767678789");
      submitPage.genderMaleRadioButton().click();
      submitPage.vacancyDropDownList().select("Business Analyst");
      cy.UploadCV();
      submitPage.processingDataCheckBox().click();
      submitPage.clickSubmitButton();
      cy.then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          '{"FirstName":"Jack","LastName":"Warn","Email":"jack@gmail.com","PhoneNumber":"8767678789","Gender":"Male","Vacancy":"Business Analyst","CV":{},"Agreement":true}'
        );
      });
    });
  }
);
