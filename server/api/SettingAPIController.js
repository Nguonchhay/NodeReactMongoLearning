const ApiUtil = require('./../utils/apiUtil')
const mailHandler = require('./../config/mail')


const testSendEmail = (req, res) => {
    const email = req.body.email
    const isSend = mailHandler.sendMail(email, 'Testing Email', 'Great...your email is working.', '', false)
    return ApiUtil.makeResponse(
        res,
        'Testing email sending is ' + isSend
    )
}

module.exports = {
    testSendEmail
}