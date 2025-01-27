var http = require('http');
var url = require('url');
var fs = require('fs');
const axios = require('axios');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

    console.log(q.pathname);
    console.log(q.query);
    switch (q.pathname) {
        case `/clima`:
            res.write(`Buscando el clima de la ciudad de ${q.query.ciudad}\n`);
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://weather-api99.p.rapidapi.com/weather?city=${q.query.ciudad}`,
                headers: {
                    'x-rapidapi-key': 'da327f33bcmshb46436965c27ca2p15a9ffjsn1f4c8b52944f',
                    'x-rapidapi-host': 'weather-api99.p.rapidapi.com'
                }
            };
            axios.request(config)
                .then((response) => {
                    let temperatura = response.data.main.temp;
                    res.write(`El clima de la ciudad ${q.query.ciudad} es de ${temperatura - 273} grados centigrados`)
                    console.log(JSON.stringify(response.data));
                    return res.end();
                })
                .catch((error) => {
                    res.write(`La ciudad ${q.query.ciudad} no existe`)
                    console.log(error);
                    return res.end();
                });
            break;
        case `/persona`:
            let configP = {
                method: `get`,
                url: 'https://randomuser.me/api/',
                headers: {}
            }
            axios.request(configP)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    res.write(`Datos de ${response.data.results[0].name.first}\n`)
                    console.log(Object.entries(response.data))
                    for (let [key, value] of Object.entries(response.data.results[0])) {
                        if (value == `[object Object]`) {
                            res.write(`${key} : \n`)
                            for (let [llave, valor] of Object.entries(value)) {
                                if (valor == `[object Object]`) {
                                    res.write(`${llave}: \n`)
                                    for (let [llave1, valor1] of Object.entries(valor)) {
                                        res.write(`${llave1} : ${valor1} \n`)
                                    }
                                }
                                else {
                                    res.write(`${llave} : ${valor}\n`)
                                }
                                ;
                            }
                        }
                        else {
                            res.write(`${key} : ${value} \n`);
                        }


                    }

                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                    return res.end();
                });
            break;
        case `/tienda`:
            let configT = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://fakestoreapi.com/products',
                headers: {}
            };

            axios.request(configT)
                .then((response) => {
                    res.write(`Listado de productos de una tienda (producto y precio)\n\n`);
                    console.log(JSON.stringify(response.data));
                    response.data.forEach(element => {
                        res.write(`Producto : ${element.title}\n`)
                        res.write(`Precio ${element.price} dolares\n\n`)
                    });

                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                });

            break;
        case `/cambiodolar`:
            let configC = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.frankfurter.dev/v1/latest?base=BRL',
                headers: {}
            };

            axios.request(configC)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    res.write(`El API Frankfutter no incluye el sol peruano\n`);
                    res.write(`Cambio de dolar en Brasil\n`);
                    res.write(`1 real brasileno equivale a ${response.data.rates.USD} dolares\n`);

                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                });
            break;
        case `/listapokemones`:
            let configpoke = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://pokeapi.co/api/v2/pokemon-form?limit=1300',
                headers: {}
            };
            axios.request(configpoke)
                .then((response) => {
                    res.write(`Lista de todos los pokemones\n\n`);
                    response.data.results.forEach(element => {
                        res.write(`${element.name}\n`);

                    });
                    console.log(JSON.stringify(response.data));
                    return res.end();
                })
            let configpokeab = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://pokeapi.co/api/v2/pokemon/${q.query.pokemon}`,
                headers: {}
            };

            axios.request(configpokeab)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    res.write(`Consultando los poderes de ${q.query.pokemon}\n\n`)
                    response.data.moves.forEach(element => {
                        res.write(`${element.move.name}\n`)

                    });

                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                });



            break;
        case `/rickmorty`:
            let configrm = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5',
                headers: {}
            };

            axios.request(configrm)
                .then((response) => {
                    res.write(`Personajes principales de Rick y Morty\n\n`);
                    response.data.forEach(element => {
                        res.write(`${element.name} \n`);
                    });
                    res.write(`\nPara query(?id=numero)`)
                    console.log(JSON.stringify(response.data));
                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                });
            if (q.query.id) {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://rickandmortyapi.com/api/character/${q.query.id}`,
                    headers: {}
                };

                axios.request(config)
                    .then((response) => {
                        res.write(`Nombre : ${response.data.name} \n`);
                        res.write(`Genero : ${response.data.gender}\n`);
                        res.write(`Status : ${response.data.status}\n`);
                        res.write(`Especie : ${response.data.species}\n`);
                        res.write(`ID : ${response.data.id}`)
                        console.log(JSON.stringify(response.data));
                        return res.end();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }


            break;
        case `/bebidascocteles`:
            res.write(`Top 10 bebidas mas populares\n\n`);

            // IDs de inicio y fin
            let startId = 11000; // ID inicial
            let endId = 11009;   // ID final


            const fetchDrinks = async () => {
                for (let currentId = startId; currentId <= endId; currentId++) {

                    let configbc = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${currentId}`,
                        headers: {}
                    };

                    try {
                        // Realizar la solicitud
                        const response = await axios.request(configbc);
                        const drink = response.data.drinks?.[0]?.strDrink;


                        if (drink) {
                            res.write(`Nombre :  ${drink}\n`);
                            res.write(`Preparacion : ${response.data.drinks?.[0]?.strInstructionsES} \n\n`)
                        } else {
                            res.write(`- No se encontró bebida para el ID ${currentId}\n`);
                        }
                    } catch (error) {
                        res.write(`Error al buscar el ID ${currentId}: ${error.message}\n`);
                    }
                }


                return res.end();
            };


            fetchDrinks();
            break;
        case `/topestreno`:
            let configestreno = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.themoviedb.org/3/movie/upcoming?language=es&page=1',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzQ2MDY0Y2EwZDkyZDMzMmY4OGM4MTMyMTk1ZWVjMiIsIm5iZiI6MTY0NjM0MTg0MC40MzM5OTk4LCJzdWIiOiI2MjIxMmVkMDkwMjAxMjAwMWJkODNiNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Bmr1C2JDaBTvSPdWoDnEtlOO2iU0XQjlGJZ1DgdFKII'
                }
            };

            axios.request(configestreno)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    res.write(`Peliculas top estreno (la api no filtra fechas)\n\n`);
                    response.data.results.forEach(element => {
                        res.write(`Nombre : ${element.original_title}\n`);
                        res.write(`Fecha de estreno : ${element.release_date}\n`);
                        res.write(`Resumen : ${element.overview}\n\n`);
                    });
                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                    return res.end();
                });
        case `/pelicula`:
            let configpeli = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.themoviedb.org/3/movie/${q.query.id}`,
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzQ2MDY0Y2EwZDkyZDMzMmY4OGM4MTMyMTk1ZWVjMiIsIm5iZiI6MTY0NjM0MTg0MC40MzM5OTk4LCJzdWIiOiI2MjIxMmVkMDkwMjAxMjAwMWJkODNiNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Bmr1C2JDaBTvSPdWoDnEtlOO2iU0XQjlGJZ1DgdFKII'
                }
            };

            axios.request(configpeli)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    res.write(`Pelicula de id ${q.query.id}\n\n`);
                    res.write(`Titulo : ${response.data.belongs_to_collection.name}\n`);
                    res.write(`Resumen : ${response.data.overview}\n`)

                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                    res.write(`No se encontró una pelicula con ese ID`);
                    return res.end();
                });



            break;
        case `/marte`:
            let configmars = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.nasa.gov/insight_weather/?api_key=QXGF5h6jazs0pz3LJbndLz219yLp3csqU4so8q6P&feedtype=json&ver=1.0',
                headers: { }
              };
              
              axios.request(configmars)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                res.write(`Llave invalidada`)
                return res.end();
              })
              .catch((error) => {
                console.log(error);
                res.write(`Llave invalidada`)
                return res.end();
              });



            break;    


        default:
            break;
    }




}).listen(8080);