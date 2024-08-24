
const mongoose=require('mongoose')
const taskschema=new mongoose.Schema({
title:String,
description:String,
category:String,
quantity:Number
})

const taskmodel=mongoose.model('taskcollection',taskschema)
module.exports=taskmodel