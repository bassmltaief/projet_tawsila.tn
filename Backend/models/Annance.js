const mongoose=require('mongoose')
const Schema=mongoose.Schema

const annanceSchema=new Schema({

    point_depart:{
        type:String,
        required:true
    },
    point_darriver:{
        type:String,
        required:true
    },
    date_depart:{
        type:Date,
        
    },
    descreption:{
        type:String
    },
    Nbr_place:{
        type:Number,
        require:true
    },
    voiture:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    phone:{
        type:String,
        required:true
    
    }

})

module.exports=mongoose.model('Annance',annanceSchema)