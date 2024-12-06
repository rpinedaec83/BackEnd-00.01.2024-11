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

console.log("Inicio Sumadora");

let primerNumero = Number.parseFloat( prompt("Escribe el primer numero"));
let segundoNumero = Number.parseFloat( prompt("Escribe el Segundo numero"));

console.log(typeof(primerNumero));

if(isNaN(primerNumero) || isNaN(segundoNumero)){
    alert("Escribe correctamente los datos")
}else{
    let resultado = primerNumero + segundoNumero;
    alert(`El resultado de la suma es: ${resultado}`);
}

