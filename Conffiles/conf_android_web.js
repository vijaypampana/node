exports.config = {
    seleniumAddress: 'http://0.0.0.0:4723/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'appium-version': '1.5.3',
    'platformName': 'android',
    'plateformVersion': '6.0',
    'deviceName': '32085ddc0f5e7177'
  },

  framework: 'jasmine',

  specs: ['../SpecFiles/android_web_spec.js'],


  baseUrl:'http://localhost:8000',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 3000000
  },

    onPrepare: function () {
      var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
      var wd = require('/usr/local/bin/node_modules/wd'),
          protractor = require('protractor'),
          wdBridge = require('/usr/local/bin/node_modules/wd-bridge')(protractor, wd);
          wdBridge.initFromProtractor(exports.config);
          jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
              dest: 'Results/AppiumiOS/screenshots',
              filename: 'Report.html'
          }));}
};