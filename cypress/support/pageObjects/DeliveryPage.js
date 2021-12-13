class DeliveryPage{
    getCountry(){
        return cy.get('#country')
    }
    getOnlyOption(){
        return cy.get('.suggestions > ul > li > a')
    }

    getTermsCheckbox(){
        return cy.get('input[id="checkbox2"]')
    }

    getSubmit(){
        return cy.get('input[type="submit"]')
    }

    getResultMessage(){
        return cy.get('.alert')
    }

}
export default DeliveryPage;