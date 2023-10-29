const bcrypt = require('bcryptjs')

const hashPass = (password) => {
    return bcrypt.hashSync(password, 8)
}

const checkPass = (password, hashed) => {
    return bcrypt.compareSync(password, hashed)
}

module.exports = {
    hashPass,
    checkPass
}