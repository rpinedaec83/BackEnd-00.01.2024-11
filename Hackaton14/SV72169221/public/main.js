//código js del cliente
//cada pestaña representa un nuevo cliente
//<script src="/socket.io/socket.io.js"></script> en el html permite la conexion del front al backend, objeto io



//carga socket dentro del htlm
import { onHandleSubmit,rendernotes,appendNote } from "./ui.js";
import { loadnotes,onNewNote } from "./socket.js";

onNewNote(appendNote);
loadnotes(rendernotes);

//seleccionar el elemento de html
const noteform= document.querySelector("#noteform");

noteform.addEventListener('submit',onHandleSubmit)





