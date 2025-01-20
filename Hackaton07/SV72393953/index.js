var http = require('http');
var url = require('url');
var fs = require('fs');
const axios = require('axios');


const KELVIN = 273.15;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var q = url.parse(req.url, true);

    if (q.pathname !== '/favicon.ico') {

        switch (q.pathname) {
            case '/clima':
                let objciudad = q.query;
                
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://weather-api99.p.rapidapi.com/weather?city=${objciudad.ciudad}`,
                    headers: {
                        'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
                        'x-rapidapi-host': 'weather-api99.p.rapidapi.com'
                    }
                };
                axios.request(config)
                    .then((response) => {
                        let temperatura = response.data.main.temp;
                        res.write(`El clima de la cuidad de ${objciudad.ciudad} es de ${(temperatura - KELVIN)}`);
                        console.log(JSON.stringify(response.data));
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
            case '/persona':
                    let options ={
                        method: 'get',
                        url: 'https://randomuser.me/api/',
                        headers:{}
                    }
                    axios.request(options)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                break;
                case '/pokemon':
                    let lista ={
                        method: 'get',
                        url: 'https://pokeapi.co/api/v2/pokemon',
                        headers:{}
                    }
                    axios.request(lista)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/pokemon/bulbasaur':
                    let bulbasaur ={
                        method: 'get',
                        url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
                        headers:{}
                    }
                    axios.request(bulbasaur)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/rickandmurphy':
                    let rickandmurphy ={
                        method: 'get',
                        url: 'https://rickandmortyapi.com/api/character',
                        headers:{}
                    }
                    axios.request(rickandmurphy)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/rickandmurphy/JerrySmith':
                    let JerrySmith ={
                        method: 'get',
                        url: 'https://rickandmortyapi.com/api/character/5',
                        headers:{}
                    }
                    axios.request(JerrySmith)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/tienda':
                    let tienda ={
                        method: 'get',
                        url: 'https://fakestoreapi.com/products',
                        headers:{}
                    }
                    axios.request(tienda)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/dolares':
                    let dolares ={
                        method: 'get',
                        url: 'https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PN01288PM/json',
                        headers:{}
                    }
                    axios.request(dolares)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/movies':
                    let movies ={
                        method: 'get',
                        url: 'https://www.freetestapi.com/api/v1/movies',
                        headers:{}
                    }
                    axios.request(movies)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/movies/movie6':
                    let movie6 ={
                        method: 'get',
                        url: 'https://www.freetestapi.com/api/v1/movies/6',
                        headers:{}
                    }
                    axios.request(movie6)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/frases':
                    let frases ={
                        method: 'get',
                        url: 'https://zenquotes.io/api/quotes',
                        headers:{}
                    }
                    axios.request(frases)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/drinks':
                    let drinks ={
                        method: 'get',
                        url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
                        headers:{}
                    }
                    axios.request(drinks)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/marte':
                    let marte ={
                        method: 'get',
                        url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
                        headers:{}
                    }
                    axios.request(marte)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/github':
                    let github ={
                        method: 'get',
                        url: 'https://api.github.com/user',
                        headers:{}
                    }
                    axios.request(github)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                case '/images':
                    let images ={
                        method: 'get',
                        url: 'https://serpapi.com/search.json?q=Apple&engine=google_images',
                        headers:{}
                    }
                    axios.request(images)
                    .then((response) => {
                         console.log(JSON.stringify(response.data));
                         res.write(JSON.stringify(response.data))
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
                
            default:
                res.write("Hola desde otro lugar");
                return res.end();

        }
        
    }
}).listen(8080);