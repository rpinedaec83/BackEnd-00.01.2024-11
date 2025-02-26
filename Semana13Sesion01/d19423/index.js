const express = require('express');
const app  = express();

app.get("/", (req, res)=>{
    res.status(200).send("Hola desde el servidor express")
})

app.post('/', (req,res)=>{
    res.status(404).send("No exixte ese recurso")
})

app.listen(8089, ()=>{
    console.log("Inicio el servidor en el puerto "+8089)
})