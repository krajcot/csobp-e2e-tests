// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('confirmRecaptcha', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    // cy.wait(500);
    // cy.get('[formcontrolname="recaptcha"] *> iframe')
    //   .then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body)
    //       .find('.recaptcha-checkbox-border')
    //       .should('be.visible')
    //       .click();
    //   });

    cy.get('iframe')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            .should('be.visible')
            .click();

            // cy.window().then(win => {
            //     win.document
            //       .querySelector("iframe[src*='recaptcha']")
            //       .contentDocument.getElementById("recaptcha-token")
            //       .click();
            //   });
  });
