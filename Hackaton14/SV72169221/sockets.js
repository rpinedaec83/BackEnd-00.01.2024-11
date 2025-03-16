//Eventos de sockets
// Este socket tiene comunicacion bidireccional con el socket del front

const Note = require('./models/Note');


module.exports= (io)=>{

    //ON es para escuhar determinado evento
    io.on('connection',(socket)=>{//connection devuelve un socket  el handshake contiene informacion de la conexion
         // io se refiere a todas las ventanas o clientes y socket solo a una sola.
        const emitNotes = async() =>{
            const notes = await Note.find()
            

            io.emit('loadnotes',notes);//emitimos un evento de nombre loadnotes y enviamos la variable notes (arreglo)
        }
        emitNotes();
        socket.on('newnote',async(data)=>{
            const newnote=new Note(data);
            const savedNote=await newnote.save();
            console.log(savedNote);
            io.emit('server:newnote',savedNote);//se emite a todas las ventanas
        })
        socket.on("client:deletenote",async(id)=>{//la ventana escucha el evento a travez del socket 
            await Note.findByIdAndDelete(id);
            emitNotes();//actualiza todas las ventanas io.emit
        })
        socket.on('cliente:getnote',async id=>{
            const note = await Note.findById(id);
            io.emit('server:selectednote',note);//el cliente va a escuchar este evento del servidor 
        })
        socket.on('cliente:updatenote',async updatednote=>{
            await Note.findByIdAndUpdate(updatednote._id,{
                title:updatednote.title,
                description:updatednote.description
            })
            emitNotes();
        })

    })
    // cuando el servidor se cierra, el navegador sigue intentando volver a conectarse.


}