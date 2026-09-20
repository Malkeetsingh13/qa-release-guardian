describe('Users API Tests', () => {

const apiUrl = Cypress.expose('apiUrl')

  it('Verify that users can be retrieved successfully', () => {
    cy.apiRequest('GET', `${apiUrl}/users`)
      .then((response) => {

        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)

      })
  })

  it('Verify that a user can be created successfully', () => {
    const newUser = {
      name: 'QA Release Guardian',
      username: 'qa_guardian',
      email: 'qa@releaseguardian.com'
    }

    cy.apiRequest('POST', `${apiUrl}/users`, newUser)
      .then((response) => {

        expect(response.status).to.equal(201)
        expect(response.body).to.have.property('name', newUser.name)
        expect(response.body).to.have.property('username', newUser.username)
        expect(response.body).to.have.property('email', newUser.email)

      })
  })

})