const Todo = require('../models/Todo');   //here we are importing model from their path


//define route handler
async function createTodo(req, res) {

    try{
        //extracting data form request body
        const{title,description} = req.body;
        //create new todo object and send to DB
        const response = await Todo.create({title,description}); //Mongoose ke create method ka response ek JavaScript object hota hai, jisme aapko create kiye gaye document ke details milte hain. Commonly, isme document ka _id (MongoDB document identifier) aur doosre fields ki values hoti hain.
        //send a json response with success flag
        res.status(200).json(  // res.status(200) ka MATLAB hai ki HTTP response ka status code 200 hai, jo ki "OK" ko represent karta hai. Jab server kisi client ko 200 status code ke saath response bhejta hai, toh yeh batata hai ki client ka request server ne successfully process kiya hai aur usne client ko sahi response diya hai
            {
                success:true, //bhejna ka maksad hai ki client ko ek clear indication mile ki unka request sahi tarike se process hua hai
                data:response,
                message:'entry created successfully'
            }
        );

    }
    catch(err)
    {
            console.error(err);  //console.error se error ko highlight kara jata hai, aur console.log se bhi detailed information mil jati hai.
            console.log(err);
            res.status(500).json(  // Jab koi error catch hoti hai, toh server HTTP response mein status code 500 bhejta hai, jo Internal Server Error ko indicate karta hai
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        );

    }
}

module.exports = createTodo