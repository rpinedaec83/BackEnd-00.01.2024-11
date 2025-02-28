const UserModel = require('../models/user.model');
const crypto = require('crypto');

exports.insert = (req,res)=>{
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest('base64');
    req.body.password = salt+"$"+hash;
    UserModel.createUser(req.body).then((result)=>{
        res.status(201).send(result);
    })
}

exports.list = (req,res)=>{
    UserModel.list(50,0).then((result)=>{
        res.status(200).send(result);
    })
}
exports.getById = (req,res)=>{
    console.log(req);
    UserModel.findById(req.params.userId).then(
        data =>{
            res.status(200).send(data);
        }
    ).catch(err=>{
        console.log(err)
    })
}