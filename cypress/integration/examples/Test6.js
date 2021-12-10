/// <reference types = "Cypress" />
///node_modules/.bin/cypress open
describe("My sixth test suite", function() {
it("My sixth test case", function(){
    cy.visit(Cypress.env('url')+'/AutomationPractice/')
    //handle mouse hover elements and invisible mode
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
    cy.contains('Reload').click({force : true})
    
})

})