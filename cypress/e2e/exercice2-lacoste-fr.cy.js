
describe('Lacoste FR Test', () => {

  beforeEach(() => {
    cy.setupGoogleSearch();
  });

  it('Search Lacoste FR on Google', () => {
    cy.visit('https://www.google.fr');
    
    const searchQuery = 'Lacoste FR';
    cy.get('input[name="q"], textarea[name="q"]', { timeout: 10000 })
      .should('be.visible')
      .type(searchQuery + '{enter}');
    
    // Wait for search results page to load
    cy.url({ timeout: 10000 }).should('include', 'search');
    cy.contains('Lacoste', { timeout: 8000 }).should('be.visible');
  });
});