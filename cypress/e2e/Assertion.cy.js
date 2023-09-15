describe('Assertion tutorial',()=>
{
    it('implicit assertion',()=>
    {
        cy.visit("https://www.hifibazaar.com/")
        .should('incude','hifi')
        .and('eq','hifibazaar')
        .and('contain','bazaar')
    })
})