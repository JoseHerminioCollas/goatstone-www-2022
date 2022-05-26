require('dotenv').config();
const path = require('path');
const express = require('express')
const nodemailer = require('nodemailer');

const app = express();
const sendMail = (body) => {
   var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
         user: process.env.MAIL_USER,
         pass: process.env.PASSWORD
      }
   });
   const mailOptions = {
      from: 'jc@goatstone.com', // Sender address
      to: 'jc@goatstone.com', // List of recipients
      subject: 'Goatstone site mail', // Subject line
      text: `${body.email} : ${body.name} :  ${body.message}`, // Plain text body
   };
   transport.sendMail(mailOptions, function (err, info) {
      if (err) {
         console.log(err)
      } else {
         console.log(info);
      }
   });
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.route("/mail").get(function (req, res) {
   var options = {
      root: path.join(__dirname)
   };
   res.sendFile('mail.html', options)
});
app.post('/mail', (req, res) => {
   console.log(req)
   sendMail(req.body)
   var options = {
      root: path.join(__dirname)
   };
   res.sendFile('mail.html', options)
})
app.listen(3001, () => { console.log(`Listening on port 3001`); });
