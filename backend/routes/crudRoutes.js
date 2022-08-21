const express=require("express")

const CrudModel=require("../models/crudmodels")

const crudRoute=express.Router()

crudRoute.post("/create",async(req,res)=>{
    const {title}=req.body
    const new_crud=new CrudModel({title})
    await new_crud.save()
    res.send({"message":"data added succesfully",new_crud})
})

crudRoute.delete("/edit/:crudId",async(req,res)=>{
    const {crudId}=req.params
    await CrudModel.findOneAndDelete({_id:crudId})
    return res.send({"message" : "data successfully deleted"})
})

crudRoute.patch("/edit/:crudId",async(req,res)=>{
    const {crudId}=req.params
    await CrudModel.findOneAndUpdate({_id:crudId},req.body,{new:true})
    return res.send({"message" : "data successfully updated"})
})

crudRoute.get("/",async(req,res)=>{
    
    let data= await CrudModel.find()
    return res.send({"message" : "all data",data})
})

crudRoute.get("/edit/:crudId",async(req,res)=>{
    const {crudId}=req.params
    console.log('crudId:', crudId)
    
    let data= await CrudModel.find({_id:crudId})
    
    return res.send({"message" : "one data",data})
})

module.exports=crudRoute