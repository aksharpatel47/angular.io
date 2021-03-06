module.exports = function(config){
  config.set({

    basePath : '..',

    // #docregion html
    files : [
    // #enddocregion html
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      // #docregion ng2
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      // #enddocregion ng2
      // #docregion ng2-http
      'node_modules/angular2/bundles/http.dev.js',
      // #enddocregion ng2-http
      'test/karma_test_shim.js',
      {pattern: 'app/js/**/*.js', included: false, watched: true},
      {pattern: 'test/unit/**/*.js', included: false, watched: true},
      // #docregion ng2-testing
      'node_modules/angular2/bundles/testing.js',
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      // #enddocregion ng2-testing

      // #docregion html
      {pattern: 'js/**/*.html', included: false, watched: true}
    ],

    proxies: {
      // required for component assests fetched by Angular's compiler
      "/js/": "/base/app/js"
    },
    // #enddocregion html

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    logLevel: 'LOG_DEBUG'

  });
};
