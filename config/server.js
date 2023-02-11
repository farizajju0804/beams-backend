module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  url: env("BACKEND_DEV_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
