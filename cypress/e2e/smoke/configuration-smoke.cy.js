describe('Framework Configuration Smoke Tests', () => {
  it('Verify that test data can be loaded from fixtures', () => {
    cy.fixture('testData').then((data) => {
      expect(data.application.name).to.equal('QA Release Guardian')
      expect(data.application.environment).to.equal('QA')
    })
  })
})