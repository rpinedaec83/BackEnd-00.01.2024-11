const socket = io();;
const messageForm = document.getElementById("message-form")
const messageInput = document.getElementById("message-input");
const messages= document.getElementById("messages");

socket.on("message",(message)=>{
    console.log(`Mensaje recibido ${message}`);
    displayMessage("asistente", message)
})

messageForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    displayMessage("user", message)
    socket.emit("sendMessage",message,(error)=>{
        if(error){
            return alert(error)
        }
        messageInput.value = "";
        messageInput.focus();
    });
})

function displayMessage(role, message){
    const div = document.createElement("div");
    div.innerHTML = `<p><b> ${role === "user"?"Yo":"Asistente"}</b> ${message}</p>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}