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


let objCliente={
    pagar(valor){
        console.log(`Pagando el pedido por S/. ${valor}`)
    }
};

let objCajero={
    codEmpleado:1,
    nombre: "David",
    recibirPedido(){
        let nombre = pedirDatos("Dime tu nombre",objOpciones.nombre);
        let tipoCafe, leche,tipoLeche,azucar,tipoAzucar,tipoGranos;
        console.log(nombre)
        let tipoProducto= pedirDatos("Dime tu tipo de producto",objOpciones.tipoProducto);
        console.log(tipoProducto)
       
        if(tipoProducto==0){
             tipoCafe = pedirDatos("Dime tu Tipo de Cafe", objOpciones.tipoCafe);
             tipoGranos = pedirDatos("Con que grano de cafe quieres tu bebida", objOpciones.tipoGranos);
            console.log(tipoCafe);
             leche = pedirDatos("Quieres leche con tu cafe??",objOpciones.leche)
            if(leche==0){
                 tipoLeche = pedirDatos("Que tipo de leche deseas", objOpciones.tipoLeche)
            }
             azucar = pedirDatos("Quiere4s azucar con tu cafe??", objOpciones.azucar);
            if(azucar==0){
                 tipoAzucar = pedirDatos("Que tipo de azucar quieres??", objOpciones.tipoAzucar);
            }
            objCliente.nombre = nombre;
            objPedido = {
                tipoProducto,
                tipoCafe,
                tipoGranos,
                leche,
                tipoLeche,
                azucar,
                tipoAzucar
            }
        }else{

        }
        objCliente.pedido = objPedido;
        console.log(objCliente);
        console.log("Recibiendo Pedido")
        $("#comanda").show();
        if(objBarista.prepararPedido(objCliente)){
            objCliente.pagar(15);
            //document.getElementById("factura").style.display= "block";
            $("#nombreCliente").text(objCliente.nombre);
            //$("#factura").show();
            
        }
    }
}

let objBarista={
    codEmpleado:2,
    nombre: "Juan",
    prepararPedido(objCliente){
        console.log(objCliente)
        let pedido = objCliente.pedido;
        let strHtml = "";
        Object.keys(pedido).forEach(key => {
            let strValor = objOpciones[key][pedido[key]];
            strHtml += `<li><b>${key}</b> ---> ${strValor}</li>`;
          });
          $("#items").html(strHtml);
        /**
         * <li><b>10</b> users included</li>
                            <li><b>2 GB</b> of storage</li>
                            <li><b>Free </b>Email support</li>
                            <li><b>Help center access</b></li> */  
        console.log("Preparando el pedido")
        console.log("Pedido Listo")

        return true;
    }
}

document.getElementById("pedido").addEventListener("click",(e)=>{
    e.preventDefault();
    // objCliente.hacerPedido();
    objCajero.recibirPedido();
    // objBarista.prepararPedido();
});
$("#pagar").on("click",async (e)=>{
    e.preventDefault();
    const inputValue =""
    const { value: ipAddress } = await Swal.fire({
        title: "Ingresa el valor a cobrar",
        input: "text",
        inputLabel: "Valor recibido",
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";

          }else{
            console.log(value)
            $("#comanda").hide();
            dibujarFactura(value);
          }
        }
      });
})

function dibujarFactura(valor){
    console.log("Tengo que hacer una factura por: "+valor)
    let pedido = objCliente.pedido;
        let strHtml = "<ul>";
        Object.keys(pedido).forEach(key => {
            let strValor = objOpciones[key][pedido[key]];
            strHtml += `<li><b>${key}</b> ---> ${strValor}</li>`;
          });
    $("#detalleFactura").html(strHtml+"</ul>");
    $("#totalDetalle").text(valor);
    $("#subtotal").text(valor);
    $("#igb").text((valor*0.18).toFixed(2));
    $("#total").text((valor*1.18).toFixed(2));
    $("#factura").show();
}

let objOpciones = {
    nombre: "",
    tipoProducto: ["Cafe", "Postre"],
    tipoCafe: ["Normal", "Descafeinado"],
    leche: ["si", "no"],
    tipoLeche: ["de vaca", "de almedras"],
    azucar: ["si", "no"],
    tipoAzucar:["blanca", "morena","estevia"],
    tipoGranos:["grano grueso", "grano medio", "grano fino"]
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