const { Schema,model} = require("mongoose");



const mySchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    

},
{
    timestamps:true//Para cada registro crea su respectivo CreatedAt y UpdateAt
})

module.exports=model('Notas',mySchema);
