/* 
Exemplo dado pela ferramenta

describe('template spec', () => {

  it('passes', () => {

    cy.viewport(1440,900)

    cy.visit('http://localhost:3000')
  })
})

*/
//---------------------------------------------

describe('Login', ()=>{

  it('Deve logar com sucesso', () => {
    cy.iniciar()
    cy.submitLogin('papito@webdojo.com','katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text','Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })
  //-------------------------------------------------------
  it('Não deve logar com senha inválida', () => {
    cy.iniciar()
    cy.submitLogin('papito@webdojo.com','katana777')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
//-------------------------------------------------------
  it('Não deve logar com email inválido', () => {
    cy.iniciar()
    cy.submitLogin('blabla@webdojo.com','katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
//-------------------------------------------------------




})