module.exports = function(grunt){

  grunt.initConfig({

    karma:{
      Spec:{
        configFile: 'karma-jenkinsunit.conf.js'
      }
    },
    photobox: {
    task : {
      options: {
        // Task-specific options go here.
        screenSizes : [ '600', '1000', '1200' ],
        urls        : [ 'https://www.w3schools.com/angular/angular_intro.asp', 'https://angularjs.org/' ]
      }
    }
  },
      protractor: {
          e2e: {
              options : {
                  configFile: 'Conffiles/conf_jenkins.js',
              }
          },
          debug: {
              options : {
                  configFile: 'Conffiles/conf.js',
                  keepAlive: false,
                  debug: true,
                  webdriverManagerUpdate: true
              }
          },
          AndroidTask: {
                  options:{
                      configFile: 'Conffiles/conf_android_web.js',
                      keepAlive: false
                  }
          },
          iOSTask:{
              options:{
                  configFile: 'Conffiles/conf_ios_web.js',
                  keepAlive: false
              }
          },
          apiTestusingjasmine:{
              options:{
                  configFile: 'Conffiles/confrequest.js',
                  keepAlive: false
              }
          }
      },
/*  protractor_webdriver: {
    your_target: {
      options: {
        path: '/usr/local/bin/',
        command: 'webdriver-manager start',
      }
    }
  },*/

      jenkins:{
      serverAddress: 'http://localhost:8080',
      pipelineDirectory: 'jenkins-pipeline'   // optional, default: 'pipeline'

      }

  });
//add grunt protractor npm tasks into grunt.

    grunt.loadNpmTasks('grunt-jenkins');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-size-report');
    grunt.loadNpmTasks('grunt-photobox');
  //  grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-selenium-webdriver');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('test', ['selenium_start','protractor:e2e','selenium_stop']);
    grunt.registerTask('e2e-test', ['protractor:e2e']);

};
