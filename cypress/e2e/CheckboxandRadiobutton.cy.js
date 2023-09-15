describe('Checkbox&Radio button',()=>
{
    it('Radio button check',()=>
    {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.xpath('//*[@id="male"]').check().should('be.checked')
        cy.xpath('//*[@id="female"]').should('not.be.checked')
    })
    it('Radio button check',()=>
    {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.xpath('//*[@type="checkbox"]').check().should('be.checked')
        
    })
})