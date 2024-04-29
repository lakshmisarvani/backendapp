const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")//allows one app with another app to resource sharing

// const dburl = "mongodb://localhost:27017/studentcourseregistration" // if data base is not there it we create new one
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to db successfully")
// }).catch((err) => {
//     console.log(err.message)
// });

/*Atlas COnnection */


 const dburl = "mongodb+srv://admin:admin@cluster0.vuqxjga.mongodb.net/studentcourseregistration?retryWrites=true&w=majority&appName=Cluster0"
 mongoose.connect(dburl).then(() => {
     console.log("Connected to MongoDB Atlas successfully")
 }).catch((err) => {
     console.log(err.message)
 });

const app = express()
app.use(express.json())
app.use(cors())

const studentrouter = require("./routes/studentroutes");
 const facultyrouter = require("./routes/facultyroutes");
//const courserouter = require("./routes/courseroute");
const adminrouter = require("./routes/adminroutes");


app.use("",studentrouter) //it includes admin routes
app.use("",facultyrouter)
app.use("",adminrouter)
//app.use("",courserouter)


//app.use("",studentrouter)
//models = > schemas

const port =process.env.PORT||3222
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)

});