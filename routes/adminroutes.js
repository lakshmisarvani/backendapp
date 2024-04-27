const admincontroller = require("../controllers/admincontroller")


const express = require("express")
const adminrouter = express.Router()

//checking admin login 
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

//student functions
adminrouter.post("/insertstudent",admincontroller.insertstudent)
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)

//faculty functions
adminrouter.post("/insertfaculty",admincontroller.insertfaculty)
adminrouter.get("/viewfaculty",admincontroller.viewfaculty)
adminrouter.delete("/deletefaculty/:id",admincontroller.deletefaculty)

//courses functions
adminrouter.post("/insertcourse",admincontroller.insertcourse)
adminrouter.get("/viewcourses",admincontroller.viewcourses)
adminrouter.delete("/deletecourse/:code",admincontroller.deletecourse)
adminrouter.put("/changepwd" ,admincontroller.changefacultypwd)

module.exports = adminrouter
