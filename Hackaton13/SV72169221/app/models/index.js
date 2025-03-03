const mongoose = require("mongoose");

const User = require("./user.model");
const Role = require("./role.model");

const db = {
    mongoose,
    User,
    Role,
    ROLES: ["user", "admin", "moderator"]
};

module.exports = db;