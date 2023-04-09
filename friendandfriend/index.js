require("dotenv").config();
const port = process.env.APP_PORT;

const express = require("express");
const hbs = require("hbs");
const app = express();
const generalRouters = require("./routers/generalRouters");
const postsRouter = require("./routers/postsRouter");


//ส่งข้อมูลมาทาง body HTML
app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");
//แชร์ static file ที่ต้องการใช้
app.use("/staticFolder", express.static("staticFolder"));

//call generalRouters Home
app.use("/", generalRouters);
app.use("/p", postsRouter);


app.listen(port, () =>{
    console.log(`Open http://localhost:${port}`)
});