

import {Mandar_mensaje} from './sockets';


document.getElementById("logout-btn").addEventListener("click", () => {
    window.location.href = "/logout";
});

document.getElementById("enviar_message").addEventListener("click",()=>{
    const message = document.getElementById("message-input").value.trim();
    Mandar_mensaje(message);
})