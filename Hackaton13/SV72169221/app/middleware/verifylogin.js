const db = require("../models");
const bcrypt = require("bcrypt");

const User = db.User;

const checkUserAndPassword = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Verificar si el usuario existe
        const user = await User.findOne({ username }).populate("roles", "name");
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Comparar la contraseña
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        req.user = user; // Pasar usuario al controlador
        next();
    } catch (error) {
        res.status(500).json({ message: "Error al verificar usuario", error: error.message });
    }
};

module.exports = { checkUserAndPassword };