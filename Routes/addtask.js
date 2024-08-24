const express=require('express')
const app=express()
const router=express.Router()
const taskmodel=require('../Models/Todomodel')

router.post('/add',async (request,response)=>{
try{
 const taskdoc=new taskmodel({title:request.body.title,
description:request.body.description,
category:request.body.category,
quantity:request.body.quantity,
})
const saveddoc=await taskdoc.save()
response.status(201).json(saveddoc)
}
catch(error){
    response.json(error)
    console.error(error)
}
})
module.exports=router