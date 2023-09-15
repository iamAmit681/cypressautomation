describe('Api Service',()=>
{
  it('GetService',()=>
  {
     const request = {
                      tourist_name : "mike",
                      tourist_email:"john12345678@gmail.com",
                      tourist_location:"paris"
                     }

       cy.request('GET','http://restapi.adequateshop.com/api/Tourist')
                 .its('status')
                 .should('equal',200);              

     })
    
     it('Post Method',()=>
     {
        cy.request(
         {
            method:'POST',
            url :'http://restapi.adequateshop.com/api/Tourist',
            body:{
                tourist_name : "Amit",
                tourist_email:"Amit5688@gmail.com",
                tourist_location:"india"
                 }
                })

                 .then( (respnse)=>
                 {
                    expect(respnse.status).to.eq(201);
                    expect(respnse.body.tourist_name).to.eq("Amit");
                    expect(respnse.body.tourist_email).to.eq("Amit5688@gmail.com");
                    expect(respnse.body.tourist_location).to.eq("india");
                 })



         

                })

     })


  
    
