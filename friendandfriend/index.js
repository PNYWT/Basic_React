const express = require("express");
const hbs = require("hbs");
const app = express();
const generalRouters = require("./routers/generalRouters");
const postsRouter = require("./routers/postsRouter");

app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");

//call generalRouters Home
app.use("/", generalRouters);
app.use("/p", postsRouter);


app.listen(8888, () =>{
    console.log("Open http://localhost:8888")
});