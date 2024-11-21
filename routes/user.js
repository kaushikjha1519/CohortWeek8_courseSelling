const { Router } = require("express");
<<<<<<< HEAD
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const  { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB

    // TODO: Put inside a try catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})

userRouter.post("/signin",async function(req, res) {
    const { email, password } = req.body;

    // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await userModel.findOne({
        email: email,
        password: password
    }); //[]

    if (user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        // Do cookie logic

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

userRouter.get("/purchases", userMiddleware, async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
=======

const userRouter = Router();

userRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post("/signin", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "signup endpoint"
>>>>>>> e3c61411f17f5e5813b4a5d93d1233340d013636
    })
})

module.exports = {
    userRouter: userRouter
}