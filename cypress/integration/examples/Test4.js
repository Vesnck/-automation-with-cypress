/// <reference types = "Cypress" />

describe("My fourth test suite", function() {
it("My fourth test case", function(){
    cy.visit(Cypress.env('url')+'/AutomationPractice/')
    cy.get('#alertbtn').click()
    cy.get('input[value="Confirm"').click()
    cy.on('window:alert', (str)=>
    {
        //mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str)=>
    {
        //mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //DOM manipulation
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'www.rahulshettyacademy.com/')
    //navigating
    cy.go('back')


})

})