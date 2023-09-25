/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Guedes')
        cy.get('#email').type('lucas@teste.com.br')
        cy.get('#open-text-area').type('teste 1234')
        cy.get('.button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
})

