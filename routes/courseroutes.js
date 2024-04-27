const coursecontroller = require("../controllers/CoursesController")


const express = require("express")
const courserouter = express.Router()

courserouter.get("/viewstudents",coursecontroller.viewcourses)
courserouter.post("/checkstudentlogin",coursecontroller.checkcourses)


module.exports = courserouter