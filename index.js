const express = require("express");
const postsRouter = require("./modules/posts/post.route");
const {dbConnect} = require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use("/posts", postsRouter);


async function start() {
    await dbConnect ();


app.listen(4000, () => {
    console.log("Server is running on https://localhost:4000")
});
}

start()