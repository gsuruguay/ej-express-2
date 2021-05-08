const express = require("express");
const app = express();

app.get("/",function(req, res) {
    res.sendFile(__dirname+"/index.html")
})

app.listen(3456, function(){
    console.log("Escuchando en puerto 3456...");
})