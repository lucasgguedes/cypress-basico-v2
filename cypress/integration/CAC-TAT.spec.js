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
    it('Mensagem de erro q uando o telefone é obrigatório, mas não é preenchido', function(){
        
        cy.get('#phone-checkbox').click()
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Guedes')
        cy.get('#email').type('lucas@teste.com.br')
        cy.get('#open-text-area').type('teste')
        cy.get('.button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
//preenche informações, valida o campo e depois apaga
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').type('Lucas').should('have.value', 'Lucas').clear().should('have.value', '')
        cy.get('#lastName').type('Guedes').should('have.value', 'Guedes').clear().should('have.value', '')
        cy.get('#email').type('lucas@teste.com.br').should('have.value', 'lucas@teste.com.br').clear().should('have.value', '')
        cy.get('#phone').type('12345678').should('have.value', '12345678').clear().should('have.value', '')
    })

// mensagem de erro ao tentar salvar sem enviar dados
    it('Mensagem de erro ao submeter form sem preencher campos obrigatórios', function(){
        cy.get('.button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
})

