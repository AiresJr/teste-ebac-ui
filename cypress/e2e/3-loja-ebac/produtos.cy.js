/// <reference types="cypress" />

import produtoPage from "../../support/page-objects/produto.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtoPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista e comprar', () => {
        produtoPage.buscarProdutoLista('Apollo Running Short')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtoPage.buscarProduto('Apollo Running')
    });

    it('Deve visitar a página do produto', () => {
        produtoPage.visitarProduto('Apollo Running Short')
    });

    it('Deve adiciona produto ao carrinho', () => {
        produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtoPage.addProdutoCarrinho('M', 'Green', '3')
    });

    it.only('Deve adiciona produto ao carrinho usando massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtoPage.buscarProduto(dados[2].nomeProduto)
            produtoPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
        })


    });
});