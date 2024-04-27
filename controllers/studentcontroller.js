const Student= require("../models/Student")
const Course = require("../models/Courses")
const CRegistration=require("../models/CourseRegistration")

   const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const student = await Student.findOne(input)
       response.json(student)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const viewcourses = async (request, response) => 
 {
    try 
    {
      const courses = await Course.find();
      if(courses.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(courses);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const insertcourse = async (request, response) => {
    try 
     {
         //await must present beside input
       const input =  request.body;  //json input
       const course = new Course(input);
       //save the record => object_name.save()
      await course.save(); //when error occured bcoz of duplicate
       response.send('Registered Successfully');
     } 
    catch(e) 
     {
       response.status(500).send(e.message);
     }
   }; 
   const coursebystudent =async(request,response)=>{
    try 
      {
        const courses = await CRegistration.find();
        if(courses.length==0)
        {
          response.send("DATA NOT FOUND");
        }
        else
        {
          response.json(courses);
        }
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
   }
   const addcoursereg =async(request,response)=>{
      try 
       {
         const input =  request.body;  //json input
         const coursereg = new CRegistration(input);
         //save the record => object_name.save()
        await coursereg.save(); //when error occured bcoz of duplicate
         response.send('Registered Successfully');
       } 
      catch(e) 
       {
         response.status(500).send(e.message);
       }
     }; 
   
module.exports ={checkstudentlogin,viewcourses,insertcourse,coursebystudent,addcoursereg}