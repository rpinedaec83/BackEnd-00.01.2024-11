console.log("Inicio del Programa")
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
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

// run().then(data=>{
//     console.log(data);
//     console.log("Fin del Programa");
// }).catch(error=>{
//     console.log(error);
// });

async function crud(base, collection, accion, filtro=null, data=null){
    await client.connect();
    const db = client.db(base);
    const coleccion = db.collection(collection);
    let respuesta = null;
    switch(accion){
        case "leerUno":
            if(filtro!==null){
                respuesta=await coleccion.findOne(filtro);
            }else{
                respuesta = await coleccion.findOne();
            }
            break;
        case "leerVarios":
            if(filtro!==null){
                respuesta=await coleccion.find(filtro).toArray();
            }else{  
                respuesta = await coleccion.find().toArray();
            }
            break;
        case "agregarUno":
            if(data!==null){
                respuesta=await coleccion.insertOne(data);
            }else{
                respuesta = "No se ha proporcionado un documento a insertar";
            }
            break;
        case "agregarVarios":
            if(data!==null){
                respuesta=await coleccion.insertMany(data);
            }else{  
                respuesta = "No se ha proporcionado un arreglo de documentos a insertar";
            }
            break;
        case "actualizarUno":
            if(filtro!==null && data!==null){
                respuesta=await coleccion.updateOne(filtro,{$set:data});
            }else{
                respuesta = "No se ha proporcionado un filtro o un documento a actualizar";
            }
            break;
        case "actualizarVarios":
            if(filtro!==null && data!==null){
                respuesta=await coleccion.updateMany(filtro,{$set:data});
            }else{  
                respuesta = "No se ha proporcionado un filtro o un documento a actualizar";
            }
            break;
        case "eliminarUno":
            if(filtro!==null){
                respuesta=await coleccion.deleteOne(filtro);
            }else{
                respuesta = "No se ha proporcionado un filtro para eliminar un documento";
            }
            break;
        case "eliminarVarios":
            if(filtro!==null){
                respuesta=await coleccion.deleteMany(filtro);
            }else{
                respuesta = "No se ha proporcionado un filtro para eliminar varios documentos";
            }
            break;
        default:
            respuesta = "No se ha seleccionado una acción válida";
            break;
    }

    return respuesta;
}


let filtro = {year: 2000};

// crud("sample_mflix", "movies", "leerVarios",filtro).then(data=>{
//     console.log(data);
//     console.log("Fin del Programa");
// }).catch(error=>{
//     console.log(error);
// });

// crud("sample_mflix", "movies", "leerUno",filtro).then(data=>{
//     console.log(data);
//     console.log("Fin del Programa");
// }).catch(error=>{
//     console.log(error);
// });

let data = {

    "plot": "Prueba de inserción de datos",
    "genres": [
      "Short",
      "Western"
    ],
    "runtime": 11,
    "cast": [
      "A.C. Abadie",
      "Gilbert M. 'Broncho Billy' Anderson",
      "George Barnes",
      "Justus D. Barnes"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
    "title": "The Great Train Robbery",
    "fullplot": "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
    "languages": [
      "English"
    ],
    "released": {
      "$date": {
        "$numberLong": "-2085523200000"
      }
    },
    "directors": [
      "Edwin S. Porter"
    ],
    "rated": "TV-G",
    "awards": {
      "wins": 1,
      "nominations": 0,
      "text": "1 win."
    },
    "lastupdated": "2015-08-13 00:27:59.177000000",
    "year": 1903,
    "imdb": {
      "rating": 7.4,
      "votes": 9847,
      "id": 439
    },
    "countries": [
      "USA"
    ],
    "type": "movie",
    "tomatoes": {
      "viewer": {
        "rating": 3.7,
        "numReviews": 2559,
        "meter": 75
      },
      "fresh": 6,
      "critic": {
        "rating": 7.6,
        "numReviews": 6,
        "meter": 100
      },
      "rotten": 0,
      "lastUpdated": {
        "$date": "2015-08-08T19:16:10.000Z"
      }
    },
    "num_mflix_comments": 0
  };
let data1 = [
    {

        "plot": "Prueba de inserción de datos",
        "genres": [
          "Short",
          "Western"
        ],
        "runtime": 11,
        "cast": [
          "A.C. Abadie",
          "Gilbert M. 'Broncho Billy' Anderson",
          "George Barnes",
          "Justus D. Barnes"
        ],
        "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
        "title": "The Great Train Robbery",
        "fullplot": "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
        "languages": [
          "English"
        ],
        "released": {
          "$date": {
            "$numberLong": "-2085523200000"
          }
        },
        "directors": [
          "Edwin S. Porter"
        ],
        "rated": "TV-G",
        "awards": {
          "wins": 1,
          "nominations": 0,
          "text": "1 win."
        },
        "lastupdated": "2015-08-13 00:27:59.177000000",
        "year": 1903,
        "imdb": {
          "rating": 7.4,
          "votes": 9847,
          "id": 439
        },
        "countries": [
          "USA"
        ],
        "type": "movie",
        "tomatoes": {
          "viewer": {
            "rating": 3.7,
            "numReviews": 2559,
            "meter": 75
          },
          "fresh": 6,
          "critic": {
            "rating": 7.6,
            "numReviews": 6,
            "meter": 100
          },
          "rotten": 0,
          "lastUpdated": {
            "$date": "2015-08-08T19:16:10.000Z"
          }
        },
        "num_mflix_comments": 0
      },{

        "plot": "Prueba de inserción de datos",
        "genres": [
          "Short",
          "Western"
        ],
        "runtime": 11,
        "cast": [
          "A.C. Abadie",
          "Gilbert M. 'Broncho Billy' Anderson",
          "George Barnes",
          "Justus D. Barnes"
        ],
        "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
        "title": "The Great Train Robbery",
        "fullplot": "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
        "languages": [
          "English"
        ],
        "released": {
          "$date": {
            "$numberLong": "-2085523200000"
          }
        },
        "directors": [
          "Edwin S. Porter"
        ],
        "rated": "TV-G",
        "awards": {
          "wins": 1,
          "nominations": 0,
          "text": "1 win."
        },
        "lastupdated": "2015-08-13 00:27:59.177000000",
        "year": 1903,
        "imdb": {
          "rating": 7.4,
          "votes": 9847,
          "id": 439
        },
        "countries": [
          "USA"
        ],
        "type": "movie",
        "tomatoes": {
          "viewer": {
            "rating": 3.7,
            "numReviews": 2559,
            "meter": 75
          },
          "fresh": 6,
          "critic": {
            "rating": 7.6,
            "numReviews": 6,
            "meter": 100
          },
          "rotten": 0,
          "lastUpdated": {
            "$date": "2015-08-08T19:16:10.000Z"
          }
        },
        "num_mflix_comments": 0
      },{

        "plot": "Prueba de inserción de datos",
        "genres": [
          "Short",
          "Western"
        ],
        "runtime": 11,
        "cast": [
          "A.C. Abadie",
          "Gilbert M. 'Broncho Billy' Anderson",
          "George Barnes",
          "Justus D. Barnes"
        ],
        "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
        "title": "The Great Train Robbery",
        "fullplot": "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
        "languages": [
          "English"
        ],
        "released": {
          "$date": {
            "$numberLong": "-2085523200000"
          }
        },
        "directors": [
          "Edwin S. Porter"
        ],
        "rated": "TV-G",
        "awards": {
          "wins": 1,
          "nominations": 0,
          "text": "1 win."
        },
        "lastupdated": "2015-08-13 00:27:59.177000000",
        "year": 1903,
        "imdb": {
          "rating": 7.4,
          "votes": 9847,
          "id": 439
        },
        "countries": [
          "USA"
        ],
        "type": "movie",
        "tomatoes": {
          "viewer": {
            "rating": 3.7,
            "numReviews": 2559,
            "meter": 75
          },
          "fresh": 6,
          "critic": {
            "rating": 7.6,
            "numReviews": 6,
            "meter": 100
          },
          "rotten": 0,
          "lastUpdated": {
            "$date": "2015-08-08T19:16:10.000Z"
          }
        },
        "num_mflix_comments": 0
      }
]

// crud("sample_mflix", "movies", "agregarVarios",filtro, data1).then(data=>{
//     console.log(data);
//     console.log("Fin del Programa");
// }).catch(error=>{
//     console.log(error);
// });

let filtro2 = {
    "year": 2025
  }

let data2 = {
    "year": 2025
}

crud("sample_mflix", "movies", "eliminarVarios",filtro2, data2).then(data=>{
    console.log(data);
    console.log("Fin del Programa");
}).catch(error=>{
    console.log(error);
});
