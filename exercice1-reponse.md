# 📋 Exercice 1 - API Exchange Rates (exchangeratesapi.io)

## ❓ Question : Récupérer le taux de change EUR → USD pour le 01/01/2025

---

## 🎯 **RÉPONSE 1 : Endpoint et paramètres utilisés**

### 📡 **Endpoint principal :**
```
https://api.exchangeratesapi.io/v1/2025-01-01
```

### 🔧 **Paramètres requis :**
| Paramètre | Valeur | Description |
|-----------|--------|-------------|
| `access_key` | `2dd8e00d22d3af91b792d7c9eb7191ff` | Clé d'authentification API |
| `base` | `EUR` | Devise de base (Euro) |
| `symbols` | `USD` | Devise cible (Dollar US) |

### 🌐 **URL complète testable :**
```
GET https://api.exchangeratesapi.io/v1/2025-01-01?access_key=2dd8e00d22d3af91b792d7c9eb7191ff&base=EUR&symbols=USD
```

### 🧪 **Tester dans le projet :**
```bash
# Lancer le test automatisé qui utilise cette URL
npm test

# Interface graphique pour voir les détails
npm run cypress:open
```

**💡 Voir l'implémentation :** `cypress/e2e/exercice1-solution.cy.js` (lignes 18-24)

---

## 🎯 **RÉPONSE 2 : Format de réponse attendu de l'API**

### ✅ **Réponse de succès :**
```json
{
  "success": true,
  "timestamp": 1735775999,
  "historical": true,
  "date": "2025-01-01",
  "base": "EUR",
  "rates": {
    "USD": 1.035138
  }
}
```

### ❌ **Réponse d'erreur :**
```json
{
  "success": false,
  "error": {
    "type": "invalid_access_key",
    "info": "You have not supplied a valid API Access Key."
  }
}
```

### 📊 **Structure des champs :**
- `success` : Boolean - Statut de la requête
- `timestamp` : Number - Timestamp Unix de la requête  
- `historical` : Boolean - Données historiques (true pour 2025-01-01)
- `date` : String - Date exacte (format YYYY-MM-DD)
- `base` : String - Devise de référence (EUR)
- `rates.USD` : Number - **Taux de change EUR → USD** (ex: 1.035138)

### 🧪 **Voir la réponse réelle :**
```bash
# Le test affiche la réponse complète de l'API
npm test

# Chercher dans les logs Cypress : "📥 API Response:"
```

**💡 Voir l'implémentation :** `cypress/e2e/exercice1-solution.cy.js` (lignes 32-34)

---

## 🎯 **RÉPONSE 3 : Comment valider que les données sont correctes**

### 🔍 **Étape 1 : Validation de Structure**
```javascript
// Vérifier le statut API
expect(response.body.success).to.be.true;

// Vérifier les champs obligatoires
expect(response.body.date).to.eq('2025-01-01');
expect(response.body.base).to.eq('EUR');
expect(response.body.rates.USD).to.exist;
```

### 🔢 **Étape 2 : Validation des Types**
```javascript
// Le taux USD doit être un nombre
expect(response.body.rates.USD).to.be.a('number');

// Le taux doit être positif
expect(response.body.rates.USD).to.be.greaterThan(0);
```

### 💼 **Étape 3 : Validation Métier**
```javascript
const rate = response.body.rates.USD;

// Taux EUR/USD dans une fourchette réaliste
expect(rate).to.be.within(0.5, 2.5);

// Précision suffisante (au moins 2 décimales)
const precision = rate.toString().split('.')[1]?.length || 0;
expect(precision).to.be.at.least(2);
```

### ⚠️ **Étape 4 : Gestion des Erreurs**
```javascript
// Si l'API retourne une erreur
if (!response.body.success) {
  expect(response.body.error).to.exist;
  expect(response.body.error.type).to.be.a('string');
  expect(response.body.error.info).to.be.a('string');
}
```

### 🧪 **Voir toutes les validations en action :**
```bash
# Les tests montrent chaque étape de validation
npm test

# Chercher dans les logs :
# "✅ API call successful - Validating data..."
# "💰 EUR → USD rate for 2025-01-01: X.XXXXXX"
# "📊 Rate precision: X decimal places"
# "📈 Rate is within expected business range"
```

**💡 Voir l'implémentation complète :** `cypress/e2e/exercice1-solution.cy.js` (lignes 40-70)

---

## 🚀 **COMMANDES PRATIQUES**

### ▶️ **Lancer les tests :**
```bash
npm test                 # Test complet automatisé
npm run cypress:open     # Interface graphique
```

### 📁 **Structure du projet :**
```
├── cypress/e2e/exercice1-solution.cy.js    # Tests automatisés
├── cypress.config.js                       # Configuration Cypress
├── cypress.env.json                        # Clé API sécurisée
└── exercice1-reponse.md                    # Ce fichier de réponses
```

### 🎯 **Résultat attendu :**
```
✅ 2 tests passants
⏱️ ~800ms d'exécution
📹 Vidéo générée automatiquement
```

---

**✅ EXERCICE 1 COMPLET : Toutes les questions ont été répondues et implémentées avec Cypress**