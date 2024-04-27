const Admin=require("../models/Admin")
const Student = require("../models/Student")
const Faculty = require("../models/Faculty")
const Course=require("../models/Courses")

const insertstudent = async (request, response) => {
    try 
     {
         //await must present beside input
       const input =  request.body;  //json input
       const student = new Student(input);
       //save the record => object_name.save()
      await student.save(); //when error occured bcoz of duplicate
       response.send('Registered Successfully');
     } 
    catch(e) 
     {
       response.status(500).send(e.message);
     }
   };
   const viewstudents = async (request, response) => 
 {
    try 
    {
      const student = await Student.find();
      if(student.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(student);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletestudent = async (request, response) => 
  {
     try 
     {
       //without paramaters => request.params /?id (? is used inorder to consider it as variable instead of part)
       const email = request.params.email
       const student = await Student.findOne({"email":email}) //{schema:variable}
       if(student!=null)
       {
         await Student.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const insertfaculty = async (request, response) => {
    try 
     {
         //await must present beside input
       const input =  request.body;  //json input
       //JobSeeker.js is class
       const faculty = new Faculty(input);
       //save the record => object_name.save()
      await faculty.save(); //when error occured bcoz of duplicate
       response.send('Registered Successfully');
     } 
    catch(e) 
     {
       response.status(500).send(e.message);
     }
   };
   const viewfaculty = async (request, response) => 
 {
    try 
    {
      const faculty = await Faculty.find();
      if(faculty.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(faculty);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletefaculty = async (request, response) => 
  {
     try 
     {
       //without paramaters => request.params /?id (? is used inorder to consider it as variable instead of part)
       const id = request.params.id
       const faculty = await Faculty.findOne({"id":id}) //{schema:variable}
       if(faculty!=null)
       {
         await faculty.deleteOne({"id":id})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
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
       //JobSeeker.js is class
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
  const deletecourse = async (request, response) => 
  {
     try 
     {
       //without paramaters => request.params /?id (? is used inorder to consider it as variable instead of part)
       const code = request.params.code
       const course = await Course.findOne({"code":code}) //{schema:variable}
       if(course!=null)
       {
         await Course.deleteOne({"code":code})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send(" Course ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
const changefacultypwd = async (request, response) => {
    try 
    {
      const { username, oldpassword, newpassword } = request.body;

      const admin = await Admin.findOne({ username, password: oldpassword });
      
       if (!admin) 
      {
        response.status(400).send('Invalid Old Password');
      }
      else
      {
          if(oldpassword==newpassword)
          {
            response.status(400).send('Both Passwords are Same');
          }
          else
          {
            await Admin.updateOne({username},{ $set: { password: newpassword } });
             response.json('Password Updated Successfully');
          }
        
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
   
   module.exports={insertstudent,viewstudents,deletestudent,insertfaculty,viewfaculty,deletefaculty,insertcourse,viewcourses,deletecourse,checkadminlogin,changefacultypwd}