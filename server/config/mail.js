require('dotenv').config()
const sgMail = require('@sendgrid/mail');


const sendMail = (to, subject, body, from = '', isHtmlFormat = true) => {
    let mailOptions = {to, subject, from}
    if (isHtmlFormat) {
        mailOptions.html = body
    } else {
        mailOptions.text = body
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const result = sgMail.send(mailOptions).then(res => {
        console.log(res)
    })
    console.log(result)

    return result
}

module.exports = {
    sendMail
}