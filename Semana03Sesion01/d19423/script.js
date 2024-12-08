//cuando se hace click en el boton btnScript se lanza una ventana
document.getElementById("btnScript").addEventListener("click",(e)=>{
    e.preventDefault()
    alert("Hola desde el script")
});
/**
 * La 
 * Documentacion
 * en 
 * varias
 * lineas
 */

//Variables
var edad = 41;

var edadDelAlumno = 25;

let hobbies = "Aeromodelismo";

var edad = "Cuarenta y uno";

{
    let hobbies = ""
}

//CONSTANTES

const IGV = 18;
//IGV = 33;
const PI = 3.14159;

//Tipos de datos
//numericos -> numbres
//cadenas de texto - > strings
//fechas -> date

let suma = 33+22;
console.log(suma)

let variableUno = 10 / "Hola";
console.log(variableUno);

console.log(typeof(variableUno));

console.log(variableUno.toString())

let nombre = "Roberto";
nombre = "David";
// nombre = 44;

let apellido = 'Pineda';

let biografia = `Edad 41
estado civil soltero
dasda
dasda
dasda
dasda
dddddda
`;

console.log(biografia);

let edad1 = 55;
let edad2 = "55";

console.log(edad1===edad2);

let opTernario = edad1!==55?"Es igual":"No es igual";
console.log(opTernario)

let arrHobbies = ["Musica","Aeromodelismo","Gunpla"];

console.log(arrHobbies);
let arrDatos = [55,"Palabra",true, ["Musica","Aeromodelismo","Gunpla"]];
console.log(arrDatos);

console.log(arrDatos[1])

arrDatos[1] = "Otra Palabra"
console.log(arrDatos[1])

let objInfoPersonal = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41
};

console.log(objInfoPersonal.apellido)

objInfoPersonal.apellido = "Lopez"

console.log(objInfoPersonal.apellido)
