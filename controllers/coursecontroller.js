const Course= require("../models/Courses")

const checkcourses = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const course = await Course.findOne(input)
       response.json(course)
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
   
module.exports ={checkcourses,viewcourses}