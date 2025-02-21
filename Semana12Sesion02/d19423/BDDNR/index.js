const express = require('express');
const app  = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.use(express.json());

const UserRouter = require('./users/route.config');
UserRouter.routesConfig(app);
app.use(function(req,res,next){
    console.log(req.query);
    next()
})
app.get('/', (req,res)=>{
    res.send({message:"Hola desde mi API"})
})

app.listen(PORT,function(){
    console.log(`app listengin in port ${PORT}`)
})