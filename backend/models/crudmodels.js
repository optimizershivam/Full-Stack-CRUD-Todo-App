const mongoose=require("mongoose")

const crudschema=new mongoose.Schema({
    title:{type:String,required:true}
})

const CrudModel=mongoose.model("merncrud",crudschema)

module.exports=CrudModel