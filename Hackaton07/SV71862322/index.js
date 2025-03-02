

const express = require("express")
const cors = require("cors");
// import js from "js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/github",require("./routes/github"))
app.use("/clima",require("./routes/clima"))
app.use("/cambio",require("./routes/cambio"))
app.use("/pokemon", require("./routes/pokemon"))
app.use("/rickmorty", require("./routes/rickmorty"));
app.use("/peliculas", require("./routes/peliculas"));
app.use("/bebidas", require("./routes/bebidas"));
app.use("/citas", require("./routes/citas"));
app.use("/productos", require("./routes/productos"));
app.use("/fotos", require("./routes/fotos"));
app.use("/usuarios", require("./routes/usuarios"));
app.use("/marte", require("./routes/marte"));


app.listen(PORT,()=>{

    console.log(
        `La aplicación está escuchando en el puerto ${PORT}`)
})