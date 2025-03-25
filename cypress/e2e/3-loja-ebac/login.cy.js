/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('testeaires@ebac.com')
        cy.get('#password').type('teste1234@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeaires-4177 (não é testeaires-4177? Sair)')

    })

    it('Deve fazer exibir uma mensagem de erro ao insrir usuário inválido', () => {
        cy.get('#username').type('t123asdi@ebac.com')
        cy.get('#password').type('teste1234@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de error ao inserir senha inválida', () => {
        cy.get('#username').type('testeaires@ebac.com')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

})