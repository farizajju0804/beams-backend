module.exports = ({ env }) => ({
  host: env("HOST_DEV"),
  port: env.int("PORT_DEV"),
  url: env("BACKEND_DEV_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
