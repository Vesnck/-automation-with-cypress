/// <reference types = "Cypress" />
///node_modules/.bin/cypress open
describe("My second test suite", function() {
it("My second test case", function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
    cy.contains('Reload').click({force : true})
    
})

})