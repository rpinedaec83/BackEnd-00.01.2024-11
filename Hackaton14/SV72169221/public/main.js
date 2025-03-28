//código js del cliente
//cada pestaña representa un nuevo cliente
//<script src="/socket.io/socket.io.js"></script> en el html permite la conexion del front al backend, objeto io



//carga socket dentro del htlm
import { onHandleSubmit,rendernotes,appendNote,fillForm } from "./ui.js";
import { loadnotes,onNewNote,onSelected } from "./socket.js";

onNewNote(appendNote);
loadnotes(rendernotes);
onSelected(fillForm);   

//seleccionar el elemento de html
const noteform= document.querySelector("#noteform");

noteform.addEventListener('submit',onHandleSubmit)





