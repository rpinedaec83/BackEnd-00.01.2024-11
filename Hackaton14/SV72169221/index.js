const app = require('./app');
const {Server} = require('socket.io');// Socket.io devuelve la clase Server 
const http = require('http');
const {connectDB}=require("./db");
const sockets=require("./sockets");

//El servidor express y websocket deben estar conectados
//El servidor express tiene su propia lógica y no puede ser pasado directamente al websocket

connectDB();
const server = http.createServer(app);//requisito para conectar express y websocket
//convertimos el servidor express a http
const httpServer = server.listen(3000,()=>{console.log("Escuchando el puerto 3000")});//Servidor http

const io = new Server(httpServer);//Servidor websocket , Este objeto permite la conexion del cliente a mi servidor websocket, emitir eventos, recibir etc
sockets(io);

//el cliente(navegador o frontend) se conecta a nuestro servidor a traves del modulo /socket.io/socket.io.js o usando una CDN.




