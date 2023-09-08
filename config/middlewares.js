module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:1337",
        "http://localhost:3000",
        "http://example2",
        "https://king-prawn-app-hq64l.ondigitalocean.app",
        "https://www.beams.world",
        "https://beams-frontend.vercel.app"

      ],
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
