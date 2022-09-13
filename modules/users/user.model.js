const { Schema, model } =require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
},
    password: {
        type: String,
        required: true,
        minLenght: [6, "password should be at least 6 characters."],
    },
});

module.exports = model("User", userSchema);