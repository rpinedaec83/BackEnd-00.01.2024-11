const UserModel = require('../models/user.model');


exports.insert = (req,res)=>{
    UserModel.createUser(req.body).then((result)=>{
        res.status(201).send(result);
    })
}