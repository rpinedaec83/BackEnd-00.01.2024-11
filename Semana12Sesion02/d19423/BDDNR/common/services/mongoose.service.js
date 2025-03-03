const mongoose = require('mongoose');
let count = 0;

const options={
    autoIndex: false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectWithRetry=()=>{
    console.log("Conectandome a MongoDB");
    mongoose.connect(process.env.MONGOURI, options).then(()=>{
        console.log("MongoDB conectado")
    }).catch(err=>{
        console.log("Intentando de nuevo", err);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;