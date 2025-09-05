
describe('Lacoste FR Test', () => {

  let testData;
  
  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.setupGoogleSearch();
  });

  it('Search Lacoste FR on Google', () => {
    cy.visit(testData.ui.google.baseUrl.fr);
    
    const searchQuery = testData.ui.search.queries.lacostefr;
    cy.get(testData.ui.google.selectors.searchInput, { timeout: testData.ui.google.selectors.searchTimeout })
      .should('be.visible')
      .type(searchQuery + '{enter}');
    
    // Wait for search results page to load
    cy.url({ timeout: testData.ui.google.selectors.searchTimeout }).should('include', testData.ui.search.validation.expectedInUrl);
    cy.contains('Lacoste', { timeout: testData.ui.search.validation.searchResultsTimeout }).should('be.visible');
  });
});