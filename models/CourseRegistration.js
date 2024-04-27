const mongoose = require("mongoose")
//inside of admin, need to do registration => insertion
//outside of website => registration

//
const courseregis = new mongoose.Schema({
    //fullname:String => means fullname variable is of type string
    fullname: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required:true,
      //enum is used for dept,location
      enum: ['male', 'female', 'others']
    },
    coursename: {
      type: String,
      required: true
    },
    coursecode: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });


  //mongoose.model contains 2 paramaters => collection name,schema 
const coursereg = mongoose.model('', courseregis);

module.exports = coursereg;