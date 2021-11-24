//ALIF TEGOR SURYA FARIDZKI

describe('Navbar', ()=>{
    beforeEach(() => { 
    // Login Terlebih dahulu
    cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
    
    it('All Item', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').click();
    });
    
    
    it('About', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#about_sidebar_link').click();
    
      //Assertion
       
        
    });
    
    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    
        //Assertion
        
    
    });
    
    
    it('Reset APP state', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#reset_sidebar_link').click();
    
      //Assertion
        cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').should('be.visible');
    });
     
});

