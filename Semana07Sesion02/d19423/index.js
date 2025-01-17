var http = require('http');
var url = require('url');
var fs = require('fs');
const axios = require('axios');

const KELVIN = 273.15;

http.createServer( function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var q = url.parse(req.url, true);

    if (q.pathname === '/clima' && q.pathname !== '/favicon.ico') {
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
                res.write(`El clima de la cuidad de ${objciudad.ciudad} es de ${(temperatura-KELVIN)}`);
                console.log(JSON.stringify(response.data));
                return res.end();
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        res.write("Hola desde otro lugar");
        return res.end();
    }
}).listen(8080);