//funciones que interactuan con la interfaz del usuario
import { savenotes,deletenote,getnotebyid } from "./socket.js";

const noteList=document.querySelector('#notas');

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

    
    savenotes(noteform["title"].value,noteform["description"].value);
}



export function appendNote(note){
    noteList.append(noteUI(note));
}

