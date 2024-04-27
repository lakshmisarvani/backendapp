const facultycontroller = require("../controllers/facultycontroller")



const express = require("express")
const facultyrouter = express.Router()

facultyrouter.get("/viewstudents",facultycontroller.viewstudents)
//facultyrouter.post("/checkfaculty",facultycontroller.checkfacultylogin)
facultyrouter.post("/checkfaculty",facultycontroller.checkfaculty)
facultyrouter.put("/changepwd",facultycontroller.changefacultypwd)

module.exports = facultyrouter