const Post = require("./post.model");

const verifyAuthor = async (req, res) => {
    let post = await Post.findById(postId);
    if (post_id.toString() !== user.req.id) {
            return res
            .status(406)
            .json({error: "You are not permitted to perform this operation"});
        }
};

const getAllPost = async (req, res) => {
    const post = await Post.find({});
    res.status(200).json({post})
};

const getAllPostsByUser = async (req, res) => {
    const posts = await Post.find({ author: req.user.id });
    res.status(200).json({ posts });
};

const createPost = async (req, res) => {
    const {title, body, published} = req.body;
    const post = await Post.create({
        title,
        body,
        published,
        author: req.user.id,
    });
    res.status(201).json({ post });
};

const getSinglePost = async (req,res) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    res.status(200).json({ post });
};

const updatePost = async (req, res) => {
    const { postId } = req.params;

//checks
await verifyAuthor();


post = await Post.findByIdAndUpdate(
    postId, 
    {...req.body},
    { new: true }
    );
    res.status(200).json({ post });
};

const deletePost = async (req, res) => {
    const { postId } = req.params;

    await verifyAuthor();
    
    await Post.findByIdAndDelete(postId);
    
    res.status(200).json({ msg: "Post deleted successfully" });
};

module.exports = {
    getAllPost,
    createPost,
    getSinglePost,
    updatePost,
    deletePost
}