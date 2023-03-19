const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");

const allPosts = [
    {id: 2, titlePost: "How to investment 101 ?", userCreate:"Oni", createdDate:"18 March 2023", commentsCount:999},
    {id: 1, titlePost: "How to be iOS Dev", userCreate:"Apple", createdDate:"19 March 2023", commentsCount:0}
]

//Routes Home
app.get("/", (request, response) => {
    response.render("home",{allPosts});
});

//Routes PostNew
app.get("/p/new", (request, response) =>{
    response.render("postNew");
});

//Routes Create New Post
app.post("/p/new", (request, response) =>{
    const {title} = request.body ?? {};
    response.send(`Submit create New Post -> title post is ${title}`);
});

// Routes หน้าโพสที่กดดู
app.get("/p/:post_id", (request, response) =>{
    const {post_id} = request.params;
    const onePost = allPosts.find(post => post.id === +post_id);
    const customTitleId = !!onePost?.titlePost ? `${onePost.titlePost} | ` : `Not Found | `;
    response.render("postId", {onePost, customTitleId});
});

app.listen(8888, () =>{
    console.log("Open http://localhost:8888")
});