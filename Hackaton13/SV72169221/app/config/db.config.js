const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1); // Detiene el servidor si hay un error
    }
};

module.exports = connectDB;