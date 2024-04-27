const studentcontroller = require("../controllers/studentcontroller")



const express = require("express")
const studentrouter = express.Router()

studentrouter.post("/insertcourse",studentcontroller.insertcourse)
studentrouter.get("/viewcourses",studentcontroller.viewcourses)
studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)
studentrouter.get("/viewcoursesbyreg",studentcontroller.coursebystudent)
studentrouter.post("/addcoursereg",studentcontroller.addcoursereg)

module.exports = studentrouter