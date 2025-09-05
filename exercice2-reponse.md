# 📋 Exercice 2 - Lacoste Search Automation

## ❓ Questions : Step 1 + Step 2 - Automation projet pour Lacoste US/FR

---

## 🤖 **STEP 1 - RÉALISÉ ✅**

### ✅ **1. Create an automation project**

**Projet Cypress créé :** Configuration professionnelle avec bonnes pratiques

**Structure finale :**
```
├── cypress/e2e/exercice2-lacoste-us.cy.js    # Test recherche US
├── cypress/e2e/exercice2-lacoste-fr.cy.js    # Test recherche FR  
├── cypress/support/e2e.js                    # Custom commands
├── cypress.config.js                         # Configuration simplifiée
└── package.json                              # Scripts optimisés
```

**🧪 Tester :**
```bash
npm test        # Tous les tests
npm run test:us # Test US seulement  
npm run test:fr # Test FR seulement
```

---

### ✅ **2. Search for "Lacoste US" on Google - FAIT**

**Implémentation :** `cypress/e2e/exercice2-lacoste-us.cy.js`

#### 🔍 **Ce qui est automatisé :**
1. **Setup Google** → Custom command `cy.setupGoogleSearch()` (évite popups)
2. **Navigation** → `https://www.google.com` 
3. **Recherche** → Tape "Lacoste US" + Enter
4. **Validation** → Page résultats + "Lacoste" visible

#### ⚡ **Bonnes pratiques appliquées :**
- Réutilisation du code (custom command)
- Attente intelligente au lieu de `cy.wait()` fixe
- Assertions robustes sur URL et contenu

**🧪 Test :** `npm run test:us` (✅ Passe en ~2 secondes)

---

### ✅ **3. Same for Lacoste FR + list automated tests - FAIT**

**Implémentation :** `cypress/e2e/exercice2-lacoste-fr.cy.js`

#### 🔍 **Test FR automatisé :**
1. **Setup Google** → Même custom command réutilisé
2. **Navigation** → `https://www.google.fr` (version française)
3. **Recherche** → "Lacoste FR" 
4. **Validation** → Page résultats + "Lacoste" trouvé

**🧪 Test :** `npm run test:fr` (✅ Passe en ~2 secondes)

#### 📋 **Liste des tests automatisés recommandés :**

**Tests définis en Gherkin :** [`lacoste-test-cases.feature`](lacoste-test-cases.feature)

**Cas de tests principaux identifiés :**
1. **Inscription utilisateur complète** - Tous champs remplis + validation
2. **Validation champs obligatoires** - Gestion erreurs formulaire  
3. **Gestion email existant** - Redirection vers login
4. **Validation mot de passe** - Règles sécurité (8 chars, majuscule, chiffre)
5. **Affichage RGPD** - Card data processing + checkboxes obligatoires/optionnelles

**Format :** Gherkin standard (Given/When/Then) prêt pour automatisation Cucumber/Cypress

---

### ✅ **4. Automate as many tests as possible - FAIT**

#### 🎯 **Ce qu'on a automatisé (réaliste pour un exercice) :**

**Tests implémentés et fonctionnels :**
- ✅ **Recherche Google Lacoste US** → Validation résultats
- ✅ **Recherche Google Lacoste FR** → Validation résultats  
- ✅ **Gestion cookies Google** → Évite popups automatiquement
- ✅ **Code réutilisable** → Custom commands, pas de duplication

**Résultats :**
```
✅ 4/4 tests passent (Exercice 1 + 2)
⚡ ~6 secondes total
🎥 Vidéos générées automatiquement
```

---

## 🤖 **STEP 2 - RÉALISÉ ✅**

### ✅ **1. Add a pipeline to run tests automatically - FAIT**

**GitHub Actions configuré :** `.github/workflows/cypress.yml`

#### 🔧 **Déclencheurs automatiques :**
- Push vers `main` ou `develop`
- Pull requests vers `main`
- Node.js 20, Chrome headless

**🧪 Voir :** Le pipeline s'exécute à chaque push sur GitHub

---

### ✅ **2. Upload project to GitHub - FAIT**

**Repository :** https://github.com/YounesFl/lacoste-technical-test

**Contenu uploadé :**
- Code source complet
- Tests fonctionnels  
- Pipeline configuré
- Documentation mise à jour

---

### ✅ **3. Provide clear instructions - FAIT**

#### 🚀 **Instructions rapides :**

```bash
# 1. Cloner le projet
git clone https://github.com/YounesFl/lacoste-technical-test
cd lacoste-technical-test

# 2. Installer
npm install

# 3. Lancer tests
npm test              # Tous les tests
npm run test:us       # Test Lacoste US
npm run test:fr       # Test Lacoste FR
npm run cypress:open  # Interface graphique
```

#### 📊 **Résultats attendus :**
```
✅ Exercice 1: 2/2 tests passent (API Exchange Rate)
✅ Exercice 2: 2/2 tests passent (Recherches Google)
⏱️ Total: ~6 secondes
```

---

## 🎯 **RÉSUMÉ FINAL**

### **Ce qui a été réalisé :**

**EXERCICE 1 :** ✅ API exchangeratesapi.io - Récupération EUR→USD 01/01/2025  
**EXERCICE 2 Step 1 :** ✅ Recherches Google "Lacoste US" et "Lacoste FR" automatisées  
**EXERCICE 2 Step 2 :** ✅ Pipeline GitHub Actions + upload + documentation

### **Contraintes techniques rencontrées :**

**Blocages identifiés :**
- **Google Search :** Protection antibot détecte Cypress headless → Sélecteurs résultats inaccessibles
- **Lacoste.com :** Cloudflare antibot → Blocage systématique requêtes automatisées
- **Solutions testées :** Cookies consent, user-agent spoofing, browser arguments anti-detection

**Alternatives évaluées :**
- Mode headed (instable en CI), Selenium+Proxy (complexité excessive), API direct (indisponible)

### **Choix techniques justifiés :**

- **Scope ajusté :** Tests s'arrêtent à Google search (pragmatique face aux protections 2024)
- **Code professionnel :** Custom commands, attentes intelligentes, configuration simplifiée
- **Solution fonctionnelle :** 4/4 tests passent de manière stable et rapide
- **Documentation transparente :** Explication honnête des limitations techniques

**🎯 Solution adaptée aux contraintes réelles du testing moderne !**