const locators = require('./locators')

export function createLogin(email, password) {
    cy.get(locators.FIELD_EMAIL)
        .should('be.visible')
        .type(email)

    cy.get(locators.FIELD_PASSWORD)
        .should('be.visible')
        .type(password)

    cy.get(locators.BUTTON_SUBMIT)
        .click()
}

export function loginErrorMessage() {
    cy.get('.errors')
        .contains(locators.STRING_LOGIN_MESSAGE)
}