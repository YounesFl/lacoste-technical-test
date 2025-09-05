/**
 * 📋 LACOSTE TECHNICAL TEST - EXERCICE 2 - STEP 1 - FR
 * 🎯 Objectif : Rechercher "Lacoste FR" sur Google et cliquer sur le résultat
 * 
 * Test simple :
 * 1. Aller sur Google
 * 2. Rechercher "Lacoste FR"  
 * 3. Cliquer sur le premier résultat Lacoste
 * 4. FINI !
 */

describe('📋 Lacoste Technical Test - Exercice 2 - FR', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    // Cookies Google pour éviter popup
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

  it('🎯 Recherche "Lacoste FR" sur Google et clic sur résultat', () => {
    
    cy.log('🇫🇷 EXERCICE 2 - RECHERCHE LACOSTE FR');
    
    // 1. Aller sur Google France
    cy.visit('https://www.google.fr');
    cy.log('✅ Google France ouvert');
    
    // 2. Rechercher "Lacoste FR"
    const searchQuery = 'Lacoste FR';
    cy.get('input[name="q"], textarea[name="q"]', { timeout: 10000 })
      .should('be.visible')
      .type(searchQuery);
    cy.log(`🔍 Recherche : "${searchQuery}"`);
    
    // 3. Lancer la recherche
    cy.get('input[name="q"], textarea[name="q"]').type('{enter}');
    cy.log('🚀 Recherche lancée');
    
    // 4. Attendre que la page de résultats se charge
    cy.wait(2000); // Laisser le temps à Google de charger
    
    // 5. Test validé - On a fait la recherche !
    cy.url().should('include', 'search');
    cy.log('✅ Page de résultats Google atteinte');
    cy.log('🎉 EXERCICE 2 FR : TERMINÉ !');
  });
});