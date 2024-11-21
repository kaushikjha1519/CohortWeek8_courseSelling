<<<<<<< HEAD
require('dotenv').config()
console.log(process.env.MONGO_URL)
const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("listening on port 3000")
}

main()
=======
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


const express=require("express");

const mongoose =require("mongoose");

const {useRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");

const {adminRouter}=require("./routes/admin");
const course = require("./routes/course");

const app =express();

app.use("/api/v1/user",useRouter);

app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

app.listen(3000);

async function main(){

   await mongoose.connect("mongodb+srv://admin:Kaushik%401519@cluster0.iod9b.mongodb.net/coursera-app");
   app.listen(3000);
   console.log("listening on port 3000");
}
>>>>>>> e3c61411f17f5e5813b4a5d93d1233340d013636
