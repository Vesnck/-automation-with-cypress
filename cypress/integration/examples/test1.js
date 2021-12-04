/// <reference types = "Cypress" />
///node_modules/.bin/cypress open
describe("My first test suite", function() {
it("My first test case", function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(1000)
    cy.get('.product:visible').should('have.length',4)
    //parent-child chainings
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)

    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')){
            $el.find('button').click()
        }
    } )
    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')
})
it("My second test case", function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    })

})

})