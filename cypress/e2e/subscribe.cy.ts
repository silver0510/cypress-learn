describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Allows users to subscribe to the email list", () => {
        var email = "tom@aol.com"
        cy.getByData("email-input").type(email)
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains(email)
    })

    it("Does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("Does NOT allow already subscribed email addresses", () => {
        var email = "john@example.com"
        cy.getByData("email-input").type(email)
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains(email)
    })

})