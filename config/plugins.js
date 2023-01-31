module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "jere.20fit17@gct.ac.in",
          pass: "gct@1234",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "jere.20fit17@gct.ac.in",
        defaultReplyTo: "jere.20fit17@gct.ac.in",
      },
    },
  },
  // ...
});
