const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/UI2Dynamic",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Succesful");
}).catch((error)=>{
    console.log(error);
})
