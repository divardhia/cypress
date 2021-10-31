

// 1941720184 - Diva Ardhia 

describe('Login Test', () => {
    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    });

    // login dengan uname standard_user
    // valid username dan valid password
    it('valid username password', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        //Assertion
        cy.url().should('include', '/inventory.html');
    });

    // valid username dan invalid password
    it('valid username invalid password', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password');
        cy.get('#login-button').click();

        //Assertion
        cy.get('#user-name').should('have.class', 'error');
        cy.get('#password').should('have.class', 'error');
        cy.get('h3').contains('Epic sadface: Password is required').should('have.attr', 'data-test', 'error');
    });

    // invalid username dan valid password
    it('invalid username valid password', () => {
        cy.get('#user-name');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        //Assertion
        cy.get('#user-name').should('have.class', 'error');
        cy.get('#password').should('have.class', 'error');
        cy.get('h3').contains('Epic sadface: Username is required').should('have.attr', 'data-test', 'error');
    });

    // invalid username dan invalid password
    it('invalid username invalid password', () => {
        cy.get('#user-name');
        cy.get('#password');
        cy.get('#login-button').click();

        //Assertion
        cy.get('#user-name').should('have.class', 'error');
        cy.get('#password').should('have.class', 'error');
        cy.get('h3').contains('Epic sadface: Username is required').should('have.attr', 'data-test', 'error');
    });

    // login dengan uname locked_out_user
    it('locked username valid password', () => {
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        //Assertion
        cy.get('#user-name').should('have.class', 'error');
        cy.get('#password').should('have.class', 'error');
        cy.get('h3').contains('Epic sadface: Sorry, this user has been locked out.').should('have.attr', 'data-test', 'error');
    });
})