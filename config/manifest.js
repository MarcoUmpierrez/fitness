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
    background_color: "#44337A",
    //background_color: "transparent",
    prefer_related_applications: false,
    theme_color: "#E53E3E",
    icons: [
      {
        src: '/assets/icons/logo-32.png',
        sizes: '32x32',
        targets: ['favicon'],
      },
      {
        src: "/assets/icons/logo-72.png",
        sizes: "72x72"
      },
      {
        src: "/assets/icons/logo-96.png",
        sizes: "96x96"
      },
      {
        src: "/assets/icons/logo-128.png",
        sizes: "128x128"
      },
      {
        src: "/assets/icons/logo-144.png",
        sizes: "144x144"
      },
      {
        src: "/assets/icons/logo-152.png",
        sizes: "152x152"
      },
      {
        src: '/assets/icons/logo-150.png',
        element: 'square150x150logo',
        targets: ['ms'],
      },
      {
        src: "/assets/icons/logo-192.png",
        sizes: "192x192"
      },
      {
        src: '/assets/icons/logo-280.png',
        sizes: '280x280',
        targets: ['apple'],
      },
      {
        src: "/assets/icons/logo-384.png",
        sizes: "384x384"
      },
      {
        src: "/assets/icons/logo-512.png",
        sizes: "512x512"
      },
    ],
    ms: {
      tileColor: '#E53E3E'
    }
  };
}
