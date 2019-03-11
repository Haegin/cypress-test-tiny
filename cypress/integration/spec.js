describe('The FemaleFunders website', () => {
  it('Shows the home page', () => {
    cy.visit('/')
    cy.getByText('Empowering women to shape the future of funding.')
  })

  it('links to Angel Academy', () => {
    cy.visit('/')
    cy.getByText('Angel Academy').click()
    cy.getByText(
      'An investor accelerator program for female leaders in the corporate and technology sectors.'
    )
  })

  it('links to the about page', () => {
    cy.visit('/')
    cy.getByText('About').click()
    cy.getByText(
      'Female Funders is an investor accelerator program for corporate and technology leaders.'
    )
  })
})

