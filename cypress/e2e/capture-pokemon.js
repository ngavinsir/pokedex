describe("capture pokemon", () => {
  Cypress._.times(10, () => {
    // 10 times to make sure that the test has covered the succesfully captured pokemon case
    it("should be able to capture pokemon", () => {
      cy.visit("/")
      cy.clearLocalStorage()

      cy.findByText(/bulbasaur/i).click()

      cy.findByText(/capture/i).click()

      cy.findByRole("dialog").then(dialog => {
        if (dialog.find("button:contains('Dismiss')").length > 0) {
          cy.findByText(/dismiss/i).click()
        } else {
          cy.findByRole("textbox").type("thomas-test-pokemon")
          cy.findByRole("button").contains(/ok/i).click()

          cy.findByText(/my bag/i).click()
          cy.findByText("thomas-test-pokemon").should("exist")
        }
      })
    })
  })
})
