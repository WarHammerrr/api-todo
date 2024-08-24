const express=require('express')
const router=express.Router()
const taskmodel=require('../Models/Todomodel')
const func=async function(request,response){
    try{
        const id=request.query.id
        const uptask=({
            title:request.body.title,
            description:request.body.description,
category:request.body.category,
quantity:request.body.quantity
        })
        const result=await taskmodel.findByIdAndUpdate(id,uptask)
        response.status(201).json("record updated")
    }
    catch(error){
response.json(error)
    }
}
router.post('/update',func)

module.exports=router