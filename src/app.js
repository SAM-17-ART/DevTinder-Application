const express=require('express')

const app= express()

app.use('/getInfo',(req,res)=>{
    res.send("Hello from the Server")
})

app.listen(3000,()=>{
    console.log("Server is Listened Properly")
})

