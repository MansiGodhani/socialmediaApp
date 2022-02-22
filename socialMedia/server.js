const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
const mongoose = require('mongoose')
//const { create } = require('./models/usermodel')

mongoose
    .connect("mongodb://127.0.0.1:27017/social")
    .then(()=> console.log("mongodb connected .."))

const userModel = require('./models/usermodel')
const postModel =  require('./models/postmodel')

//registration
app.post('/api/registration', async(req,res)=>{
    const newuser= req.body;
    userModel.create(newuser);
    return res.json({msg:"registration successfully .."})

})

//login
app.post('/api/login',async(req,res) => {
    const uname = req.body.username
    const pswd = req.body.password
    const user = await userModel.findOne({username:uname,password:pswd})

    if(user){
        return res.json({msg:"login successfully...",user:user})
    }
    else{
        return res.json({msg:"login faild..."})
    }

})

//add post 
app.post('/api/addpost', async(req,res)=>{
    const newpost= req.body;
    postModel.create(newpost);
    return res.json({msg:"post successfully added .."})

})

//list post 
app.get('/api/listpost',async(req,res)=>{
    const postlist = await postModel.find({})
    if(postlist.length === 0)
    {
        return res.json({msg:"Post not found.."})
    }
    return res.json({post:postlist})
})

//delete post 
app.post('/api/deletepost',async(req,res)=>{
    const id = req.body.id
    console.log
    const deletepost = await postModel.findOneAndDelete({_id:id})
    if(deletepost)
    {
        return res.json({msg:"post deleted..."})
    }
    return res.json({msg:"Somthing worng ..."})
})


//update post 
app.post('/api/updatepost',async(req,res) => {
    console.log(req.body)
    const updatePost= await postModel.findOneAndUpdate({_id:req.body._id},{
        image:req.body.image,
        name:req.body.name,
        caption:req.body.caption},
        {new:true})
        if(updatePost){
            return res.json({msg:"update post successfully"})
        }
        return res.json({msg:"somthing wrong.."})
    })



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))