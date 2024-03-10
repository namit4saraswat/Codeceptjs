const {event} = require('codeceptjs')
require('dotenv').config()

exports.config = {
  output: './output',
  helpers: process.env.webdriver === 'Playwright' ? {
    Playwright: {
      browser: 'chromium',
      url: '',
      show: true,
      waitForNavigation: 'load',
      args: [
        `--load-extension=D:/Documents/Workspace/Codecept_Projects/UI Automation/assets/adblockpluschrome-3.8.4.2593.crx`
      ]
    }
  }:{
    WebDriver : {
      url: '',
      smartWait: 5000,
      browser: "chrome",
      restart: false,
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 10000
      },
      desiredCapabilities: {
        chromeOptions: {
          args: [
            `--load-extension=D:/Documents/Workspace/Codecept_Projects/UI Automation/assets/adblockpluschrome-3.8.4.2593.crx`
          ]
        }
      }
    }
  },
  multiple: {
    browserGroup : {
      browsers: [
        { browser: "chromium"},
        { browser: "firefox"}
      ]
    }
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/features/**/*.feature',
    steps: [
      './tests/step_definitions/element.steps.js',
      './tests/step_definitions/home.steps.js'
    ]
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
    // event.dispatcher.on(event.test.before, test => {
    //   this.testName = test.title;
    // })
  },
  bootstrapAll: async function(){
    // event.dispatcher.on(event.test.before, test => {
    //   this.testName = test.title;
    // })
  }
}