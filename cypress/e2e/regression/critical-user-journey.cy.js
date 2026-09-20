describe('Critical User Journey', () => {

  it('Verify that a user can complete the critical application journey', () => {
    cy.visit('/')

    cy.verifyPageTitle('Kitchen Sink')

    cy.contains('Commands').should('be.visible')
    cy.contains('Utilities').should('be.visible')
    cy.contains('Cypress API').should('be.visible')
  })

})