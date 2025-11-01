const express = require('express');
const path = require('path');

const app = express();
// we use this app variable everywhere to create routes, apis, etc...

app.listen(8000, ()=> console.log("Server is running in port 8000"));

app.get('/',(req,res)=>{
    // res.send("k xaaa") 
    // res.send({
    //     message: "jserguisb gjkrbguwsb",
    //     test: "hjgrbsb"
    // }) 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
} )
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
} )