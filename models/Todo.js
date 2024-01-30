
const mongoose = require('mongoose');
const todoschema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxlength:50
            // maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxlength:50
            // maxLength:50
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model('Todo',todoschema);  // is line se aap ek Mongoose model create kar rahe hain. Model, MongoDB database mein documents ko represent karta hai aur unke saath interaction karne ka tareeka provide karta hai. aur is model ka shema todoschema me define kiya huaa he