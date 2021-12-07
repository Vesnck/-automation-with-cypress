/// <reference types = "Cypress" />
///node_modules/.bin/cypress open
describe("My fifth test suite", function() {
it("My fifth test case", function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //handle tables
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text = $el.text()
        if(text.includes('Python')){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
            /*cy.get('tr td:nth-child(3)').eq(index).then(function(price){
                    const priceText = price.text()
                   expect(priceText).to.equal('25')
                })*/
        }
    })
  
})

})