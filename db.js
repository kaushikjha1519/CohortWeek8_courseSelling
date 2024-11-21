<<<<<<< HEAD
const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
=======
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
>>>>>>> e3c61411f17f5e5813b4a5d93d1233340d013636
    userModel,
    adminModel,
    courseModel,
    purchaseModel
<<<<<<< HEAD
}
=======
}






>>>>>>> e3c61411f17f5e5813b4a5d93d1233340d013636
