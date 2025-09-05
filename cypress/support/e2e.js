// Custom command for Google search setup
Cypress.Commands.add('setupGoogleSearch', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  
  // Load test data and set cookies
  cy.fixture('testData').then((testData) => {
    const { consent, socs } = testData.cookies.google;
    
    cy.setCookie(consent.name, consent.value, {
      domain: consent.domain,
      secure: consent.secure,
      httpOnly: consent.httpOnly
    });
    
    cy.setCookie(socs.name, socs.value, {
      domain: socs.domain,
      secure: socs.secure,
      httpOnly: socs.httpOnly
    });
  });
});

// Error handling
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Network Error') || 
      err.message.includes('API Error')) {
    return false;
  }
  return true;
});