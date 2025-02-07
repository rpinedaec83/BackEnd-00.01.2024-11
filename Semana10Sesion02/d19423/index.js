console.log("Inicio del Programa")
require('dotenv').config();
const { MongoClient } = require('mongodb');
const URI = process.env.MONGODBURI;
const client = new MongoClient(URI);

async function run(){
    try {
        await client.connect();
        console.log("Conexión exitosa");
        const db = client.db("sample_mflix");
        const collection = db.collection("movies");
        const firstMovie = await collection.findOne();
       return firstMovie;
    } catch (error) {
        console.log(error);
        return error;
    }
    finally{
        client.close();
    }
}

run().then(data=>{
    console.log(data);
    console.log("Fin del Programa");
}).catch(error=>{
    console.log(error);
});
