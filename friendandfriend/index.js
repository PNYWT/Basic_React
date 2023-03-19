const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");

// Home
app.get("/", (request, response) => {
    console.log(request.query);
    const {q, sortBy} = request.query;
    response.render("home",{q, sortBy});
});

// PostNew
app.get("/p/new", (request, response) =>{
    response.render("postNew");
});

// Create New Post by
app.post("/p/new", (request, response) =>{
    const {title} = request.body ?? {};
    response.send(`Submit create New Post -> title post is ${title}`);
});

// หน้าโพสที่กดดู
app.get("/p/:post_id", (request, response) =>{
    const {post_id} = request.params;
    response.render("postId", {post_id});
});

app.listen(8888, () =>{
    console.log("Open http://localhost:8888")
});