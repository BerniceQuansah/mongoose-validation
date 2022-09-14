const User = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    // generate token
    const token = jwt.sign(
        {id: user._id, email: user.email},
        'd37f668f2c2c8443f36aba2ded9f74ba640b1613ee3f5faedfc230adfa8c483b',
        {
            expiresIn: "7d",
        }
        );

        return {
            token,
            user,
        };

}

exports.register = async (req, res) => {
    const { email, password } = req.body;

    // checking to see if email already exists
    const emailExists = await User.findOne({email});
    if (emailExists) {
        return res.status(400).json({error: "Email already in use."});
    }

const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ ...req.body, password: hashedPassword }, );

    // generate token
    const token = generateToken(user);

    res.status(201).json({ token });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if(!user) {
       return res.status(400).json({msg: "Invalid credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({msg: "Invalid credentials"});
    }

    // generate token
    const token = generateToken(user);

    res.status(200).json({ token });
};