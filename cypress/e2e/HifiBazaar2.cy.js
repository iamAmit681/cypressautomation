describe('HifiBazaar',()=>{

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
       cy.get(':nth-child(2) > .PRPU90KO_4IHPm37Vuvg > img').trigger('mouseover');
       cy.get(':nth-child(2) > .PRPU90KO_4IHPm37Vuvg > img').trigger('mouseover').click();
       cy.wait(3000);
       cy.get(':nth-child(28) > .shd1OkGU8xU2gj5u9cyR').scrollIntoView({duration:2000});
       cy.get(':nth-child(28) > .shd1OkGU8xU2gj5u9cyR').trigger('mouseover');

       cy.request('POST', 'https://d-pdidx.gcdev.live/el/api/v1/product/search',{"filter":{"filterSource":"category","searchKeywords":"","facets":[{"lastSelectedFilter":false,"keyName":"CATEGORY","buckets":[{"isSelected":true,"keyValue":"2YUYCHJ3YD"}]}]},
       "sortExpression":"RELEVANCE","startPageNo":1,"pageSize":44,"runCount":true,"searchEvent":""})
          
       .then((response)=>
       {            
        //   cy.log(JSON.stringify(response.body.products.data[28].redirectUrl))
                          let title = response.contains('productTitle')
                          title .each(($el,  index ,$list) =>
                               {
                                 if($el =='The Collection Snowboard: Oxygen')
                                {
                                 cy.wrap($el).should('be.visible');
                             //    cy.visit(`https://d-portal.gcdev.live/${$el}`)
                                }
                               })
                                

                                

        //   let productRedirectUrl = response.body.products.data[28].redirectUrl
         //  cy.visit(`https://d-portal.gcdev.live/${productRedirectUrl}`)
       //    cy.wait(4500);
      //   //  cy.get('.WArgk0tisYeafoZOzz38 > .MuiButtonBase-root').scrollIntoView({duration:1000});
      //     cy.xpath('(//*[contains(@class,"MuiButtonBase-root MuiButton-root")])[2] ').scrollIntoView({duration:1000});
      //      cy.wait(1000);
      //      cy.get('.WArgk0tisYeafoZOzz38 > .MuiButtonBase-root').click();
      //      cy.wait(3000);
      //      cy.get('.l_JA1kaOjJjPZf8trIsw > div > .r3CWjVbXJeGbe174Cgi7').scrollIntoView({duration:2000});
      //      cy.wait(2000);
      //      cy.xpath("//*[text()='Continue to Payment']").click();
      //      cy.wait(2000)
      //      cy.get(':nth-child(6) > .Utrjgl8ztxEul9hWAk_w > :nth-child(1) > .Dtcu8Dx04mndP6s4Ibi0 > .ifNYBztlNcY9KBFB9ACw > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView({duration:2000});
      //      cy.wait(2000);
      //      cy.get(':nth-child(6) > .Utrjgl8ztxEul9hWAk_w > :nth-child(1) > .Dtcu8Dx04mndP6s4Ibi0 > .ifNYBztlNcY9KBFB9ACw > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
       
      //     cy.request('GET','https://d-master.gcdev.live/ms/api/v1/config/system/ddo/MASTER_CAPTCHA')
      //     .then((response)=>
      //     {
      //        const masterCaptcha = Number(response.body[0].uId);
      //        cy.xpath('//*[@name="Captcha"]').type(masterCaptcha);
            
      //        cy.wait(2000);
      //        cy.get('.bN1ccQ5JwjnKtGr8r3ZR').click({force:true});
      //     })

          
       })

       })
       

       })
   })

   
   

  
       
   
 
