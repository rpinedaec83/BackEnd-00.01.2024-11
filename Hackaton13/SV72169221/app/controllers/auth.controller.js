const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = db.User;
const Role = db.Role;

const JWT_SECRET = process.env.JWT_SECRET || "claveSecreta"; // Usa una clave segura desde el .env

//Registro de usuario (Signup)
exports.signup = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;

        // Verificar si el usuario o el correo ya existen
        const userExists = await User.findOne({ $or: [{ username }, { email }] });
        if (userExists) {
            return res.status(400).json({ message: "Usuario o correo ya está en uso" });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buscar roles o asignar el rol "user" por defecto
        let assignedRoles;
        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            assignedRoles = foundRoles.map(role => role._id);
        } else {
            const userRole = await Role.findOne({ name: "user" });
            assignedRoles = [userRole._id];
        }

        // Crear nuevo usuario
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            roles: assignedRoles
        });

        await newUser.save();
        res.status(201).json({ message: "Usuario creado correctamente" });

    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error: error.message });
    }
};

// Inicio de sesión (Signin)
exports.signin = async (req, res) => {
    try {
        const user = req.user; // Usuario ya validado en verifyLogin.js

        // Generar token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
            algorithm: "HS256",
            expiresIn: "24h"
        });

        // Guardar el token en la sesión (cookie-session)
        req.session.token = token;

        // Obtener roles en texto
        const roles = user.roles.map(role => role.name);

        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            roles,
            message: "Sesión iniciada correctamente"
        });

    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
};

// Cerrar sesión (Signout)
exports.signout = async (req, res) => {
    try {
        req.session = null; // Elimina la cookie de sesión
        res.status(200).json({ message: "Sesión cerrada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al cerrar sesión", error: error.message });
    }
};