import LoginPage from '../../pages/LoginPage'

describe('Application Smoke Tests', () => {
  const loginPage = new LoginPage()

  it('Verify that the application loads successfully', () => {
    loginPage.visit()

    cy.verifyPageTitle('Kitchen Sink')
  })
})

