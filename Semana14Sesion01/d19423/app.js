const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
app.use(express.static(path.join(__dirname, "./public")));
const server = require("http").Server(app);
const webSocketServer = require("websocket").server;
const wsServer = new webSocketServer({
  httpServer: server,
  autoAcceptConnections: false,
});
app.set("port", 8000);

function originIsAllowed(origin) {
  if (origin === "http://localhost:8000") {
    return true;
  }
  return false;
}

wsServer.on("request", (request) => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log(
      `${new Date()} La conexion del origen ${request.origin} ha sido rechazada`
    );
    return;
  }
  const connection = request.accept(null, request.origin);
  connection.on("message", async (message) => {
    console.log(message.utf8Data);
    // let numero = 0
    //             setInterval(()=>{
    //                 numero++
    //                 connection.sendUTF(numero)
    //             },5000)

    

    switch (message.utf8Data) {
      case "Hola":
        connection.sendUTF("Hola desde el servidor");
        break;
      case "llamar":
        connection.sendUTF("Ringing");
        break;
      case "clima":
        const options = {
            method: 'GET',
            url: 'https://open-weather13.p.rapidapi.com/city/Quito/ES',
            headers: {
              'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
              'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
          };
          
          await axios.request(options).then((response)=>{
            let a = response.data.weather[0].description
            let temp =((response.data.main.temp-32) * (5/9)).toFixed(2) ;//(73.9 °F − 32) × 5/9 
            console.log(response.data);
            connection.sendUTF(`${a} y estamos a ${temp}`)
          });
		
        break;
      default:
        connection.sendUTF(message.utf8Data);
        break;
    }
  });
});

server.listen(8000, () => {
  console.log("Escuchando desde el puerto: " + app.get("port"));
});
