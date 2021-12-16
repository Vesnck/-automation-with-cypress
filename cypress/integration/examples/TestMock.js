describe("Mock response testing", function()
{
    it("Response mocking", function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept(
            {
                method: 'GET',
                url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java" ,
                    "isbn": "RSU" ,
                    "aisle": "2301"

                }]
            }).as('bookRetrieve')
        cy.get("button[class = 'btn btn-primary']").click()
        cy.wait('@bookRetrieve').should(({request,response})=>{
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

    })  

}
)