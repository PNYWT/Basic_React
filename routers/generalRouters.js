const express = require('express');
const db = require("../DataBase/dbShare");
const dayjs = require("dayjs")

const router = express.Router();

//Routes Home
router.get("/", async (request, response) => {
    let allPosts = [];
    try{
        /*
        SELECT post.id as id, post.titlePost as title, post.userCreate as user, post.createdDate as createdDate,
        count(comments.id) as commentsCount
        FROM post
        left join comments
        on post.id = comments.postId
        group by post.id
        order by post.id DESC
        */
        allPosts = await db.select("post.id", "post.titlePost", "post.userCreate", "post.createdDate")
            .count("comments.id as commentsCount")
            .from("post")
            .leftJoin("comments", "post.id", "comments.postId")
            .groupBy("post.id")
            .orderBy("post.id", "desc");
        allPosts = allPosts.map(post => {
            const dataTimeText = dayjs(post.createdDate).format("DD MMM YYYY - HH:mm")
            return {...post, dataTimeText};
        })
    }catch (err){
        console.log(`generalRouters Error -> ${err}`)
    }
    response.render("home",{allPosts});
});

module.exports = router