const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});

userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
userSchema.findById = function(cb){
    return this.model('User').find({id:this.id}, cb)
}

userSchema.set('toJSON',{
    virtuals:true
})

const User = mongoose.model('User', userSchema);

exports.createUser=(userData)=>{
    const user = new User(userData);
    return user.save();
}

exports.list = (perPage, page)=>{
    
   let users =      User.find().limit(perPage).skip(perPage * page);
  return users;
}

exports.findById = (id)=>{
    console.log(id)
    return User.findById(id)
    .then((result)=>{
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    }).catch(err=>{
        console.log(err)
    })
}