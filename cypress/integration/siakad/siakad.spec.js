context ('Login siakad', () => {
    it ('login test', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1941720184')
        cy.get('#password').type('divacantik')
        cy.get('#form_login > div.form-actions > button').click()
    })
})