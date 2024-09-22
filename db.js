const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const objectID=mongoose.Types.objectID;


const userSchema= new Schema({
    
    emai:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});
const adminSchema=new Schema({
  
    emal:{types:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});

const courseSchema=new Schema({

    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorID:objectID,

});

const purchaseSchema=Schema({
  
    userID:objectID,
    courseID:objectID,

});

const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.export={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}






