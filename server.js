//import express module
var express = require('express')


var app = express()
var port = 9000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.get('/users/:name',(req,res)=>{
    var userName = req.params.name;
    res.send("Hello,${user/Name}!")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/reload',(req,res)=>{
    res.send("Reload Page")
})

app.listen(port,()=>{
    console.log('server running')
})