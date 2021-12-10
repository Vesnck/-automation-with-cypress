/// <reference types = "Cypress" />

describe("My third test suite", function() {
it("My third test case", function(){
    cy.visit(Cypress.env('url')+'/AutomationPractice/')
    //checkbox practice
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])
   //static dropdown pratice
   cy.get('select').select('Option2').should('have.value', 'option2')

   //dynamic dropdown pratice
   cy.get('#autocomplete').type('rus')

   cy.get('.ui-menu-item div').each(($el, index, $list) => {
    if($el.text() === 'Russian Federation'){
        $el.click()
    }
    cy.get('#autocomplete').should('have.value', 'Russian Federation')
} )
    
//invisible elements practice
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
//radiobutton
cy.get('[value = "radio2"]').check().should('be.checked')


})

})