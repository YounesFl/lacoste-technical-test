const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Basic configuration for API testing
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    
    // Timeouts
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    responseTimeout: 15000,
    
    // Video recording
    video: true,
    
    // Enable Cypress Studio for code generation
    experimentalStudio: true,
    
    // Configuration pour éviter les popups
    chromeWebSecurity: false,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    
    // Environment variables (loaded from cypress.env.json)
    env: {
      API_BASE_URL: "https://api.exchangeratesapi.io/v1"
    },
    
    // 🔥 TECHNIQUES OFFICIEUSES ANTI-CAPTCHA
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        console.log('🔥 TECHNIQUES OFFICIEUSES ACTIVÉES - Luminati/Bright Data Style');
        
        // Configuration Bright Data recommandée
        const brightDataArgs = [
          // Core anti-detection
          '--disable-blink-features=AutomationControlled',
          '--exclude-switches=enable-automation',
          '--disable-extensions-except=',
          '--disable-plugins-discovery',
          '--disable-features=VizDisplayCompositor',
          
          // User agent spoofing  
          '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          
          // Canvas fingerprinting protection
          '--disable-canvas-aa',
          '--disable-2d-canvas-clip-aa',
          '--disable-gl-drawing-for-tests',
          
          // WebRTC leak protection
          '--disable-features=WebRTC',
          '--disable-rtc-smoothness-algorithm',
          
          // Additional stealth
          '--no-first-run',
          '--no-default-browser-check',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding',
          '--disable-features=TranslateUI',
          '--disable-ipc-flooding-protection',
          '--disable-hang-monitor',
          '--disable-prompt-on-repost',
          '--disable-background-networking',
          '--disable-sync',
          '--metrics-recording-only',
          '--disable-default-apps',
          '--mute-audio',
          '--no-pings',
          '--disable-setuid-sandbox',
          '--no-sandbox',
          
          // Window management
          '--window-size=1920,1080',
          '--start-maximized'
        ];
        
        // Appliquer tous les arguments
        brightDataArgs.forEach(arg => {
          if (!launchOptions.args.includes(arg)) {
            launchOptions.args.push(arg);
          }
        });
        
        return launchOptions;
      });
      
      // Task pour injection de scripts anti-détection
      on('task', {
        // Supprimer les propriétés révélatrices de l'automation
        removeAutomationProps: () => {
          return new Promise((resolve) => {
            // Script à injecter dans la page
            const antiDetectionScript = `
              // Supprimer webdriver property
              Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined,
              });
              
              // Masquer les propriétés Chrome automation
              delete window.chrome.runtime.onConnect;
              delete window.chrome.runtime.onMessage;
              
              // Passer les tests de détection courants
              window.navigator.chrome = {
                runtime: {},
                loadTimes: function() {},
                csi: function() {},
                app: {}
              };
            `;
            resolve(antiDetectionScript);
          });
        },
        
        log(message) {
          console.log(message);
          return null;
        }
      });
      
      return config;
    }
  }
});