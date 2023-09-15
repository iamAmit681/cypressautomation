import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('MouseAction',()=>{

    it('Mousehover',()=>
    {
      cy.visit("https://d-portal.gcdev.live/")
      cy.wait(3000);
      cy.get('.j9MNTrmggEUZNPW7sRxl').click();
      cy.wait(2000);
      cy.get('input[name="login"]').type('8407803548');
      cy.get('button[tabindex="0"]').click();
      cy.wait(2000);
      cy.get('input[name="otp"]').type('000000').type('{enter}');
      cy.get(':nth-child(2) > .PRPU90KO_4IHPm37Vuvg > img').trigger('mouseover');
      cy.get(':nth-child(2) > .PRPU90KO_4IHPm37Vuvg > img').trigger('mouseover').click();
      cy.wait(3000);
      cy.get(':nth-child(28) > .Vt6alCj7Z1TXoaySkl8q > .zhYcy1K3kegTk6uxVOLL').scrollIntoView({duration:2000});
      cy.get(':nth-child(28) > .Vt6alCj7Z1TXoaySkl8q > .zhYcy1K3kegTk6uxVOLL').click();




    })

    it.skip('doubleclick',()=>
    {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");
        cy.frameLoaded('#iframeResult');
      //  cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
      cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick();
      cy.iframe('#iframeResult').find('#demo').should('have.text','Hello World');
        
    })

    it.skip('drag & drop',()=>
    {

    })
    
})