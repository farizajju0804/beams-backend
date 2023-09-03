module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        // host: "smtp.gmail.com",
        // port: 587,
        // auth: {
        //   user: "jere.20fit17@gct.ac.in",
        //   pass: "gct@1234",
        apiKey:env('SENDGRID_API_KEY')
        // },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "info@beams.world",
        defaultReplyTo: "info@beams.world",
      },
    },
  },
  // ...
});
