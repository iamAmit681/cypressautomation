describe('Alert Handle',()=>
{
 it('Simple alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get('button[onclick="jsAlert()"]').click();

    cy.on('window:alert',(t)=> {

        expect(t).to.contains("I am a JS Alert")

    })
    cy.get('#result').should('have.text','You successfully clicked an alert')

  

 })
 it('Confirm alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm',(t)=> {

        expect(t).to.contains("I am a Confirm Alert");

    })

   // cy.on('window:confirm',()=>false)
    cy.get('#result').should('have.text','You clicked: Ok')

  

 })
 it('prompt alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.window().then((win)=>
     {
        cy.stub(win ,'prompt').returns('welcome')
    })

    cy.get('button[onclick="jsPrompt()"]').click();

    })

   // cy.on('window:confirm',()=>false)
   // cy.get('#result').should('have.text','You clicked: Ok')

   it.only('Authentication alert',()=>{
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

   
    })

  

 })

