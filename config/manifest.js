'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    lang: "English",
    name: "E-Fitness",
    short_name: "eFitness",
    description: "Application to keep track of weight and training sessions",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    //background_color: "#44337A",
    background_color: "transparent",
    related_applications: "",
    prefer_related_applications: "false",
    theme_color: "#E53E3E",
    icons: [
      {
        src: "/assets/logo/logo-180x180.png",
        sizes: "180x180"
      },
      {
        src: "/assets/logo/logo-512x512.png",
        sizes: "512x512"
      },
      {
        src: '/assets/logo/logo-280x280.png',
        sizes: '280x280',
        targets: ['apple'],
      },
      {
        src: '/assets/logo/logo-32x32.png',
        sizes: '32x32',
        targets: ['favicon'],
      },
      {
        src: '/assets/logo/logo-150x150.png',
        element: 'square150x150logo',
        targets: ['ms'],
      }
    ],
    ms: {
      tileColor: '#E53E3E'
    }
  };
}
