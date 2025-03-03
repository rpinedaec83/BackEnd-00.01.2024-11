const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json()); 

let listaCompras = []; 

app.get('/',(req,res)=>{
    res.send('Hola desde la tienda');
})


app.post("/crear", (req, res) => {
    const { nombre, descripcion, fecha } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ error: "Los campos nombre y descripcion son obligatorios" });
    }

    const nuevaCompra = {
        id: listaCompras.length + 1,
        nombre,
        descripcion,
        fecha: new Date().toISOString(), 
        esCompletado: false 
    };

    listaCompras.push(nuevaCompra);
    res.status(201).json({ mensaje: "Compra agregada", compra: nuevaCompra });
});


app.get("/pendientes", (req, res) => {
    const pendientes = listaCompras.filter(compra => !compra.esCompletado);
    res.json(pendientes);
});


app.get("/completados", (req, res) => {
    const completados = listaCompras.filter(compra => compra.esCompletado);
    res.json(completados);
});


app.put("/completar/:id", (req, res) => {
    const compraId = parseInt(req.params.id);
    const compra = listaCompras.find(c => c.id === compraId);

    if (!compra) {
        return res.status(404).json({ error: "Compra no encontrada" });
    }

    compra.esCompletado = true;
    res.json({ mensaje: "Compra completada", compra });
});


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));