describe('My First Test',()=>{
    const user = 'sandyqa'
    const pwd = 'qasandy'
    it('Frist login',()=>{
        cy.visit('/')
        // 免責說明
        cy.get('.flat__btn__accent').click()

        cy.get('.footer-menu > :nth-child(4)').contains('會員').click()

        cy.url().should('include','/auth?from=https%3A%2F%2Fdemo.champ.land%2Fmember')
        // auth?from=https%3A%2F%2Fchamp.land%2Fmember
        cy.login(user,pwd)
        cy.url().should('include','/member')
    })
    it('dailymession',()=>{
      cy.get('.daily-gift-content').then(($daily)=>{
        if($daily!=0){
          cy.log('1')
        }else{
          cy.log('2')
        }
      })
        

    })

    // it('daily',function(){
    //   const whenFailed = function(){
    //     this.skip()
    //   }
    //   const whenSucceded = function(){
    //     cy.get(':nth-child(1) > .front > img').should('be.visible')
    //   }
    //   queryFailed(whenFailed, whenSucceded);

      
    // }
    // )
    
})