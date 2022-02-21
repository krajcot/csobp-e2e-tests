describe('ins-events', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://ins-events.firebaseapp.com/')
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
        cy.wait(1000);
        cy.get('[formcontrolname="city"] input').type('Bratislava', {force: true})
        cy.get('[formcontrolname="datePart"] > input').first().type('21.02.2022').blur();
        cy.get('[formcontrolname="timePart"] .col-time-input > input[placeholder="HH"]').first().type('05', {force: true})
        cy.get('[formcontrolname="timePart"] .col-time-input > input[placeholder="MM"]').first().type('00', {force: true})

        cy.get('[formcontrolname="damageEventDescription"] textarea').type(`Lorem ipsum dolor sit amet consectetur ...`);

        cy.get('[formcontrolname="damageMyVehicle"] > .noselect').click();
        // tu pokracujeme
        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-label-content > :nth-child(2)').click()
        cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content > :nth-child(2)').click()
        cy.get('#Kapota > path').click()
        cy.get('div.ng-pristine > :nth-child(2) > .col-md-6 > .form-control').type('TT123XY')
        cy.get('div.ng-pristine > :nth-child(1) > :nth-child(2) > .col-md-4 > .form-control').type('Hlavná')
        cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > .col-md-2 > .form-control').type('550')
        cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > .col-md-6 > .form-control').type('919 22')
        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-label-content').click()
        
        cy.get('button').contains('Pokračovať').click();
        
        cy.get('#\\30 name').type('Jozef')
        cy.get('#\\30 lastName').type('Mrva')
        cy.get('#\\30 personalNumber').type('1111119999')
        cy.get('#\\30 email').type('a@a.sk')
        cy.get('#\\30 email-for-comparison').type('a@a.sk')
        cy.get('#\\30 tel > .form-control').type('49843756')
        cy.get('.col-md-4 > .form-control').type('Hlavná')
        cy.get('.col-md-2 > .form-control').type('550')
        cy.get('csobp-address.ng-star-inserted > .ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > .col-md-6 > .form-control').type('91922')
        
        cy.get('button').contains('Pokračovať').click();

        cy.confirmRecaptcha();

        cy.get('button').contains('Odoslať hlásenie').click();
        

        

        
        

    

        // cy.pause();

        // Pokracovat
        // cy.get('button').contains('Pokračovať').click();

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
        // cy.confirmRecaptcha();
        // cy.get('.recaptcha-checkbox').click();

        // cy.wait(2000);

        // Finish
        // cy.get('.button-row button').eq(1).click({force: true});

        // cy.wait(2000);

        // cy.get('csobp-thanks').should('be.visible');
      })
})