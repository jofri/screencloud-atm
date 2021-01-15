describe('Login & withdrawal E2E test', () => {

  it('User can login & withdraw £140, £50 & £90 - then logout', () => {
    // Test if auth is working
    cy.visit('/auth');
    cy.get('input[id="PIN"]').type('1111');
    cy.get('button[id="loginButton"]').click();
    cy.get('p[id="username"]').should('contain', 'John Doe');

    // Test if £140 withdrawl is working
    cy.visit('/withdrawal');
    cy.get('input[id="outlined-basic"]').type('140');
    cy.get('button[id="withdrawButton"]').click();
    cy.get('p[id="alert-dialog-slide-description"]').should('contain', '140');

    // Test if £50 withdrawl is working
    cy.visit('/withdrawal');
    cy.get('input[id="outlined-basic"]').type('50');
    cy.get('button[id="withdrawButton"]').click();
    cy.get('p[id="alert-dialog-slide-description"]').should('contain', '50');

    // Test if £90 withdrawl and overdraft warning is working
    cy.visit('/withdrawal');
    cy.get('input[id="outlined-basic"]').type('90');
    cy.get('button[id="withdrawButton"]').click();
    cy.get('p[id="alert-dialog-slide-description"]').should('contain', '-60');
    cy.get('button[id="overdraftProceed"]').click();
    cy.get('button[id="alertProceed"]').click();

    // Test if logout is working
    cy.get('button[id="logoutButton"]').click();
    cy.get('button[id="splashScreenButton"]').should('contain', 'Press to begin');

  });




});