const mongoose=require('mongoose')

const weadataScheme=new mongoose.Schema({
    place:{type:String,required:true},
    temp:{type:String,required:true},
    wcondition:{type:String,required:true},
    humidity:{type:Number,required:true},
    cloud:{type:Number,required:true},
    windspeed:{type:Number},
    description:{type:String,required:true},

},{timestamps:true})

module.exports=mongoose.model('Weath2',weadataScheme)