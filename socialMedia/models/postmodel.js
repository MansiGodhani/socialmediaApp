const mongoose = require('mongoose')

const postSchema =  mongoose.Schema({
    image:String,
    name:String,
    caption:String

})
const postModel = mongoose.model('post',postSchema,'post')

module.exports=postModel;