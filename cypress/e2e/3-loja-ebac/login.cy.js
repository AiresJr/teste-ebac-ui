/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    afterEach(() => {
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

    it('Deve fazer login com sucesso - Usando Massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeaires-4177 (não é testeaires-4177? Sair)')
    });
    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeaires-4177 (não é testeaires-4177? Sair)')
        })
    })
})