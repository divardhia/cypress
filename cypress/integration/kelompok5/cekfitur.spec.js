// Risky Dwi Ramadhan
//TI-3C
//20
describe('Cek Fitur', ()=>{

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      });
  
      // Cek Fitur Add Items
      it('Add Items', () => {
          cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').click();
  
          //Assertion
          cy.get('button[name = "remove-sauce-labs-backpack"]').should('be.visible');
      });
      
      // Cek Fitur Remove Items
      it('Remove Items', () => {
          cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').click();
          cy.get('button[name = "remove-sauce-labs-backpack"]').click();

        //Assertion
          cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').should('be.visible');
      });
    
      
      // Cek Fitur Continue Shopping
      it('Continue Shopping', () => {
          cy.get('[class = "shopping_cart_link"]').click();
          cy.get('button[name = "continue-shopping"]').click();

        //Assertion
        cy.url().should('include', '/inventory.html');
      });
    
      // Cek List Product in Cart
      it('List Product in Cart', () => {
            cy.get('button[name = "add-to-cart-sauce-labs-backpack"]').click();
            cy.get('[class = "shopping_cart_link"]').click();

        //Assertion
            cy.get('div[class = "cart_item"]').should('be.visible');
      });
    
      // Cek Back to Product
      it('Back to Product', () => {
            cy.get('#item_5_title_link').click();
            cy.get('button[name = "back-to-products"]').click();

        //Assertion
        cy.url().should('include', '/inventory.html');
      });
  
  })