//ALIF TEGOR SURYA FARIDZKI

describe('Navbar', ()=>{
    beforeEach(() => { 
        // Login Terlebih dahulu
 cy.visit('https://www.saucedemo.com/');
    });
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
     //Assertion
     cy.url().should('include', '/inventory.html');
});

it('Navbar', () => {
    cy.get('button[name = ]').click();
});


it('All Item', () => {
    cy.get('button[name = ]').click();
});


it('About', () => {
    cy.get('button[name = ]').click();

  //Assertion
    cy.visit('https://www.saucelabs.com/');
    
});

it('Logout', () => {
    cy.get('#logout-button').click();

    //Assertion
    cy.visit('https://www.saucedemo.com/');

});


it('Reset APP state', () => {
    cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').click();
    cy.get('button[name = "remove-sauce-labs-backpack"]').click();

  //Assertion
    cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').should('be.visible');
});
 
it('valid username password', () => {
    cy.get('#user-name').type('Problem-user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Assertion
    cy.get('button[name = About ]').click();
    cy.visit('https://saucelabs.com/error/404');
});