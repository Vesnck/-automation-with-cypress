/// <reference types = "Cypress" />
///node_modules/.bin/cypress open
describe("My fourth test suite", function() {
it("My fourth test case", function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
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