export default function (req, res) {
  console.log(req.body)
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: "",
    },
    secure: true,
  })
  const mailData = {
    from: req.body.email,
    to:"",
    subject: `Message From ${req.body.firstName}+" "+ ${req.body.lastName}`,
    text: req.body.message ,
    html: `<div className="flex flex-col"> <h2>Name:</h2><p> ${req.body.firstName+ " "+ req.body.lastName}</p><h2>Email:</h2><p>${req.body.email}</p><h2>PhoneNO:</h2><p>${req.body.phoneNo}</p><h2>Service:</h2><p>${req.body.service}</p><h2>message:</h2><p>${req.body.message}</p></div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}