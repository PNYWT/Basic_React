const express = require('express');

const router = express.Router();

const allPosts = [
    {id: 2, titlePost: "How to investment 101 ?", userCreate:"Oni", createdDate:"18 March 2023", commentsCount:999},
    {id: 1, titlePost: "How to be iOS Dev", userCreate:"Apple", createdDate:"19 March 2023", commentsCount:0}
];

//Routes PostNew
router.get("/new", (request, response) =>{
    response.render("postNew");
});

//Routes Create New Post
router.post("/new", (request, response) =>{
    const {title} = request.body ?? {};
    response.send(`Submit create New Post -> title post is ${title}`);
});

// Routes หน้าโพสที่กดดู
router.get("/:post_id", (request, response) =>{
    const {post_id} = request.params;
    const onePost = allPosts.find(post => post.id === +post_id);
    const customTitleId = !!onePost?.titlePost ? `${onePost.titlePost} | ` : `Not Found | `;
    response.render("postId", {onePost, customTitleId});
});

module.exports = router