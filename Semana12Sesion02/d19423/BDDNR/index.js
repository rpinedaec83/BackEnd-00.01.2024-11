const express = require('express');
const app  = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send("Hello from my API")
})

app.listen(PORT,function(){
    console.log(`app listengin in port ${PORT}`)
})