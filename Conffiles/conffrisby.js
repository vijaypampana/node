// An example configuration file.
exports.config = {

 //seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',


/*  suites: {

          ui_tests: '../specs/frisby_global_spec.js',
          // api_tests: '../specs/api/*_spec.js'
      },*/

  specs: ['../SpecFiles/frisby_global_spec.js'],

  // Options to be passed to Jasmine.
  onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get('http://jsonplaceholder.typicode.com');
    }
};
