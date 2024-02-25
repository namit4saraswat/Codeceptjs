const {event} = require('codeceptjs')
require('dotenv').config()

exports.config = {
  output: './output',
  helpers: process.env.webdriver === 'Playwright' ? {
    Playwright: {
      browser: 'chromium',
      url: 'https://magento.softwaretestingboard.com',
      show: true,
      waitForNavigation: 'load'
    }
  }:{
    WebDriver : {
      url: 'https://magento.softwaretestingboard.com',
      smartWait: 5000,
      browser: "chrome",
      restart: false,
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    }
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/features/*.feature',
    steps: ['./tests/step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'UI Automation',
  bootstrap: async function(){

  },
  bootstrapAll: async function(){

  }
}