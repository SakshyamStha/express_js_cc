const express = require('express');
const path = require('path');

const app = express();
// we use this app variable everywhere to create routes, apis, etc...

app.listen(8000, ()=> console.log("Server is running in port 8000"));


//setup static folder
app.use(express.static(path.join(__dirname, 'public')))


// app.get('/',(req,res)=>{
//     // res.send("k xaaa") 
//     // res.send({
//     //     message: "jserguisb gjkrbguwsb",
//     //     test: "hjgrbsb"
//     // }) 
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// } )
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// } )



let posts =[
    {
        id:1,
        title: 'Post 1'
    },
    {
        id:2,
        title: 'Post 2'
    },
    {
        id:3,
        title: 'Post 3'
    }
]

app.get('/api/posts', (req,res)=>{
    res.json(posts);
} )