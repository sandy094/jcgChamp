
Cypress.Commands.add('login', (user, pwd) => { 
    let uername;
    let password;
    cy.fixture('profile.json')
      .then((profile)=>{
        cy.get('.tabs > :nth-child(2)').click()
        cy.get(':nth-child(1) > .input')
          .type(user)
          .should('have.value',user)

        cy.get('form > :nth-child(2) > .input')
          .type(pwd)
          .should('have.value',pwd)

        cy.pause()

        cy.get('.flat__btn__accent').click()
      });
    

 })
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
