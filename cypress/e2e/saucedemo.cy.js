
describe('Login test', ()=>{

    it ('Deve ter Login com Sucesso', () =>{

      cy.visit('http://www.saucedemo.com')

      cy.get('[data-test="username"]').type('standard_user')

      cy.get('input[placeholder="Password"]').type('secret_sauce')

      cy.get('[data-test="login-button"]').click()

      cy.contains('span','Products')
       .should('be.visible')

    })




})