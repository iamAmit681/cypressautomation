describe('HifiBazaar',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
    
        return false
      })

    it.only('HifiBazaar',()=>
    {
        cy.visit('https://d-portal.gcdev.live/');
        cy.wait(4000);
        cy.get('.j9MNTrmggEUZNPW7sRxl').click();
        cy.wait(2000);
        cy.fixture('loginDetail').then( (data)=>
        {
            cy.get('input[name="login"]').type(data.Mobile_No);
        cy.get('button[tabindex="0"]').click();
        cy.wait(2000);
        cy.get('input[name="otp"]').type(data.Otp).type('{enter}');
        cy.get(':nth-child(9) > .PRPU90KO_4IHPm37Vuvg > img').trigger('mouseover');
        cy.get(':nth-child(9) > .PRPU90KO_4IHPm37Vuvg > img').trigger('mouseover').click();
        cy.wait(3000);
        cy.get(':nth-child(28) > .shd1OkGU8xU2gj5u9cyR').scrollIntoView({duration:2000});
        cy.get(':nth-child(28) > .shd1OkGU8xU2gj5u9cyR').trigger('mouseover');

        cy.request('POST', 'https://d-pdidx.gcdev.live/el/api/v1/product/search',{"filter":{"filterSource":"category","searchKeywords":"","facets":[{"lastSelectedFilter":false,"keyName":"CATEGORY","buckets":[{"isSelected":true,"keyValue":"2YUYCHJ3YD"}]}]},
        "sortExpression":"RELEVANCE","startPageNo":1,"pageSize":44,"runCount":true,"searchEvent":""})
           
        .then((response)=>
        {            
         //   cy.log(JSON.stringify(response.body.products.data[26].redirectUrl))
            let productRedirectUrl = response.body.products.data[26].redirectUrl
            cy.visit(`https://d-portal.gcdev.live/${productRedirectUrl}`)
            cy.wait(10000);
         //  cy.get('.WArgk0tisYeafoZOzz38 > .MuiButtonBase-root').scrollIntoView({duration:1000});
            cy.xpath('(//*[contains(@class,"MuiButtonBase-root MuiButton-root")])[2] ').scrollIntoView({duration:2000});
            cy.wait(1000);
            cy.get('.WArgk0tisYeafoZOzz38 > .MuiButtonBase-root').click();
            cy.wait(3000);
            cy.get('.l_JA1kaOjJjPZf8trIsw > div > .r3CWjVbXJeGbe174Cgi7').scrollIntoView({duration:2000});
            cy.wait(2000);
            cy.xpath("//*[text()='Continue to Payment']").click();
            cy.wait(2000)
            cy.get(':nth-child(6) > .Utrjgl8ztxEul9hWAk_w > :nth-child(1) > .Dtcu8Dx04mndP6s4Ibi0 > .ifNYBztlNcY9KBFB9ACw > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView({duration:2000});
            cy.wait(2000);
            cy.get(':nth-child(6) > .Utrjgl8ztxEul9hWAk_w > :nth-child(1) > .Dtcu8Dx04mndP6s4Ibi0 > .ifNYBztlNcY9KBFB9ACw > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click();

              cy.xpath('//*[@name="Captcha"]').type(data.Master_captcha);
             
              cy.wait(2000);
              cy.get('.bN1ccQ5JwjnKtGr8r3ZR').click({force:true});
              cy.wait(2000);
              cy.get(':nth-child(2) > .alert-button-inner').click();
              cy.get('.zuGf01Ty0UPeW89BXfQs > :nth-child(1)').should('have.text','Great ! Your order has been placed successfully !');
              cy.wait(2000);
              cy.screenshot("Order Success");
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




        //   })

           
        })

        })
        

        })
    })

    
    

   
        
    
  
