const mongoose = require('mongoose');

require("dotenv").config();  //this is loading dotenv in config folder for using process.env.databaseurl


const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL
        // , {
    //     useNewUrlParser:true,
    //     useUnifiedTopology: true,
    // }
    )
    .then(()=>{
        console.log('DB Connected');
    }).catch((error)=>{
        console.log('error connecting to database');
        console.error(error.message);  //This line logs the actual error message to the console. This can provide more detailed information about what went wrong during the database connection
        process.exit(1); //this is use terminate the application if the database connection fails, preventing the application from continuing to run in an unstable state.
    })
}

module.exports = dbConnect  //This line exports the dbConnect function so that it can be used in other parts of your application. Other modules can import this function and use it to establish a connection to the MongoDB database.
