import 'cypress-iframe'
describe('Iframehandle',()=>
{
  it('iframe',()=>
    {
      cy.visit("https://the-internet.herokuapp.com/iframe");
      cy.frameLoaded('#mce_0_ifr');
      cy.iframe('#mce_0_ifr').clear().type('welcome');
      
    })
})