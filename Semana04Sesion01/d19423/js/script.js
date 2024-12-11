// function suma(primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }


// let respuesta = suma(33,44);

// let respuesta2 = function(primerNumero,segundoNumero){
// return primerNumero+segundoNumero
// }

// console.log(respuesta2(44,66));

// const data = (nombre)=>{
//     console.log(`hola ${nombre} desde la funcion de flecha`);
// }

// data("Roberto");

// let objPersona = {
//     nombre: "Roberto",
//     apellido: "Pineda",
//     edad: 41,
//     caminar(){
//         console.log(`${this.nombre} esta caminando`);
//     }
// }


// objPersona.caminar();

console.log("Inicio de la cafeteria");


let objCliente={};

let objCajero={
    codEmpleado:1,
    nombre: "David",
    recibirPedido(){
        let nombre = pedirDatos("Dime tu nombre",objOpciones.nombre);
        console.log(nombre)
        let tipoProducto= pedirDatos("Dime tu tipo de producto",objOpciones.tipoProducto);
        console.log(tipoProducto)
       
        if(tipoProducto==1){
            let tipoCafe = pedirDatos("Dime tu Tipo de Cafe", objOpciones.tipoCafe);
            console.log(tipoProducto)
        }else{

        }
        console.log("Recibiendo Pedido")
    }
}

let objBarista={
    codEmpleado:2,
    nombre: "Juan",
    prepararPedido(){
        console.log("Preparando el pedido")
    }
}

document.getElementById("pedido").addEventListener("click",(e)=>{
    e.preventDefault();
    // objCliente.hacerPedido();
    objCajero.recibirPedido();
    // objBarista.prepararPedido();
})

let objOpciones = {
    nombre: "",
    tipoProducto: ["Cafe", "Postre"],
    tipoCafe: ["Normal", "Descafeinado"],
    leche: ["si", "no"],
    tipoLeche: ["de vaca", "de almedras"],
    azucar: ["si", "no"],
    tipoAzucar:["blanca", "morena","estevia"]
}

function pedirDatos(speech, opciones){
    let respuesta ="";
    let strMenu = speech;
    if(Array.isArray(opciones)){
        for (let index = 0; index < opciones.length; index++) {
            const element = opciones[index];
            strMenu += `\n\r${index} ---> ${opciones[index]}`
        }
         respuesta=Number.parseInt( prompt(strMenu)) ;
    }
    else{
        respuesta =prompt(strMenu);
    }
    


    return respuesta;
}