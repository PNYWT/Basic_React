const express = require("express");
const db = require("../DataBase/dbShare");
const dayjs = require("dayjs");

const router = express.Router();

//Routes PostNew
router.get("/new", (request, response) => {
  response.render("postNew");
});

//Routes Create New Post
router.post("/new", async (request, response) => {
  const { titlePost, contentText, userCreate, accepted } = request.body ?? {};
  try {
    // Validations
    if (!titlePost || !contentText || !userCreate) {
      throw new Error("Please complete the information");
    } else if (accepted == undefined || accepted != "on") {
      throw new Error("Please accept policy");
    }

    //Create post insert to db
    await db.insert({titlePost, contentText, userCreate}).into("post")
  } catch (error) {
    // console.log(`postsRouter Error /new -> ${error}`);
    let errorMsg = "connection error";
    if (error.message === "Please complete the information"){
        errorMsg = error.message
    }else if (error.message === "Please accept policy"){
        errorMsg = error.message
    }
    // console.log(`errorMsg -> ${errorMsg}`);
    //ถ้ากรอกไม่ครบหรือไม่ได้ accept policy ให้เตะกลับไป หน้าสร้างโพส + error + ข้อมูลที่ใส่มา กลับไปด้วย
    return response.render("postNew", { errorMsg, values: {titlePost, contentText, userCreate} });
  }
  //ถ้า insert สำเร็จให้เตะไปหน้า postNewSuccess, การจะเตะไปได้ต้องมี router หน้านั้นก่อน และต้องมีไฟล์ .hbs หน้าที่จะเตะไปด้วย
  response.redirect("/p/new/done");
});

router.get("/new/done", (request, response) => {
    response.render("postNewSuccess");
});

// Routes หน้าโพสที่กดดู
router.get("/:post_id", async (request, response) => {
  const { post_id } = request.params;

  let onePost = null;
  let postComments = [];
  try {
    //Get one post
    /*
        เข้าถึง Table post จากนั้นเลือกทั้งหมด ค้นหาเฉพาะ id == route post_id
        ทำแบบนี้เพราะเราคลิกเข้าไปดูโพสนั้น เราก็จะต้องเห็นโพสเดี่ยวๆ กับคอมเม้นในโพสนั้น
        */
    const onePost_tmp = await db.select("*").from("post").where("id", +post_id);
    onePost = onePost_tmp[0];
    onePost.dataTimeText = dayjs(onePost.createdDate).format(
      "DD MMM YYYY - HH:mm"
    );

    //Get post comments
    /*
        เข้าถึง Table comments
        เลือก postId ของ table ที่มีค่า == route post_id เพื่อดึง comment เฉพาะหน้านี้ออกมา
        */
    postComments = await db
      .select("*")
      .from("comments")
      .where("postId", +post_id);
    postComments = postComments.map((comment) => {
      const dataTimeText = dayjs(comment.createdDate).format(
        "DD MMM YYYY - HH:mm"
      );
      return { ...comment, dataTimeText };
    });
  } catch (err) {
    console.log(`postsRouter Error /:post_id -> ${err}`);
  }
  const customTitleId = !!onePost?.titlePost
    ? `${onePost.titlePost} | `
    : `Not Found | `;
  response.render("postId", { onePost, postComments, customTitleId });
});

module.exports = router;
