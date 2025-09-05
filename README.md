# 🤖 Lacoste Technical Test - Exercise 2

## 🎯 Description

Tests automatisés Cypress pour les sites Lacoste US et FR.

**Fonctionnalités :**
- ✅ Test recherche Google "Lacoste US"
- ✅ Test recherche Google "Lacoste FR" 
- ✅ Pipeline GitHub Actions automatique
- ✅ Gestion des popups Google

## 📂 Structure

```
lacoste-tests/
├── cypress/
│   └── e2e/
│       ├── exercice2-lacoste-us.cy.js
│       └── exercice2-lacoste-fr.cy.js
├── .github/workflows/cypress.yml
├── cypress.config.js
└── package.json
```

## 🚀 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd lacoste-tests

# Installer les dépendances
npm install
```

## ⚡ Utilisation

### Lancer tous les tests
```bash
npm test
```

### Lancer un test spécifique
```bash
# Test US seulement
npx cypress run --spec "cypress/e2e/exercice2-lacoste-us.cy.js"

# Test FR seulement
npx cypress run --spec "cypress/e2e/exercice2-lacoste-fr.cy.js"
```

### Interface graphique Cypress
```bash
npx cypress open
```

## 🤖 Pipeline Automatique

Le pipeline GitHub Actions se déclenche automatiquement sur :
- Push vers `main` ou `develop`
- Pull requests vers `main`

Les tests s'exécutent avec Chrome en mode headless.

## 📊 Résultats

- ✅ **Test US :** Recherche Google "Lacoste US" → Validation page résultats
- ✅ **Test FR :** Recherche Google "Lacoste FR" → Validation page résultats

Les deux tests passent en ~4 secondes chacun.

## 🔧 Configuration

- **Cypress :** v13.6.0
- **Node.js :** 18+
- **Navigateur :** Chrome (recommandé)

## 🚀 Upload GitHub

```bash
# Initialiser et pusher
git add .
git commit -m "🎯 Lacoste Test - Exercise 2 Complete"
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```