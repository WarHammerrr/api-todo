const express=require('express')
const app=express()
const router=express.Router()
const taskmodel=require('../Models/Todomodel')
router.get('/view',async(request,response)=>{
try{
    const taskslist= await taskmodel.find()
    response.status(201).json(taskslist)
    
}
catch(error){
    response.json(error)
}
})
module.exports=router