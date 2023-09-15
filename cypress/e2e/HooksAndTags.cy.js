//Before
//After
//BeforeEach
//AfterEach


describe('Hooks&Tags',()=>
{

    before('Launch App',()=>
    {
        cy.log('****launching App*****')
    })

    after('Close app',()=>
        {
            cy.log('******Close App*****')
        })

        beforeEach('login',()=>
        {
            cy.log('*****login******')
        })

        afterEach('logout',()=>
        {
            cy.log('******logout*****')
        })
    it('Search',()=>
    {
      cy.log('*******Seraching********')
    })

    it('Advanced Search',()=>
    {
        cy.log('*******Advanced Seraching********')  
    })


    it('Product Listing',()=>
    {
        cy.log('*******Product listing********') 
    })
})