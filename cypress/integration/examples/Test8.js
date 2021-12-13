/// <reference types = "Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
import DeliveryPage from '../../support/pageObjects/DeliveryPage'

describe("Framework practice", function() {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })

    })
it("Purchase products", function(){
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const checkoutPage = new CheckoutPage()
    const deliveryPage = new DeliveryPage()

    cy.visit(Cypress.env('url')+'/angularpractice')
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
    checkoutPage.getPrices().each(($el, index, $list) => {
        var value = $el.text().split(' ')[1]
        value.trim()
        sum += Number(value)
    }).then(function(){
    })
    
    checkoutPage.getSum().then(function(element){
        var total = element.text().split(' ')[1].trim()
        expect(sum).to.be.eq(Number(total)) 
    })
   
    checkoutPage.getCheckoutBtn().click()

    //for the spec only
    Cypress.config("defaultCommandTimeout", 10000)

    deliveryPage.getCountry().type('Russia')
    deliveryPage.getOnlyOption().click()
    deliveryPage.getTermsCheckbox().check({force:true})
    deliveryPage.getSubmit().click()
    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    deliveryPage.getResultMessage().then(function(element){
        const messageText = element.text()
        expect(messageText.includes('Success! Thank you!')).to.be.true
    })


})

})