class LoginPage {
  visit() {
    cy.visit('/')
  }

  getPageTitle() {
    return cy.get('h1')
  }
}

export default LoginPage