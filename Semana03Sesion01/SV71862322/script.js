document.getElementById("btnScript").addEventListener("click",(e)=>{
    e.preventDefault();
    alert("hola desde el script");
})
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
// IGV = 33;

//tipos de datos
// numeros -> numbers
// cadenas de texto -> strings
// fechas -> date

let bografia = `hola
mundo
soy
una
variable
de
tipo
string`;

console.log(bografia);

let edad1 = 55;
let edad2 = "55";

console.log(edad1===edad2);

let opTernario = edad1 === 55 ? "son iguales" : "no son iguales";
console.log(opTernario);

let arrHobbies = ["Futbol", "Videojuegos", "Ciclismo"];
console.log(arrHobbies);

let arrDatos = [55, "Futbol", true, ["Futbol", "Videojuegos", "Ciclismo"]];
console.log(arrDatos);

console.log(arrDatos[1]);

arrDatos[1] = "otra palabra";

console.log(arrDatos[1]);

let objInfoPersonal ={
    nombre: "Mercedes",
    apellido: "Durand",
    edad: 22,
}

console.log(objInfoPersonal.apellido);

objInfoPersonal.apellido = "Lopez";

console.log(objInfoPersonal.apellido);