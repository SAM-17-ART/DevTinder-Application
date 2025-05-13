const express=require('express')

const app= express()

// app.use('/getInfo',(req,res)=>{
//     res.send("Hello from the Server")
// })

//This Line will be Read First
//Use method is used to read all kinds of the Http Requests
//So if the Route matches the request with the  getInfo pattern in the First go and use is used here then it will be listened First.
//For Example if the Request is such that /getInfo followed by any String then this route will be Listened. 

// app.get('/getInfo/:userId/:userName/:passWord',(req,res)=>{
//     console.log("User Params are",req.params)
//     res.send("Hello this is a Get Request")
// })

//In this way we can get the Parameters used in the get Request using the Colons.

//Dynamic Routing

// app.get('/getInfo/ac+b',(req,res)=>{
//     res.send("This is a Dyanamic Get Request")
// })

//Here + Sign Indicates that the c can be used indefinte in the Request.

app.post('/getInfo/hello',(req,res)=>{
    res.send("Hello this is a Post Request")
})


app.delete('/getInfo',(req,res)=>{
    res.send("Hello this is a Delete Request")
})


app.use('/getInfo',(req,res)=>{
    res.send("Hello from the Server")
})

app.listen(3000,()=>{
    console.log("Server is Listened Properly")
})

