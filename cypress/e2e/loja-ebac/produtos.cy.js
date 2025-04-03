/// <reference types="cypress" />

import produtoPage from "../../support/page-objects/produto.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtoPage.visitarUrl()
    });
    // Selecionar protudo usando pageObject
    it('Deve selecionar um produto da lista e comprar', () => {
        produtoPage.buscarProdutoLista('Apollo Running Short')
    });
    // Buscar produto usando pageObject
    it('Deve buscar um produto com sucesso', () => {
        produtoPage.buscarProduto('Apollo Running')
    });
    // Visitar protudo usando pageObject
    it('Deve visitar a página do produto', () => {
        produtoPage.visitarProduto('Apollo Running Short')
    });
    // Adicionar produto usndo pageObject
    it('Deve adicionar produto ao carrinho', () => {
        produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtoPage.addProdutoCarrinho('M', 'Green', '3')
    });
    // Adicionar produto com massa de dados + pageObject
    it.only('Deve adicionar produto ao carrinho usando massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtoPage.buscarProduto(dados[2].nomeProduto)
            produtoPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
        })
    });
});