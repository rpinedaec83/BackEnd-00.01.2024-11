const socket=io();


export function Mandar_mensaje(mensaje){
    socket.emit('cliente:manda_mensaje',mensaje)

}
