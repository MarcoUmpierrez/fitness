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
        src: "/assets/logos/logo-44x44.png",
        sizes: "44x44"
      },
      {
        src: "/assets/logos/logo-48x48.png",
        sizes: "48x48"
      },
      {
        src: "/assets/logos/logo-1240x600.png",
        sizes: "1240x600"
      },
      {
        src: "/assets/logos/logo-300x300.png",
        sizes: "300x300"
      },
      {
        src: "/assets/logos/logo-150x150.png",
        sizes: "150x150"
      },
      {
        src: "/assets/logos/logo-88x88.png",
        sizes: "88x88"
      },
      {
        src: "/assets/logos/logo-24x24.png",
        sizes: "24x24"
      },
      {
        src: "/assets/logos/logo-50x50.png",
        sizes: "50x50"
      },
      {
        src: "/assets/logos/logo-620x300.png",
        sizes: "620x300"
      },
      {
        src: "/assets/logos/logo-192x192.png",
        sizes: "192x192"
      },
      {
        src: "/assets/logos/logo-144x144.png",
        sizes: "144x144"
      },
      {
        src: "/assets/logos/logo-96x96.png",
        sizes: "96x96"
      },
      {
        src: "/assets/logos/logo-72x72.png",
        sizes: "72x72"
      },
      {
        src: "/assets/logos/logo-36x36.png",
        sizes: "36x36"
      },
      {
        src: "/assets/logos/logo-1024x1024.png",
        sizes: "1024x1024"
      },
      {
        src: "/assets/logos/logo-180x180.png",
        sizes: "180x180"
      },
      {
        src: "/assets/logos/logo-152x152.png",
        sizes: "152x152"
      },
      {
        src: "/assets/logos/logo-120x120.png",
        sizes: "120x120"
      },
      {
        src: "/assets/logos/logo-76x76.png",
        sizes: "76x76"
      },
      {
        src: '/assets/logos/logo-280x280.png',
        sizes: '280x280',
        targets: ['apple'],
      },
      {
        src: '/assets/logos/logo-32x32.png',
        sizes: '32x32',
        targets: ['favicon'],
      },
      {
        src: '/assets/logos/logo-150x150.png',
        element: 'square150x150logo',
        targets: ['ms'],
      }
    ],
    ms: {
      tileColor: '#E53E3E'
    }
  };
}
