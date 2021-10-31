
// Nama : Sela Aulia Siswanto
// NIM : 1941720196
// Kelas/No. Absen : TI3C/21

describe('Filter Web Test', ()=>{
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    });

    // login dengan username standard_user
    // valid username dan valid password
    it('Filter A-Z', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        //Assertion
        cy.url().should('include', '/inventory.html');

        //Menggunakan Filter A-Z
        cy.get('[data-test=\"product_sort_container"\]').select("az");
        cy.get('.inventory_item_name:eq(0)').should('have.text', "Sauce Labs Backpack");
    });
    
    it('Filter Z-A', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      //Assertion
      cy.url().should('include', '/inventory.html');

      //Menggunakan Filter Z-A
      cy.get('[data-test=\"product_sort_container"\]').select("za");
      cy.get('.inventory_item_name:eq(0)').should('have.text', "Test.allTheThings() T-Shirt (Red)");
    });

    it('Filter Price Low-High', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      //Assertion
      cy.url().should('include', '/inventory.html');

      //Menggunakan Filter Harga Terendah-Tertinggi(Price Low-High)
      cy.get('[data-test=\"product_sort_container"\]').select("lohi");
      cy.get('.inventory_item_name:eq(0)').should('have.text', "Sauce Labs Onesie");
    });

    it('Filter Price High-Low', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      //Assertion
      cy.url().should('include', '/inventory.html');

      //Menggunakan Filter Harga Tertinggi-Terendah (Price High-Low)
      cy.get('[data-test=\"product_sort_container"\]').select("hilo");
      cy.get('.inventory_item_name:eq(0)').should('have.text', "Sauce Labs Fleece Jacket");
    });

    it('Mencoba melihat detail produk', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      //Assertion
      cy.url().should('include', '/inventory.html');

      //Menggunakan Filter Harga Tertinggi-Terendah (Price High-Low)
      cy.get('#item_5_title_link').click();
    });
})
