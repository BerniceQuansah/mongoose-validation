const { Schema, model } =require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlenght: [3]
    },
    body: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    likedby: [
        {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ]
});

module.exports = model("Post", postSchema);