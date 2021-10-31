// Nama  : Moch Farchan Agil
// NIM   : 1941720204
// kelas : TI-3C

context ('Testing Checkout Page', () =>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        // login 
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        // masuk ke keranjang
        cy.get ('#shopping_cart_container').click();
        cy.get ('#checkout').click();
        });

        it('Checkout dengan valid requirement', ()=>{
            cy.get ('#first-name').type('Farhan');
            cy.get ('#last-name').type('Agil');
            cy.get ('#postal-code').type('65144');
            cy.get ('#continue').click();    
        });
        it('Checkout dengan invalid requirement', ()=>{
            cy.get ('#first-name').type('Farhan');
            cy.get ('#last-name');
            cy.get ('#postal-code').type('65144');
            cy.get ('#continue').click();    
        });
        it('Checkout dengan invalid requirement', ()=>{
            cy.get ('#first-name').type('Farhan');
            cy.get ('#last-name').type('Agil');
            cy.get ('#postal-code');
            cy.get ('#continue').click();    
        });
        it('Checkout dengan invalid requirement', ()=>{
            cy.get ('#first-name');
            cy.get ('#last-name').type('Agil');
            cy.get ('#postal-code').type('65144');
            cy.get ('#continue').click();    
        });
        it('Checkout dengan invalid requirement', ()=>{
            cy.get ('#first-name').type('Farhan');
            cy.get ('#last-name');
            cy.get ('#postal-code');
            cy.get ('#continue').click();    
        });
})