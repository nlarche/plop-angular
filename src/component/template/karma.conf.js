var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
  config.set({

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '{{dashCase name}}.js',
      '{{dashCase name}}.test.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],    

    preprocessors: {
      './{{dashCase name}}.js': ['webpack']
    },
    
     webpack: webpackConfig,

  });
};