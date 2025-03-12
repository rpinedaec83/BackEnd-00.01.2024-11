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

isModerator = (req,res,next)=>{
    User.findById(req.userId).exec((err, user)=>{
        if(err){
            res.status(500).send({message: err})
        }
        Role.find({_id: {$in: user.roles}}, (err, roles)=>{
            if(err){
                res.status(500).send({message: err})
            }
            for (let index = 0; index < roles.length; index++) {
                const element = roles[index];
                if(element.name==='moderator'){
                    next();
                    return;
                }
                res.status(403).send({message:"Se requiere rol de moderador"})
            }
        })
    })
}

const authJwt = {
    verifyToken, isModerator
}
module.exports = authJwt;