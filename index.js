/*const express=require('express');

const mongoose=require('mongoose');


const app =express();
app.use(express.json());


/*app.post("/user/signup", function(req,res){

   res.json({
     message :"signup endpoint"
   })
})

app.get("/user/signin", function(req,res){
    
    res.json({
        message:"signin endpoint"
    })

})

app.post("/user/purchase",function(req,res){

    res.json({
        message:""
    })

})

app.post("/course/purchase",function(req,res){

    res.json({
        message:""
    })

})

app.post("/course/purchasePreview",function(req,res){

    res.json({
        message:""
    })

})


app.listen(3000);*/


const express = require("express");
const { userRouter } = require("./routes/user");
const { createCourseRoutes } = require("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000);