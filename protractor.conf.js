// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
var os = require('os');
const protractor = require("protractor");

const browser = protractor.browser;
const { SpecReporter } = require('jasmine-spec-reporter');

var dConnect = false;

// Known webdriver issue on linux where session won't start
if(os.platform() === 'linux') dConnect=true;

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  allScriptsTimeout: 600000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    loggingPrefs: {
      performance: 'ALL',
    },
    chromeOptions: {
      args: [
        "--disable-infobars",
        "--disable-gpu",
        "--no-sandbox",
        "--start-maximized",
       // "--headless",
        "--disable-extensions",
        "--log-level=3",
        '--test-type',
      ],
      perfLoggingPrefs: {
        enableNetwork: true,
      },
      w3c: false,
    }
  },

  SELENIUM_PROMISE_MANAGER: false,
  
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000000,
    print: function () { },
    stopSpecOnExpectationFailure: true,

  },


  directConnect: dConnect,

  async onPrepare() {

    const AllureReporter = require('jasmine-allure-reporter');

    // @ts-ignore
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    })); jasmine.getEnv().afterEach(function (done) {
      protractor.browser.takeScreenshot().then(function (png) {
        // @ts-ignore
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: false } }));
  }
};
