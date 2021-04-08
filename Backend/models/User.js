const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        
    },
    lastName:{
        type:String,
        
    },
    age:{
        type:String,
        
    },
    sex:{
        type:String,
        
    },
    phone:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],default:'user'
    },
    photo:{
        type:String,
        default:"uploads\\avatar.jpg"
    }
})

module.exports=mongoose.model('User',userSchema)