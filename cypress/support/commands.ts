import submitPage from "../e2e/Pages/submitPage";

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      UploadCV(): void;
    }
  }
}

Cypress.Commands.add("UploadCV", () => {
  cy.fixture("Resume_test_File.pdf").as("myFixture");
  submitPage.chooseFileCv().selectFile("@myFixture", { force: true });
});
