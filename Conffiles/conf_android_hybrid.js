// An example configuration file.
exports.config = {
  //directConnect: true,

  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': '',
    'appium-version': '1.5.3',
    'platformName': 'android',
    'plateformVersion': '5.0',
    'deviceName': '32085ddc0f5e7177',
    'appPackage': 'io.appium.gappium.sampleapp',
     'appActivity': '.HelloGappium',
     'autoWebview' :true,
     'autoWebviewTimeout': 10000

  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec_android_hybrid.js'],

  baseUrl:'http://localhost:8000',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

    onPrepare: function () {

        var wd = require('/usr/local/bin/node_modules/wd'),
            protractor = require('protractor'),
            wdBridge = require('/usr/local/bin/node_modules/wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);

       
      }



};