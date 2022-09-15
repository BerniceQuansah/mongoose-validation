const jwt = require("jsonwebtoken")

exports.authRequired = (req, res,next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(402).json({eror: "Please login "})
    }

    const token = authorization.split(" ")[1]
    if (!token) {
        return res.status(402).json({error: "Please login"});
    }

    const user = jwt.verify(
        token,
        'd37f668f2c2c8443f36aba2ded9f74ba640b1613ee3f5faedfc230adfa8c483b'
        );

        req.user = user;

    next();
};