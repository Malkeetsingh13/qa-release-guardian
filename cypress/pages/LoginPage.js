class LoginPage {
  visit() {
    cy.visit('https://example.cypress.io')
  }

  getPageTitle() {
    return cy.get('h1')
  }
}

export default LoginPage