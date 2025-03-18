const socket=io();
const cajaPedidos = document.getElementById("contenedor_paquetes")

export function Mandar_mensaje(mensaje){
    socket.emit('cliente:manda_mensaje',mensaje)

}

export function Mandar_paquete(arr){
    socket.emit('cliente:manda_paquete',arr)
}

export function recibirPaquetes(){
    socket.on('server:mandarpaquetes',(data)=>{
        
        data.forEach(element => {
            console.log(element.paquete)
        });
    })
};

