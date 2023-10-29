const { verifyToken } = require("../helpers/jwt")
const { User } = require('../models/index')

async function authentication(req, res, next) {
    try {
        let { access_token } = req.headers
        if (!access_token) {
            throw { name: 'unauthenticated' }
        }
        const payload = await verifyToken(access_token)
        let findUser = await User.findByPk(payload.id)
        if (!findUser) {
            throw { name: 'unauthenticated' }
        }
        req.user = { id: findUser.id }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication