






// Este io del front end puede escuchar y emitir eventos al servidor conexion bidireccional
const socket = io()//esta funcion intenta conectarse al backend


//.on es para escuchar eventos
export function loadnotes(callback){// el socket escucha el evento loadnotes y luego ejecuta la funcion callback quien es la que utiliza los datos que trae el socket
    socket.on('loadnotes',callback);
}

//socket recibe el evento llamado loadnotes y los datos son llamados data y cargados a la funcion callback


//.emit es para emitir eventos
export function savenotes(title,description){
    socket.emit('newnote',{
        title,
        description
    })

}

export function onNewNote(callback){
    socket.on('server:newnote',callback)


}

export function deletenote(id){
    socket.emit("client:deletenote",id)

}

export function getnotebyid(id){
    socket.emit('cliente:getnote',id)

}

export function onSelected(callback){
    socket.on('server:selectednote',callback)
}

export function updatenote(id,title,description){
    socket.emit('cliente:updatenote',{
        _id:id,
        title,
        description
    });

}
