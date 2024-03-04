const actions = require('../support/login/actions')

describe('login', () => {
  it('Login with incorrect password', () => {
    cy.visit('https://pendulumlife.com/account/login')
    actions.createLogin('raian.damaceno@gmail.com', 'teste')
    actions.loginErrorMessage()
  })

  it('Login with non-existing email', () => {
    cy.visit('https://pendulumlife.com/account/login')
    actions.createLogin('raian.dama2ceno@gmail.com', 'teste')
    actions.loginErrorMessage()
  })

  it('Login with Success', () => {
    cy.visit('https://pendulumlife.com/account/login')
    actions.createLogin('raian.damaceno@gmail.com', 'breakdance01')
    cy.contains('Welcome back, Raian')
  })
})