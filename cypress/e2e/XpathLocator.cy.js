describe('Xpath locator',()=>
{
    it('find total product',()=>
    {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
        cy.xpath("//ul[@class='product_list grid row']//li").should('have.length',22)
    })
})