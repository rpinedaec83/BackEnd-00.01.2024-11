

import {Mandar_mensaje,Mandar_paquete,recibirPaquetes} from './sockets.js';

recibirPaquetes();
document.getElementById("logout-btn").addEventListener("click", () => {
    window.location.href = "/logout";
});

document.getElementById("enviar_message").addEventListener("click",(e)=>{
    e.preventDefault();
    const message = document.getElementById("message-input").value.trim();
    console.log(message);
    Mandar_mensaje(message);
})


document.getElementById("order-boton").addEventListener("click",(e)=>{
    e.preventDefault();
    const nombre=document.getElementById("name").value.trim();
    const ubicacion=document.getElementById("location").value.trim();
    console.log(nombre,ubicacion)
    const arr=[nombre,ubicacion]
    Mandar_paquete(arr);

})



