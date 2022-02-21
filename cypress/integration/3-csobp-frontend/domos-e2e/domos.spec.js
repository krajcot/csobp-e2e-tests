describe('domos', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:4200/')
    })
  
    // it('Application title should equal to Domos', () => {
    //   cy.title().should('eq', 'Domos')
    // })

    it('run Domos', () => {
        cy.title().should('eq', 'Domos')
        cy.get('.property button').contains('Dom').click()
        cy.get('csobp-checkbox[formcontrolname="insProperty"]').click()
        cy.get('csobp-checkbox[formcontrolname="insHouse"]').click()
        cy.get('input[formcontrolname="residentialArea"]').type(115)
        cy.wait(500)
        cy.get('button').contains('Pokračovať').first().click()
        cy.get('input[formcontrolname="insurPlace"]').type(91922)
        cy.get('csobp-custom-select[formcontrolname="propertyAge"]').click()
        cy.get('csobp-custom-select[formcontrolname="propertyAge"] .custom-select-options > ul > :nth-child(1)').click()
        cy.get('csobp-custom-select[formcontrolname="occupancyProperty"]').click()
        cy.get('csobp-custom-select[formcontrolname="occupancyProperty"] .custom-select-options > ul > :nth-child(1)').click()
        cy.wait(500)
        cy.get('button').contains('Pokračovať').first().click()
      })
})