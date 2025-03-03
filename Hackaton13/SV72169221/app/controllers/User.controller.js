const db = require("../models");
const User = db.User;

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate("roles", "name");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error: error.message });
    }
};

