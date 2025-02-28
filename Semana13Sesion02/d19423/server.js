const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8089;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    cookieSession({
        name:'auth-session',
        keys:[process.env.COOKIE_SECRET],
        httpOnly:true
    })
)


app.get('/',(req,res)=>{
    res.send({message:"Bienvenido a mi API"})
});

const db = require('./app/models');
const Role = db.role;

db.mongoose.connect(process.env.MONGOURI,{}).then(()=>{
    console.log("Base de datos conectada")
}).catch((err)=>{
    console.error(err);
    process.exit();
})




app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})