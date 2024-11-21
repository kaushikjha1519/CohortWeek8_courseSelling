const { Router } = require("express");
<<<<<<< HEAD
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    // should check that the user has actually paid the price
    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
})

courseRouter.get("/preview", async function(req, res) {
    
    const courses = await courseModel.find({});

    res.json({
        courses
=======
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
    // you would expect the user to pay you money
    res.json({
        message: "signup endpoint"
    })
})

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "course preview endpoint"
>>>>>>> e3c61411f17f5e5813b4a5d93d1233340d013636
    })
})

module.exports = {
    courseRouter: courseRouter
}