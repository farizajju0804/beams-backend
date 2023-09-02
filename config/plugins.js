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
        defaultFrom: "moha.20fit28@gct.ac.in",
        defaultReplyTo: "moha.20fit28@gct.ac.in",
      },
    },
  },
  // ...
});
