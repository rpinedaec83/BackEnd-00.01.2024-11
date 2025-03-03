const express = require('express');
const nodemon = require('nodemon');
const bodyParser = require('body-parser');
const multer = require('multer');

const app  = express();
require('dotenv').config();
const PORT = process.env.PORT || 8089
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const storage = multer.diskStorage({
    destination(req, res, cb){
        cb(null, 'storage')
    },
    filename(req,file,cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage});
// app.use(express.json());
let arrMascotas = [];
app.get("/", (req, res)=>{
    //res.header('Content-Type', 'application/json')
    let objDatos = {
        nombre: "Roberto",
        apellido: "Pineda"
    }
    res.status(200).send(objDatos)
})

app.post('/', (req,res)=>{
    let body = req.body;
    console.log(body)
    let mascotas = body.mascotas;
    mascotas.forEach(element => {
        arrMascotas.push(element)
    });
    res.status(201).send(arrMascotas)
})

app.get('/parametros/:nombre/:apellido',(req,res)=>{
    let objPersona={
        nombre: req.params.nombre,
        apellido: req.params.apellido
    }

    res.status(200).send(objPersona);
})

app.get('/redir',(req,res)=>{
    res.status(301).location('https://www.x-codec.net/cv');
    res.end();
})

app.post('/upload',upload.single('image'), (req,res)=>{
    if(req.file){
        res.json(req.file)
    }
    else{
        res.status(500).send({messaje:"Hubo un error"})
    }
})

app.put('/user',(req,res)=>{
    let usuario ={}
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    res.send(usuario)
})

app.listen(PORT, ()=>{
    console.log("Inicio el servidor en el puerto "+PORT)
})