const { body, validationResult } = require('express-validator/check')

exports.validate = method => {
    switch (method) {
        case 'register': {
            return [
                body('fullName', "FullName does not exist").exists(),
                body('email', 'Invalid email format').exists().isEmail(),
                body('password', 'Password must be at least 8 characters').exists().isLength({min: 8, max: 255}),
                body('confirmPassword', 'Comfirm password ')
            ]
        }
    }
}

exports.register = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({erros: errors.array()})
            return
        }

        const { fullName, email, password, confirmPassword } = req.body
        res.json({
            fullName, email, password, confirmPassword
        })
    } catch(err) {
        return next(err)
    }
}