/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista e comprar', () => {
        cy.get('.product-block')
            .first()
            .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('exist')
    });
});