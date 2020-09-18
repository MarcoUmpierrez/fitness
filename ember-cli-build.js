'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/components/**/*.hbs',
      './app/pages/**/*.hbs',
    ],
    //whitelistPatterns: [/red$/],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        cacheExclude: [],
        cacheInclude: [/.*\.(css|scss)$/, /.tailwind\.js$/],
        plugins: [
          require('postcss-import'),
          require('tailwindcss')('./app/styles/tailwind.config.js'),
          ...isProduction ? [purgeCSS] : []
        ]
      }
    },
    svgJar: {
      sourceDirs: ['svgs', 'public/images/icons']
    },
    'ember-service-worker': {
      versionStrategy: 'every-build',
      enabled: isProduction
    },
    'asset-cache': {
      manual: [
        'https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css'
      ]
    },
    'ember-service-worker-update-notify': {
      pollingInterval: 1200000 // Default is 20min
    },
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'lib/images/logo.svg',
          outputFileName: 'logo-',
          convertTo: 'png',
          destination: 'assets/icons/',
          sizes: [32, 72, 96, 128, 144, 150, 152, 192, 280, 384, 512],
        },
      ],
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};