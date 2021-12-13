/// <reference types = "Cypress" />
///node_modules/.bin/cypress open
describe("My second test suite", function() {
it("My second test case", function(){
    cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(1000)
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')){
            $el.find('button').click()
        }
    } )
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
})

})