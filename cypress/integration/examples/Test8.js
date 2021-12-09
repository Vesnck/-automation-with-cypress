/// <reference types = "Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe("Framework practice", function() {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })

    })
it("Purchase products", function(){
    const homePage = new HomePage()
    const productPage = new ProductPage()
    cy.visit('https://rahulshettyacademy.com/angularpractice')
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)

    homePage.getTwoWayDataBinding().should('have.value',this.data.name)

    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getEmployed().should('not.be.disabled')

    homePage.getShopTab().click()
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })
    productPage.getCheckout().click()

    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        var value = $el.text().split(' ')[1]
        value.trim()
        sum += Number(value)
    }).then(function(){
    })
    cy.get('h3 strong').then(function(element){
        var total = element.text().split(' ')[1].trim()
        expect(sum).to.be.eq(Number(total)) 
    })
   
    cy.contains('Checkout').click()

    //for the spec only
    Cypress.config("defaultCommandTimeout", 10000)

    cy.get('#country').type('Russia')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('input[id="checkbox2"]').check({force:true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
        const messageText = element.text()
        expect(messageText.includes('Success! Thank you!')).to.be.true
    })


})

})