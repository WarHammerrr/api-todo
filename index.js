const express=require('express')
const app=express()
require('dotenv').config()
const mongoose=require('mongoose')

const addroute=require('./Routes/addtask')
const viewroute=require('./Routes/gettask')
const deleteroute=require('./Routes/deletetask')
const updateroute=require('./Routes/updatetask')

const PORT=process.env.port
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello beautiful people")
})
app.use('/',addroute)
app.use('/',viewroute)
app.use('/',deleteroute)
app.use('/',updateroute)
app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})

async function run(){
try{
await mongoose.connect(process.env.MONGO_URI)
console.log("Connected to mongodb sucessfully")
}
finally{}
}
run().catch((err)=>{console.error(err)})
