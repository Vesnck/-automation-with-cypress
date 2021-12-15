import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import CheckoutPage from '../../../../support/pageObjects/CheckoutPage'
import DeliveryPage from '../../../../support/pageObjects/DeliveryPage'

//html cucumber report
//> node cucumber-html-reporter.js   
 
//run cucumber feature
//> node_modules/.bin/cypress run --spec cypress\integration\examples\BDD\e-commerce.feature --headed --browser chrome

//run tagged scenaros
//> npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome


const productPage = new ProductPage()
const homePage = new HomePage()
const checkoutPage = new CheckoutPage()
const deliveryPage = new DeliveryPage()
let name


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

When("I fill the form details", function(dataTable){

    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(name)
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then("Form behaviour is changed", function(dataTable){
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getEmployed().should('not.be.disabled')

})

And("Navigate to Shop page", function(){
    homePage.getShopTab().click()
})