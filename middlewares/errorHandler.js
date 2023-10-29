function errorHandler(err, req, res, next) {
    let stat = 500
    let message = 'Internal server error'

    console.log(err);
    if (err.name == 'email-blank') {
        stat = 400
        message = 'Email required'
    }
    else if (err.name == 'password-blank') {
        stat = 400
        message = 'Password required'
    }
    else if (err.name == 'invalid-input') {
        stat = 401
        message = 'Invalid Email / Password'
    }
    else if (err.name == 'unauthenticated' || err.name == 'JsonWebTokenError') {
        stat = 401
        message = 'Invalid token'
    }

    res.status(stat).json({ message })
}

module.exports = errorHandler