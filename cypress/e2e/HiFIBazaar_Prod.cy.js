describe('HifiBazaar(Prod)',()=>{

  Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
  })

    it('HifiBazaar',()=>
    {
        cy.visit('https://www.hifibazaar.com/');
        cy.url().should('include','hifibazaar')
        cy.wait(6000);
        cy.get('.j9MNTrmggEUZNPW7sRxl').should('be.visible').click();
        cy.wait(2000);
        cy.fixture('LoginCred').then( (data)=>
        {
            cy.get('input[name="login"]').should('be.visible').type(data.Mobile_No);
        cy.get('button[tabindex="0"]').click();
        cy.wait(2000);
        cy.get('input[name="otp"]').should('be.visible').type(data.Otp).type('{enter}');
        cy.wait(2000);
        cy.xpath('//*[@placeholder="search for products, brands and more"]').should('be.visible')
        .type(data.Seller_Name,{force:true}).type('{enter}',{force:true})
        cy.wait(4000)
        cy.xpath('(//*[@class="shd1OkGU8xU2gj5u9cyR"])[16]').scrollIntoView({duration:2000});
        // Api Post Method called for RedirectURl ogf product.
          cy.request('POST','https://api.hifibazaar.com/el/api/v1/product/search',
          {"filter":{"filterSource":"search","searchKeywords":"hare krishna","facets":[]},"sortExpression":"RELEVANCE","startPageNo":1,"pageSize":44,"runCount":true,"searchEvent":""})
          .then((response)=>
          {
              let Productredirecturl=response.body.products.data[15].redirectUrl
              
              cy.visit(`https://www.hifibazaar.com/${Productredirecturl}`)
              cy.wait(10000);
  
       //       cy.get('.WArgk0tisYeafoZOzz38 > .MuiButtonBase-root').click().then(() => {
        cy.xpath('(//*[contains(@class,"MuiButtonBase-root MuiButton-root")])[2] ').scrollIntoView({duration:2000});
        cy.wait(1000);
        cy.get('.WArgk0tisYeafoZOzz38 > .MuiButtonBase-root').click();
        cy.wait(5000);
        cy.get('.gXVWons9LG_Iu3g6RJ5_').scrollIntoView({duration:2000})
  //      cy.get('.l_JA1kaOjJjPZf8trIsw > div > .r3CWjVbXJeGbe174Cgi7').scrollIntoView({duration:2000});
        cy.wait(2000);
        cy.xpath("//*[text()='Continue to Payment']").should('be.visible').click();
        cy.wait(2000)
        cy.get('.gXVWons9LG_Iu3g6RJ5_').scrollIntoView({duration:2000});
        cy.wait(2000);
        cy.get(':nth-child(6) > .Utrjgl8ztxEul9hWAk_w > :nth-child(1) > .Dtcu8Dx04mndP6s4Ibi0 > .ifNYBztlNcY9KBFB9ACw > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
        .click();

                cy.xpath('//*[@name="Captcha"]').type(data.Master_captcha);
             
                cy.wait(2000);
                cy.get('.bN1ccQ5JwjnKtGr8r3ZR').click({force:true});
                cy.wait(2000);
                cy.get(':nth-child(2) > .alert-button-inner').click();                   
                cy.wait(2000);                                                            
                // cy.get('.zuGf01Ty0UPeW89BXfQs > :nth-child(1)').should('have.text','Great ! Your order has been placed successfully !');
                // cy.wait(2000);
                cy.screenshot("Order Success on Prod");
                cy.wait(2000);
                cy.get('.W0ELL5ebs2WcyHEzSRln').trigger('mouseover',{force:true});
                cy.wait(2000);
                cy.xpath("//*[text()='Orders']").click({force:true});
                cy.wait(2000);
                cy.xpath('(//*[@class="zYdZumPEamIDoSntqMgd"])[1]').click();
                cy.wait(3000);
                cy.get('.gXVWons9LG_Iu3g6RJ5_').scrollIntoView({duration:2000});
                cy.wait(2000);
                cy.get('.mbxKWJRIzro7avG4HHSc').should('be.visible').click();
                cy.wait(2000);
                cy.get('#demo-simple-select').click();
                cy.wait(2000);
                cy.get('[data-value="739280F7B0"]').click();
                cy.wait(1000);
                cy.get('[data-value="739280F7B0"]').click();
                cy.wait(1000);
                cy.get('.gXVWons9LG_Iu3g6RJ5_').scrollIntoView({duration:2000});
                cy.wait(1000);
                cy.get('.PrivateSwitchBase-input').click({force:true});
                cy.wait(1000);
                cy.get('.xK7MH8kA5KRdTrCV_kuB').click({force:true});
  

        })
           
        })

          
        })  

     
         })
        


    