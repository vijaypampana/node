// An example configuration file.
exports.config = {


    seleniumAddress: 'http://0.0.0.0:4723/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'SAFARI',
    'appium-version': '1.6',
    'platformName': 'IOS',
    'platformVersion': '10.3',
    'automationName':'XCUITEST',
    'deviceName': 'bf92e5ccd0ce489ff8f29900ca4c2ab73c7f4c1d'
   
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../SpecFiles/ios_web_spec.js'],

  baseUrl:'http://localhost:8000',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 800000000
  },

    onPrepare: function () {
        var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);
            wdBridge.initFromProtractor(exports.config);
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter
            ({
                dest: 'Results/AppiumiOS/screenshots',
                filename: 'Report.html'
            }));
      }



};