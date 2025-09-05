
describe('Lacoste US Test', () => {

  let testData;
  
  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.setupGoogleSearch();
  });

  it('Search Lacoste US on Google', () => {
    cy.visit(testData.ui.google.baseUrl.us);
    
    const searchQuery = testData.ui.search.queries.lacosteus;
    cy.get(testData.ui.google.selectors.searchInput, { timeout: testData.ui.google.selectors.searchTimeout })
      .should('be.visible')
      .type(searchQuery + '{enter}');
    
    // Wait for search results page to load
    cy.url({ timeout: testData.ui.google.selectors.searchTimeout }).should('include', testData.ui.search.validation.expectedInUrl);
    cy.contains('Lacoste', { timeout: testData.ui.search.validation.searchResultsTimeout }).should('be.visible');
  });
});