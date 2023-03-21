const express = require('express');
const db = require("../DataBase/dbShare");
const dayjs = require("dayjs")

const router = express.Router();


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
router.get("/:post_id", async (request, response) =>{
    const { post_id } = request.params;

    let onePost = null;
    let postComments = [];
    try{
        //Get one post 
        /*
        เข้าถึง Table post จากนั้นเลือกทั้งหมด ค้นหาเฉพาะ id == route post_id
        ทำแบบนี้เพราะเราคลิกเข้าไปดูโพสนั้น เราก็จะต้องเห็นโพสเดี่ยวๆ กับคอมเม้นในโพสนั้น
        */
        const onePost_tmp = await db.
            select("*")
            .from("post")
            .where("id", +post_id);
        onePost = onePost_tmp[0];  
        onePost.dataTimeText = dayjs(onePost.createdDate).format("DD MMM YYYY - HH:mm");

        //Get post comments 
         /*
        เข้าถึง Table comments
        เลือก postId ของ table ที่มีค่า == route post_id เพื่อดึง comment เฉพาะหน้านี้ออกมา
        */
        postComments = await db.
            select("*")
            .from("comments")
            .where("postId", +post_id);
        postComments = postComments.map(comment => {
            const dataTimeText = dayjs(comment.createdDate).format("DD MMM YYYY - HH:mm")
            return {...comment, dataTimeText};
        })
    }catch (err){
        console.log(`postsRouter Error -> ${err}`)
    }
    const customTitleId = !!onePost?.titlePost ? `${onePost.titlePost} | ` : `Not Found | `;
    response.render("postId", {onePost, postComments, customTitleId});
});

module.exports = router