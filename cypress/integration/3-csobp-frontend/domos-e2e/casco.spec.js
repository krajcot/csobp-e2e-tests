describe('ins-events', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://ins-events.netlify.app/')
    })
  
    it('run INS-EVENTS', () => {
        cy.title().should('eq', 'NAHLASOVANIE POISTNÝCH UDALOSTÍ')
        cy.get('.option-wrapper').first().click()

        cy.wait(1000);
        cy.get('.option-wrapper').first().click()

        cy.wait(1000);
        cy.get('.option-wrapper').first().click()

        cy.get('#rcOrContract').type(7001246785)
        cy.get('input[formcontrolname="street"]').type('Einsteinova')
        cy.get('input[formcontrolname="number"]').type('33')
        cy.get('input[formcontrolname="zip"]').type('85101')
        cy.wait(2000);
        cy.get('[formcontrolname="city"] input').type('Bratislava', {force: true})
        cy.get('[formcontrolname="datePart"] > input').first().type('21.10.2021').blur();
        cy.get('[formcontrolname="timePart"] .col-time-input > input[placeholder="HH"]').first().type('05', {force: true})
        cy.get('[formcontrolname="timePart"] .col-time-input > input[placeholder="MM"]').first().type('00', {force: true})

        cy.get('[formcontrolname="damageEventDescription"] textarea').type(`Lorem ipsum dolor sit amet consectetur ...`);

        cy.get('[formcontrolname="damageMyVehicle"] > .noselect').click();
        // tu pokracujeme


        cy.pause();

        // Pokracovat
        cy.get('button').contains('Pokračovať').click();

        /*
        cy.wait(2000);

        cy.get('[formcontrolname="firstName"]').type('Tomáš')
        cy.get('[formcontrolname="lastName"]').type('Stanovič')

        cy.get('[formcontrolname="personalNumber"]').type('800101/9999')

        cy.get('[formcontrolname="email"]').type('tomas.stanovic@softec.sk', {force: true})
        cy.get('[formcontrolname="emailForComparison"]').type('tomas.stanovic@softec.sk', {force: true})

        cy.get('[formcontrolname="telephone"] input').type('10927806')

        cy.get('[formcontrolname="iban"] input').type('SK3409000000001111111111').blur()

        // cy.pause();

        cy.get('[formcontrolname="corAddressSameAsPlaceOfInsuredEvent"] input').click({force: true});

        // Pokracovat
        cy.get('button').contains('Pokračovať').click();
        */
        // cy.pause();
        cy.confirmRecaptcha();
        // cy.get('.recaptcha-checkbox').click();

        cy.wait(2000);

        // Finish
        cy.get('.button-row button').eq(1).click({force: true});

        cy.wait(2000);

        cy.get('csobp-thanks').should('be.visible');
      })
})