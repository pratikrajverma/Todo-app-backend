const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middleware to parse json response
app.use(express.json());  




//import route for Todo api
const totoRoutes = require("./routes/todosRouter");
app.use("/api/v1",totoRoutes);      // this code sets up a route prefix "/api/v1" for all the routes defined in todosRouter. This is a common practice to give versions to APIs for convenience






//start server
app.listen(PORT,()=>{
    console.log(`Server running on port no...  ${PORT}`);
});



//connect to DataBase
const dbConnect = require("./config/database")
dbConnect(); 


 
//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page  </h1>`)
    
})





