describe('Tabhandling',()=>
{
    it('Approach1',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(2000);
        cy.go('back');
    })
    it('Approach2',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(2000);
        cy.go('back');
    })
})