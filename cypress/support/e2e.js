// Custom command for Google search setup
Cypress.Commands.add('setupGoogleSearch', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  
  // Set Google cookies to avoid popups
  cy.setCookie('CONSENT', 'YES+cb.20210328-17-p0.en+FX+667', {
    domain: '.google.com',
    secure: true,
    httpOnly: false
  });
  
  cy.setCookie('SOCS', 'CAI', {
    domain: '.google.com', 
    secure: true,
    httpOnly: false
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