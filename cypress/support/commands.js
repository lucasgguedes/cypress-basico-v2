Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Guedes')
    cy.get('#email').type('lucas@teste.com.br')
    cy.get('#open-text-area').type('Teste123')
    cy.get('.button[type="submit"]').click()
})