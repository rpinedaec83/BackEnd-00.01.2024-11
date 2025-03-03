const db = require("../models");
const User = db.User;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json({ message: "El usuario ya está en uso" });
        }

        user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "El email ya está en uso" });
        }

        next();
    } catch (err) {
        res.status(500).json({ message: "Error al verificar usuario/email", error: err.message });
    }
};

module.exports = { checkDuplicateUsernameOrEmail };