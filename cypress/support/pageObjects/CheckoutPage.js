class CheckoutPage{

    getPrices(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getSum(){
        return cy.get('h3 strong')
    }

    getCheckoutBtn(){
        return cy.contains('Checkout')
    }

}
export default CheckoutPage;