require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const connectDB = require("./app/config/db.config");
const db = require("./app/models"); // Importamos los modelos
const authRoutes = require("./app/routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB().then(initRoles); // Asegurar que los roles se inicialicen después de conectar a la BD

// 📌 Función para crear los roles si no existen
async function initRoles() {
    try {
        const count = await db.Role.estimatedDocumentCount();
        if (count === 0) {
            await db.Role.create({ name: "user" });
            await db.Role.create({ name: "admin" });
            await db.Role.create({ name: "moderator" });
            console.log("Roles creados correctamente en la base de datos.");
        } else {
            console.log("Los roles ya existen en la base de datos.");
        }
    } catch (error) {
        console.error("Error al inicializar los roles:", error);
    }
}

// Configurar Cookie-Session
app.use(
    cookieSession({
        name: "auth-session",
        keys: [process.env.COOKIE_SECRET],
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 día
    })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/auth", authRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
