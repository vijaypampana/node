exports.config = {
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumServerJar: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar',
  getPageTimeout: 6000000,
  allScriptsTimeout: 5000000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    '../features/test.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: ['../features/step_definitions/my_step_definitions.js','../support/*.js'],
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  },
  

  OnPrepare: function()
  {
   browser.ignoreSynchronization = true;
   },

onComplete: function () {
var shell = require('shelljs');
var shell = require('./shellHelper');
var process = require('process');
var path = require('path');
var ncp = require('ncp').ncp;

var response=require('../support/reporter.js');

var srcPath = path.dirname('../Target/'+response.report_name+'/'+response.logfile_name+'/.*'); //current folder
var destPath = '../LastBuild/TestResult'; //Any destination folder
//console.log(`Current directory: ${process.cwd()}`);
console.log('Copying files...');
ncp(srcPath, destPath, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copying files complete.');
});

process.chdir('/Users/cts/Documents/Protractorwithunitapi/Target/'+ response.report_name);
console.log('Changed directory...');
console.log("....."+process.cwd());
       shell.series([
    'allure generate '+response.logfile_name,  
], function(err){
   console.log('executed many commands in a row'); 
});

  }
};
