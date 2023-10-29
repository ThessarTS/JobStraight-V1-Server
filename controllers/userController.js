const { checkPass } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User } = require('../models/index')

class UserController {
    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            if (!email) {
                throw { name: 'email-blank' }
            }
            if (!password) {
                throw { name: 'password-blank' }
            }
            let user = await User.findOne({ where: { email } })
            if (!user) {
                throw { name: 'invalid-input' }
            }
            let validPass = checkPass(password, user.password)
            if (!validPass) {
                throw { name: 'invalid-input' }
            }
            let access_token = signToken({ id: user.id })

            res.json({ access_token })

        } catch (error) {
            next(error)
        }
    }

    static async register(req, res, next) {
        try {
            let input = req.body
            input.role = 'Admin'
            let newUser = await User.create(input)
            res.status(201).json({ id: newUser.id, email: newUser.email })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController