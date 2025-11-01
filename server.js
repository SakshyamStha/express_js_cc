const express = require('express');

const app = express();
// we use this app variable everywhere to create routes, apis, etc...

app.listen(8000, ()=> console.log("Server is running in port 8000"));

app.get('/',(req,res)=>{
    // res.send("k xaaa") 
    res.send({
        message: "jserguisb gjkrbguwsb",
        test: "hjgrbsb"
    }) 
} )