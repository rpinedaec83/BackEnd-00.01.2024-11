const jwt = require('jsonwebtoken');
const db = require('../models');

const User = db.user;
const Role = db.role;

verifyToken = (req,res,next)=>{
    let token = req.session.token;
    if(!token){
        return res.status(403).send({message:"No se esta enviando el token"})
    }
    jwt.verify(token,
        process.env.jwtSecret,
        (err, decoded)=>{
            if(err){
                res.status(401).send({message:"No estas autorizado"})
            }
            req.userId = decoded.id;
            next();
        }
    )
}

const authJwt = {
    verifyToken
}
module.exports = authJwt;