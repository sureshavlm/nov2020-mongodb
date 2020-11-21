const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = ''
sgMail.setApiKey(sendgridAPIKey);

module.exports.sendEmail = function(toEmail, username) {
    const msg = {
      to: toEmail,
      from: 'shetty.sharath@gmail.com',
      subject: 'Reistration Successful: ' + username,
      text: 'Sending Grid is an SMTP based protocol to send emails',
      html: '<div><b>Send Grid</b> Demo</div>'
  };

  sgMail.send(msg).then(() => {
      console.log('Message sent')
  }).catch((error) => {
      console.log(error.response.body)
      // console.log(error.response.body.errors[0].message)
  })
};

