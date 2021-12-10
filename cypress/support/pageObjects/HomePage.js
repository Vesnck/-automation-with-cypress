class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDataBinding(){
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getGender(){
        return cy.get('select')
    }
    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }
    getEmployed(){
        return cy.get('#inlineRadio2')
    }
    getShopTab(){
        return cy.contains('Shop')
    }

}
export default HomePage;