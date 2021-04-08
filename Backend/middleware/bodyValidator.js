const { body, validationResult } = require('express-validator')

const registerRules = () => [
    body('name', 'name is required').notEmpty(),
    body('lastName', 'last Name is required').notEmpty(),
    body('age', 'age is required').notEmpty(),
    body('sex', 'sex is required').notEmpty(),
    body('phone', 'phone is required').notEmpty(),
    body('photo', 'photo is required'),
    body('email', 'email is not valid').isEmail(),
    body('password', 'the password should contain at least 6 characters').isLength({ min: 6, max: 20 })
]

const loginRules = () => [
    body('email', 'email is not valid').isEmail(),
    body('password', 'the password should contain at least 6 characters').isLength({ min: 6, max: 20 })
]

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(  errors.array().map(err=>({msg:err.msg})) );
    }else{
        next()
    }

}


module.exports = { registerRules, loginRules , validator }