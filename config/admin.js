const GoogleStrategy = require("passport-google-oauth2");
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    providers: [
      {
        uid: "google",
        displayName: "Google",
        icon: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png",
        createStrategy: (strapi) =>
          new GoogleStrategy(
            {
              clientID: env("GOOGLE_CLIENT_ID"),
              clientSecret: env("GOOGLE_CLIENT_SECRET"),
              scope: [
                "https://www.googleapis.com/auth/userinfo.email",
                "https://www.googleapis.com/auth/userinfo.profile",
              ],
              callbackURL:
                strapi.admin.services.passport.getStrategyCallbackURL("google"),
            },
            (request, accessToken, refreshToken, profile, done) => {
              done(null, {
                email: profile.email,
                firstname: profile.given_name,
                lastname: profile.family_name,
              });
            }
          ),
      },
    ]
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
