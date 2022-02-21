describe('My First Test', () => {
  const user = 'sandyqa'
  const pwd = 'qasandy'
  beforeEach('Frist login', () => {
    cy.visit('/')
    // 免責說明
    cy.get('.flat__btn__accent').click()

    cy.get('.footer-menu > :nth-child(4)').contains('會員').click()

    cy.url().should('include', '/auth?from=https%3A%2F%2Fchamp.land%2Fmember')
    cy.login(user, pwd)
    cy.url().should('include', '/member')
  })

  it('dailymission', () => {
    cy.document().then(($document) => {
      const documentResult = $document.querySelectorAll('.daily-gift-content')
      // cy.log(documentResult.length)
      if (documentResult.length) {
        cy.log('yes')
        cy.get(':nth-child(1) > .front > img').click()
        cy.get('.button-receive-block > .button').click()

        cy.get('.footer-menu > :nth-child(3)').click()
          .url().should('include','/wallet')

        cy.get(':nth-child(6) > a > img').click()
      }
      else {
        cy.log('no')

        cy.get('.footer-menu > :nth-child(3)').click()
          .url().should('include','/wallet')
          
        cy.get(':nth-child(6) > a > img').click()
      }

    })
  })



})