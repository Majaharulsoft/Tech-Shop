const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        description:{type:String,},
        type:{type:String,},
      },
    {timestamps:true,versionKey:false}
)
const LegalModel=mongoose.model('legals',DataSchema)
module.exports=LegalModel
