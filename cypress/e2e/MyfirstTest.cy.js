describe('My First Test',()=>
    {
        it('positive test',()=>
        {
            cy.visit("https://d-portal.gcdev.live/")
            cy.title().should('eq','hifibazaar')
           
            
        })
       
    }
)