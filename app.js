//instalo modulo nativo express y lo guardo en una variable
const express= require("express");
const app= express();

//para dejar la carpeta public como estatica para partir de ahi 
const path = require("path")
const publicpath= path.resolve(__dirname, "./public")
app.use(express.static(publicpath));

//creo el puerto 
app.listen(3001, ()=> console.log("puerto HDC creado"));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html" ))
});

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/register.html" ))
});

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html" ))
});


