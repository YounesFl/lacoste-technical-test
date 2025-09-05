// Simple Cypress support file for Lacoste Technical Test
// No complex setup needed for basic API testing

// Just basic error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // Don't fail tests on API-related errors that we want to handle
  if (err.message.includes('Network Error') || 
      err.message.includes('API Error')) {
    return false;
  }
  return true;
});