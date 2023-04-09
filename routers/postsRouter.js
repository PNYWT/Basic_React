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
    await db
      .insert({ titlePost, contentText, userCreate, createdDate: new Date() })
      .into("post");
  } catch (error) {
    console.error("/new ----->" + error)
    let errorMsg = "connection error";
    if (error.message === "Please complete the information") {
      errorMsg = error.message;
    } else if (error.message === "Please accept policy") {
      errorMsg = error.message;
    }
    // console.log(`errorMsg -> ${errorMsg}`);
    //ถ้ากรอกไม่ครบหรือไม่ได้ accept policy ให้เตะกลับไป หน้าสร้างโพส + error + ข้อมูลที่ใส่มา กลับไปด้วย
    return response.render("postNew", {
      errorMsg,
      values: { titlePost, contentText, userCreate },
    });
  }
  //ถ้า insert สำเร็จให้เตะไปหน้า postNewSuccess, การจะเตะไปได้ต้องมี router หน้านั้นก่อน และต้องมีไฟล์ .hbs หน้าที่จะเตะไปด้วย
  response.redirect("/p/new/done");
});

router.get("/new/done", (request, response) => {
  response.render("postNewSuccess");
});

// Routes หน้าโพสที่กดดู
async function getPostAndComments(postId) {
  let onePost = null;
  let postComments = [];
  try {
    //Get one post
    /*
        เข้าถึง Table post จากนั้นเลือกทั้งหมด ค้นหาเฉพาะ id == route post_id
        ทำแบบนี้เพราะเราคลิกเข้าไปดูโพสนั้น เราก็จะต้องเห็นโพสเดี่ยวๆ กับคอมเม้นในโพสนั้น
        */
    const onePost_tmp = await db.select("*").from("post").where("id", +postId);
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
      .where("postId", +postId)
      .orderBy("id", "asc");
    postComments = postComments.map((comment) => {
      const dataTimeText = dayjs(comment.createdDate).format(
        "DD MMM YYYY - HH:mm"
      );
      return { ...comment, dataTimeText };
    });
  } catch (err) {
    console.error(`postsRouter Error /:post_id -> ${err}`);
  }

  const customTitleId = !!onePost?.titlePost
    ? `${onePost.titlePost} | `
    : `Not Found | `;
  return { onePost, postComments, customTitleId };
}

router.get("/:post_id", async (request, response) => {
  const { post_id } = request.params;
  const postAndCommentsData = await getPostAndComments(post_id);
  response.render("postId", postAndCommentsData);
});

//สร้าง Comment ใหม่ ในหน้าโพสที่กดดู
router.post("/:post_id/comments", async (request, response) => {
  const { post_id } = request.params;
  const { contentText, userCreate, accepted } = request.body ?? {};

  try {
    // Validations
    if (!contentText || !userCreate) {
      throw new Error("Please complete the content");
    } else if (accepted == undefined || accepted != "on") {
      throw new Error("Please accept policy");
    }
    //Create comments insert to db
    await db.insert({content: contentText, userCreate, createdDate: new Date(), postId: +post_id}).into("comments");
  } catch (error) {
    console.error("/:post_id/comments ----->" + error)
    let errorMsg = "Comment error";
    if (error.message === "Please complete the content") {
      errorMsg = error.message;
    } else if (error.message === "Please accept policy") {
      errorMsg = error.message;
    }
    // Get post and comments
    //ถ้ากรอกไม่ครบหรือไม่ได้ accept policy ให้เตะกลับไป โพสที่กดดูเหมือนเดิม + error + ข้อมูลที่ใส่มา กลับไปด้วย
    const postData = await getPostAndComments(post_id);
    // ...postData คือการส่งข้อมูลทั้งหมดไป ซึ่งตัวนี้ได้มาจากโพสหน้าที่เรากดดู สร้างเป็น Function getPostAndComments
    return response.render("postId", {
      ...postData,
      errorMsg,
      commentValues: { contentText, userCreate },
    });
  }
  //เตะกลับไปหน้าโพสที่กดดูเหมือนเดิม
  response.redirect(`/p/${post_id}`);
});

module.exports = router;
