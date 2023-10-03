/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário',function(){
        
        const longText = 'Teste, teste , teste Teste, teste , teste Teste, teste , teste Teste, teste , teste Teste, teste , teste Teste, teste , teste Teste, teste , teste Teste, teste , teste Teste, teste , teste '
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Guedes')
        cy.get('#email').type('lucas@teste.com.br')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('.button[type="submit"]').click()
        
        cy.get('.success').should('be.visible')
    })

    //inserindo e-mail com formatacao invalida
    it('Mensagem de erro, e-mail invalido', function(){
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Guedes')
        cy.get('#email').type('lucas@teste,com.br')
        cy.get('#open-text-area').type('teste')
        cy.get('.button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
//inserindo telefone com erro
    it('Erro telefone', function(){
        
        cy.get('#phone').type('lucasteste')
            .should('have.value', '')
    })
//marcando informação obrigatória e não preenchendo
    it.only('Mensagem de erro q uando o telefone é obrigatório, mas não é preenchido', function(){
        
        cy.get('#phone-checkbox').click()
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Guedes')
        cy.get('#email').type('lucas@teste.com.br')
        cy.get('#open-text-area').type('teste')
        cy.get('.button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
})

