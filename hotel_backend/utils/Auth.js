const jwt = require('jsonwebtoken');


const generateToken = async ({ id, time }) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: { time } })
}

export default generateToken