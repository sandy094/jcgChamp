describe('My First Test',()=>{
    const user = 'testsandy'
    const pwd = 'testsandy'
    it('Frist login',()=>{
        cy.visit('/')
        // 免責說明
        cy.get('.flat__btn__accent').click()

        cy.get('.footer-menu > :nth-child(4)').contains('會員').click()

        cy.url().should('include','/auth?from=https%3A%2F%2Fdemo.champ.land%2Fmember')

        cy.login(user,pwd)
        cy.url().should('include','/member')
    })
    it('dailymession',()=>{
        cy.getCookie('showWizard')
          .then((val) =>{
            if(val){
              cy.get(':nth-child(1) > .front > img').click()
            }
          })
        

    })
})