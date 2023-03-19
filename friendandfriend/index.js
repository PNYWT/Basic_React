const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

//callback
app.get("/", (request, response) => {
    console.log(request.query)
    const {q, sortBy} = request.query;
    response.send(`Hello request.query -> q=${q}, photo_id=${sortBy}`)
});

app.get("/p/new", (request, response) =>{
    response.send("Read New Post")
});

app.post("/p/new", (request, response) =>{
    console.log(request.body)
    const {title} = request.body ?? {};
    response.send(`Submit create New Post -> title post is ${title}`)
});

///p/:ชื่อตัวแปร id ที่ต้องการรับเข้ามาค้นหา เช่น โพสที่เท่าไหร่ก็อาจจะตั้งเป็น post_id รูปที่เท่าไหร่ร่ก็อาจจะตั้งเป็น photo_id อะไรประมาณนั้น
app.get("/p/:post_id", (request, response) =>{
    console.log(request.params)
    const {post_id} = request.params
    response.send(`Hello params -> post_id is ${post_id}`)
});

app.listen(8888, () =>{
    console.log("Open http://localhost:8888")
});