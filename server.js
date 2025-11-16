const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();
// we use this app variable everywhere to create routes, apis, etc...

app.listen(8000, ()=> console.log(`Server is running in port ${port}`) );


//setup static folder
app.use(express.static(path.join(__dirname, 'public')))

//app

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

// get all posts
app.get('/api/posts', (req,res)=>{
    const limit = parseInt(req.query.limit) || posts.length;
    if(!isNaN(limit) && limit > 0){
        const limitedPosts = posts.slice(0, limit);
        res.json(limitedPosts);
    }else{
        res.json(posts);
    }
});


// get single post dynamically by id
app.get('/api/posts/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if(post){
        res.status(200).json(post);
    }else{
        res.status(404).json({message: `Post not found with id ${id}`});
    }
});