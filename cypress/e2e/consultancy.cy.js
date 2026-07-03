describe('Formulário de Consultoria', () => {

  it('Deve solicitar consultoria individual', () => {

    cy.iniciar()

    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.goTo('Formulários', 'Consultoria')

    cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')

    cy.get('input[placeholder="Digite seu email"]').type('papito@webdojo.com')

    cy.get('input[placeholder="(00) 00000-0000"]').type('(11) 99999-1000')
      .should('have.value', '(11) 99999-1000')


    cy.contains('label', 'Tipo de Consultoria')
      .parent()
      .find('select')
      .select('inCompany')


    cy.contains('label', 'Pessoa Jurídica')
      .find('input')
      .check()
      .should('be.checked')

    cy.contains('label', 'Pessoa Física')
      .find('input')
      .should('be.not.checked')

    cy.contains('label', 'CNPJ')
      .parent()
      .find('input[placeholder="00.000.000/0000-00"]').type('89.524.388/0001-33')
      .should('have.value', ('89.524.388/0001-33'))

    const digitalChannels =
      [
        'Instagram',
        'LinkedIn',
        'Udemy',
        'YouTube',
        'Indicação de Amigo'
      ]

    digitalChannels.forEach((channel) => {

      cy.contains('label', channel)
        .find('input')
        .check()
        .should('be.checked')

    })

    cy.get('input[type="file"]')
      .selectFile('./cypress/fixtures/arquivo-test.pdf', { force: true })

    cy.contains('label', 'Mais Detalhes')
      .get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]').type('Você precisa me contratar porque ofereço aceleração de produtividade e resolução de problemas sob medida instantaneamente.')

    const techs = ['Cypress', 'Playwright', 'Selenium', 'Robot Framework', 'Appium']

    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type('{enter}')

      cy.contains('span', tech)
        .should('be.visible')


    })

    cy.contains('span', 'Li e aceito os')
      .parent()
      .find('input[type="checkbox"]')
      .check()

    cy.contains('button', 'Enviar formulário').click()

    cy.get('.modal').contains('h3', 'Sucesso!')
      .should('be.visible')
      .and('have.text', 'Sucesso!')
    cy.get('.modal').contains('p', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
      .should('be.visible')



    cy.contains('button', 'Fechar')
      .wait(2000)
      .click()


  })



})


