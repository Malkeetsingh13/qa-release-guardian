const { defineConfig } = require('cypress')

module.exports = defineConfig({
  expose: {
    apiUrl: 'https://jsonplaceholder.typicode.com'
  },

  video: true,

  e2e: {
    baseUrl: 'https://example.cypress.io',

    setupNodeEvents(on, config) {
      return config
    }
  }
})