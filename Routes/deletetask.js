const express=require('express')
const app=express()
const taskmodel=require('../Models/Todomodel')
const router=express.Router()


router.delete('/deletetask',async (request,response)=>{
try{
const dId=request.query.id
const result=await taskmodel.findByIdAndDelete(dId)
if(!result){
response.status(404).json("record not found")
}
else{
    response.status(204).send("record deleted")
}
}
catch(error){
response.json(error)
}
})
module.exports=router