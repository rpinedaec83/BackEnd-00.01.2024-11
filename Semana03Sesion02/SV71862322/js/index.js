console.log("hola desde la consola");

// alert("hola desde el alert");

// document.getElementById("resultado").innerText ="<button>click</button>"

// document.getElementById("resultado").innerHTML = "<button>click</button>"

// let nombre = prompt("Escribe tu nombre");
// document.getElementById("resultado").innerText = `Bienvenido ${nombre}`;

// document.getElementById("btnEnviar").addEventListener("click", e => {
//     let nombre= document.getElementById("txtnombre").value;
//     document.getElementById("resultado").innerText = `Bienvenido ${nombre}`;
// })

// console.log("Inicio de la sumadora");
// let primerNumero = Number.parseInt(prompt("Escribe el primer numero"));
// let segundoNumero = Number.parseInt(prompt("Escribe el segundo numero"));

// if(isNaN(primerNumero) || isNaN(segundoNumero)){
//     alert("Escribe correctamente los datos");
// }else{
//     let suma= primerNumero + segundoNumero;
//     alert(`El resultado de la suma es ${suma}`)
// }

// console.log("Inicio de la calculadora v1");
// let primerNumero = Number.parseInt(prompt("Escribe el primer numero"));
// let segundoNumero = Number.parseInt(prompt("Escribe el segundo numero"));
// let operacion = Number.parseInt(prompt(`Seleciona la operacion:
// 1. Suma
// 2. Resta
// 3. Multiplicacion
// 4. Division`));

// if(isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(operacion)){
//     alert("Escribe correctamente los datos");
// }else{
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
//             alert(`la operacion ${operacion} no es valida`);
//             break;
//     }
//     alert(`El resultado es ${resultado}`)
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);

// }

// let arrNotas = [12,20,16,18,12,17]
// let sumadora = 0;
// for (let index = 0; index < arrNotas.length; index++) {
//     sumadora += arrNotas[index];

// }
// alert(`el promedio es ${sumadora/arrNotas.length}`)

// sumadora = 0;
// arrNotas.forEach(elemento => {
//     sumadora += elemento;
// })
// alert(`el promedio es ${sumadora/arrNotas.length}`)

// let bandera = true;
// let inicio = 0;
// let fin = 10;
// do {
//     inicio++;
//     if(inicio == fin){
//         bandera =false
//     }
//     console.log(inicio);
// }while(bandera)

document.getElementById("calculadora").addEventListener("click",(e)=>{
    e.preventDefault();
    abrirCalculadora();
})

function abrirCalculadora(){
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