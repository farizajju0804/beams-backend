module.exports = ({ env }) => ({
  host: env("HOST_DEV"),
  port: env.int("PORT_DEV"),
  url: env("BACKEND_URL_LOCAL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
