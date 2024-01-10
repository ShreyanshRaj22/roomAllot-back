const express = require('express')
const app = express();
const port = 5000 || process.env.PORT
const mongoDB = require("./db")
mongoDB();

app.get("/",(req,res)=>{
    res.send("Server is live and running as well as it should")
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})