const router =require("express").Router;
const {
    createPost,
    getAllPost, 
    getSinglePost, 
    updatePost,
    deletePost
} = require("./post.controller");

const postRouter = router();

postRouter.route("/").get(getAllPost).post(createPost);
postRouter
.route("/:postId")
.get(getSinglePost)
.patch(updatePost)
.delete(deletePost);

module.exports = { postRouter };
    