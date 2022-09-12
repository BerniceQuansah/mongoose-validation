const Post = require("./post.model");

const getAllPost = async (req, res) => {
    const post = await Post.find({});
    res.status(200).json({post})
}

const createPost = async (req, res) => {
    const {title, body, published} = req.body;
    const post = await Post.create({
        title,
        body,
        published,
    })
    res.status(201).json({post})
}

module.exports = {
    getAllPost,
    createPost
}