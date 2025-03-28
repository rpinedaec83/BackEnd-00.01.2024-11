//funciones que interactuan con la interfaz del usuario
import { savenotes,deletenote,getnotebyid,updatenote } from "./socket.js";

const noteList=document.querySelector('#notas');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

let saveId="";

//funcion para crear una sola nota 

const noteUI = note =>{
    const div = document.createElement('div');
    div.innerHTML=`
        <div>
            <h1>${note.title}</h1>
            <p>${note.description}</p>
            <div>
                <button class="delete" data-id="${note._id}">Delete</button>
                <button class="update" data-id="${note._id}">Update</button>
            </div>
            
        </div>`

    const btnDelete = div.querySelector('.delete');
    const btnUpdate = div.querySelector('.update'); 
    //dataset devuelve objetos con nombre data-
    
    btnDelete.addEventListener('click',e=>deletenote(btnDelete.dataset.id));
    btnUpdate.addEventListener('click',e=>getnotebyid(btnUpdate.dataset.id));
    return div;
}
//data-id nos permite guardar información en el boton html

export function rendernotes(notes){
    noteList.innerHTML="";
    notes.forEach(element => noteList.append(noteUI(element)));//usamos append para añadir el div de JS al html

}


export function onHandleSubmit(e){
    e.preventDefault();//se cancela el evento default de refrescar la página

    
    if(saveId){
        updatenote(saveId, title.value,description.value);
    }else{
        savenotes(noteform["title"].value,noteform["description"].value);
    }
    saveId="";//Luego de actualizar o agregar una nota el formulario o campos de texto se limpian
    title.value="";
    description.value="";
}



export function appendNote(note){
    noteList.append(noteUI(note));
}

export function fillForm(note){
    title.value=note.title;
    description.value=note.description;
    saveId=note._id;
}
