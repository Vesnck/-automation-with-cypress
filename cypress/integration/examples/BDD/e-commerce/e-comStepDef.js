import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import CheckoutPage from '../../../../support/pageObjects/CheckoutPage'
import DeliveryPage from '../../../../support/pageObjects/DeliveryPage'

const productPage = new ProductPage()
const homePage = new HomePage()
const checkoutPage = new CheckoutPage()
const deliveryPage = new DeliveryPage()


Given("I open e-commerce page", () => {
    cy.visit(Cypress.env('url')+'/angularpractice')
})

When("I add items to cart", function(){
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })
    productPage.getCheckout().click()

})

And("Validate the total prices and checkout", () =>{
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


})

Then("select the country, submit and verify success", () => {
    deliveryPage.getCountry().type('Russia')
    deliveryPage.getOnlyOption().click()
    deliveryPage.getTermsCheckbox().check({force:true})
    deliveryPage.getSubmit().click()
    deliveryPage.getResultMessage().then(function(element){
        const messageText = element.text()
        expect(messageText.includes('Success! Thank you!')).to.be.true
    })
})