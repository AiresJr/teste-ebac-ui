/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionaliade cadastro', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/')
    });
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('#account_display_name').type(faker.internet.displayName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')

    });
    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
        var email = faker.internet.email()
        var firstName = faker.person.firstName()
        var lastName = faker.person.lastName()
        var displayName = faker.internet.displayName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('#account_display_name').type(displayName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')

    });

    it.only('Deve completar o cadastro com sucesso - Usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'teste@123', faker.person.firstName(), faker.person.lastName(), faker.internet.displayName())
        cy.get('.woocommerce-message').should('exist')
    });
});
