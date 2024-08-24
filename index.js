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
//using mongodb module
// const { MongoClient, ServerApiVersion } = require('mongodb');
// //const uri = "mongodb+srv://admin:<spinach>@atlascluster.g2mkg.mongodb.net/Tasks?retryWrites=true&w=majority&appName=AtlasCluster";
// const uri="mongodb+srv://admin:spinach@atlascluster.g2mkg.mongodb.net/Tasks?retryWrites=true&w=majority"
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
   
//     console.log("You are successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
//using mongoose


async function run(){
try{
await mongoose.connect(process.env.MONGO_URI)
console.log("Connected to mongodb sucessfully")
}
finally{}
}
run().catch((err)=>{console.error(err)})
