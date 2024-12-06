// console.log("Inicio de la aplicacion")

// //alert("Hola desde el js")

// //document.getElementById("resultado").innerText = "<button>Click me</button>"
// document.getElementById("resultado").innerHTML = "<button>Click me</button>"

// let nombre = prompt("Escribe tu nombre");
// document.getElementById("resultado").innerText = `Bienvenido: ${nombre}`;

// document.getElementById("btnEnviar").addEventListener("click",(e)=>{
//     let txtNombre = document.getElementById('txtNombre').value;
//     document.getElementById("resultado").innerText = `Bienvenido: ${txtNombre}`;
// })

// console.log("Inicio Sumadora");

// let primerNumero = Number.parseFloat( prompt("Escribe el primer numero"));
// let segundoNumero = Number.parseFloat( prompt("Escribe el Segundo numero"));

// console.log(typeof(primerNumero));

// if(isNaN(primerNumero) || isNaN(segundoNumero)){
//     alert("Escribe correctamente los datos")
// }else{
//     let resultado = primerNumero + segundoNumero;
//     alert(`El resultado de la suma es: ${resultado}`);
// }

// console.log("Inicio de la calculadora V1");


// let primerNumero = Number.parseFloat(prompt("Escribe el primer numero"));
// let segundoNumero = Number.parseFloat(prompt("Escribe el Segundo numero"));
// let operacion = Number.parseInt(prompt(`Escribe la operacion:
//     1   ->   Suma
//     2   ->   Resta
//     3   ->   Multiplicacion
//     4   ->   Division` ));

// if (isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(operacion)) {
//     alert("Escribe correctamente los datos")
// } else {
//     let resultado = 0;
//     switch (operacion) {
//         case 1:
//             resultado = primerNumero + segundoNumero;
//             break;
//         case 2:
//             resultado = primerNumero - segundoNumero;
//             break;
//         case 3:
//             resultado = primerNumero * segundoNumero;
//             break;
//         case 4:
//             resultado = primerNumero / segundoNumero;
//             break;
//         default:
//             alert(`La operacion ${operacion} no esta implementada`)
//             break;
//     }
//     alert(`El resultado de la suma es: ${resultado}`);
// }


// for (let index = 0; index < 10; index++) {
//     console.log(index);

// }

// let arrNotas = [20,16,14,16,12,15];
// let sumatoria = 0;
// let promedio = 0
// for (let index = 0; index < arrNotas.length; index++) {
//     sumatoria += arrNotas[index];

// }
// console.log(promedio = sumatoria/arrNotas.length);


//  sumatoria = 0;
//  promedio = 0
// arrNotas.forEach(element => {
//     sumatoria +=element;
// });
// console.log(promedio = sumatoria/arrNotas.length);


// let bandera = true;
// let inicio = 0;
// let fin = 10
// do {
//     inicio++;
//     if(inicio==fin){
//         bandera = false;
//     }
//     console.log(inicio)
// } while (bandera);

// // while (condition) {

// // }

document.getElementById("calculadora").addEventListener("click", (e) => {
    e.preventDefault();
    abrirCalculadora();
});

function abrirCalculadora() {

    console.log("Inicio de la Calculadora V3");

    let bandera = true;
    do {

        let operacion = Number.parseInt(prompt(`Escribe la operacion:
        1   ->   Suma
        2   ->   Resta
        3   ->   Multiplicacion
        4   ->   Division
        0   ->   Salir` ));

        if (operacion === 0 || isNaN(operacion)) {
            bandera = false;
            break;
        }
        let primerNumero = Number.parseFloat(prompt("Escribe el primer numero"));
        let segundoNumero = Number.parseFloat(prompt("Escribe el Segundo numero"));


        if (isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(operacion)) {
            alert("Escribe correctamente los datos")
        } else {
            let resultado = 0;
            switch (operacion) {
                case 0:
                    bandera = false;
                    break;
                case 1:
                    resultado = primerNumero + segundoNumero;
                    break;
                case 2:
                    resultado = primerNumero - segundoNumero;
                    break;
                case 3:
                    resultado = primerNumero * segundoNumero;
                    break;
                case 4:
                    resultado = primerNumero / segundoNumero;
                    break;
                default:
                    alert(`La operacion ${operacion} no esta implementada`)
                    break;
            }
            alert(`El resultado de la suma es: ${resultado}`);
        }

    } while (bandera);
}