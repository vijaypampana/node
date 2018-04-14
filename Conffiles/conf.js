var AllureReporter = require('jasmine-allure-reporter');
var now = new Date();
report_name = 'Report-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();
logfile_name = 'results-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();
exports.config = {

  //seleniumServerJar: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
          'prefs': {
              'credentials_enable_service': false,
              'profile': {
                  'password_manager_enabled': false
              }
          }
      }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../SpecFiles/takaholding_spec.js'],
  specs: ['../SpecFiles/istock_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {

    defaultTimeoutInterval: 5000000
  },
//reporting
    onPrepare: function () {
          browser.driver.manage().window().maximize();
          var findRemoveSync = require('find-remove');
          var result = findRemoveSync('../LastBuild/TestResult', {extensions: ['.png','.xml']});
         jasmine.getEnv().addReporter(new AllureReporter({

         resultsDir: '../Target/'+report_name+'/'+logfile_name

            }));
         jasmine.getEnv().afterEach(function(done){
         browser.takeScreenshot().then(function (png) {
         allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')()
        done();
      });
    });
  },
    onComplete: function () {

      var process = require('process');
      var path = require('path');
      var ncp = require('ncp').ncp;
      const exec = require('child_process').exec;
      var srcPath = path.dirname('../Target/'+report_name+'/'+logfile_name+'/.*'); //current folder
      var destPath = '../Target/LastBuild/TestResult'; //Any destination folder
      ncp(srcPath, destPath, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('Copying files complete.');
      });
      process.chdir('/Users/cts/Documents/Protractorwithunitapi/Target/'+report_name);
      exec('allure generate '+logfile_name, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        else {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);

        }

      });
  }
}
