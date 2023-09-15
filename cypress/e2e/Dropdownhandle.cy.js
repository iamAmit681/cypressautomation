/// <reference types ="Cypress"/>
describe('Dropdownhandle',()=>
{
    it.skip('Select Dropdow',()=>
    {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
    })
   
    it.skip('Not Select tag dropdown',()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.wait(5000)
        cy.get('select2-search__field').type('China').type('{enter}')
      //  cy.get('#select2-billing_country-container').should('have.value','China')

    })

    it('static dropdown',()=>
    {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        
        cy.get('.suggestion-title').contains('Delhi university').click()
        
    })

    it.skip('dyanamic dropdown',()=>
    {
        cy.visit("https://www.google.com/")
        cy.xpath('//*[@class="gLFyf"]').type('cypress tutorial')
        cy.wait(3000)
        cy.xpath('//*[@class="wM6W7d"]/span').each( ($el ,index ,$List)=>{
            if ($el.text()=='cypress tutorial pdf')
            {
                cy.wrap($el).click()
            }


        })
    })

})