require("dotenv").config();
const express = require("express");
const http = require('http');
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_APIKEY
})

const PORT = process.env.PORT || 8080;
app.use(express.static("public"));


io.on("connection",(socket)=>{
    console.log("Nuevo usuario conectado");
    const historialConversacion = [];
    historialConversacion.push({
        role:"system",
        content: `Eres un chatbot de una empresa que vende helados, tienes 10 sabores de helados que 
        incluyen: Fresa, mango, chocolate entre otros, el sabor mas recomendado es el de Vainilla, tu mision es vender estos helados`
    })
    socket.on("sendMessage", async (message, callback)=>{
        try {
            console.log(message)
            historialConversacion.push({role:"user", content: message});
            const respuestaChat = await openai.chat.completions.create({
                model: process.env.OPEN_AI_MODEL || "gpt-3.5-turbo",
                messages: historialConversacion
            });
            const respuesta = respuestaChat.choices[0].message?.content;
            historialConversacion.push({role:"assistant", content: respuesta});
            socket.emit("message", respuesta);
            callback();
            // switch (message) {
            //     case "Hola":
            //         socket.emit("message", "Que tal");
            //         break;
            
            //     default:
            //         break;
            // }
            console.log(historialConversacion)
        } catch (error) {
            console.log(error)
        }
    });
    socket.on("disconnect", ()=>{console.log("Usuario Desconectado")})
})


server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})