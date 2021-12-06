/// <reference types = "Cypress" />

describe("Framework practice", function() {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })

    })
it("Example", function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice')
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)

    cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)

    cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get('#inlineRadio2').should('not.be.disabled')

    cy.contains('Shop').click()
    cy.selectProduct('Blackberry')
   


})

})