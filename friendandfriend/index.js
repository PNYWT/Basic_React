const express = require("express");
const app = express();

//callback
app.get("/", (request, response) => {
    response.send("Hello World Express")
});

app.listen(8888, () =>{
    console.log("Open http://localhost:8888")
});