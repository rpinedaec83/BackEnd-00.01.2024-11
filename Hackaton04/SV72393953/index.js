console.log("Reto 1");

function suma(num1,num2){
    let suma=num1+num2;
    return suma;
}

console.log("Reto 01 Ejercicio 01");
let resultado=suma(8,7);
console.log(resultado);


function potencia(base,exponente){   
    let potencia;
    potencia= Math.pow(base,exponente);
    return potencia;
}

console.log("Reto 01 Ejercicio 02");
let resultado2=potencia(3,5);
console.log(resultado2);

function sumacubos(num1,num2,num3){
    let cubo1,cubo2,cubo3;
    let sumatotal=0;
    cubo1 = num1*num1*num1;
    cubo2 = num2*num2*num2;
    cubo3 = num3*num3*num3;
    sumatotal=cubo1+cubo2+cubo3;
    return sumatotal;
}

console.log("Reto 01 Ejercicio 03");
let resultado3=sumacubos(1,5,9);
console.log(resultado3);


function areaTriangulo(base,altura){
    let area;
    area=(base*altura)/2;
    return area;
}

console.log("Reto 01 Ejercicio 04");
let resultado4=areaTriangulo(3,2);
console.log(resultado4);

function Calculator(num1,num2,operator){
    let resultado;
    switch(operator){
        case "suma":
            resultado=num1+num2;
            console.log("Reto 01 Ejercicio 05");
            console.log(`${num1} + ${num2} = ${resultado}`);
            break;
        case "resta":
            resultado=num1-num2;
            console.log("Reto 01 Ejercicio 05");
            console.log(`${num1} - ${num2} = ${resultado}`);
            break;
        case "multiplicacion":
            resultado=num1*num2;
            console.log("Reto 01 Ejercicio 05");
            console.log(`${num1} * ${num2} = ${resultado}`);
            break;
        case "division":
            resultado=num1/num2;
            console.log("Reto 01 Ejercicio 05");
            console.log(`${num1} / ${num2} = ${resultado}`);
            break;
        default:
            console.log("Reto 01 Ejercicio 05");
            console.log("El parámetro no es reconocido");
            break;
    }
}

Calculator(9,11,"suma");


console.log("PREGUNTAS");
console.log("¿Cómo defines una función? Para definir una función en JavaScript, puedes utilizar la palabra clave function?");
console.log("primero se agrega la palabra function , luego se agrega el nombre de la funcion y entre parentesis se agrega los parametros, para que devuelva el valor de la funcion se agrega la palabra return que sera la solucion, despues esta funcion se podra llamar la cantidad d eveces que deseeemos en cualuier lugar de todo el codigo");
console.log("¿Hasta cuantos argumentos puedes declarar en una función?");
console.log("no hay un limite en la cantidad de argumentos")



console.log("Reto 02");

console.log("Reto 02 Ejercicio 01");
const saludo = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
const persona=saludo("Cristhian", "Osorio", 28)
console.log(persona);


console.log("Reto 02 Ejercicio 02");
function sumacubos2(num1,num2,num3){
    let cubo1,cubo2,cubo3;
    let sumatotal=0;
    cubo1 = num1*num1*num1;
    cubo2 = num2*num2*num2;
    cubo3 = num3*num3*num3;
    sumatotal=cubo1+cubo2+cubo3;
    return sumatotal;
}

let reto02ejercicio02=sumacubos(1,5,9);
console.log(reto02ejercicio02);

console.log("Reto 02 Ejercicio 03");
function Tipo(parameter){
 
    let valor=typeof parameter;
    return valor;
}

let tipovalue=Tipo("yu");
console.log(tipovalue);


console.log("Reto 02 Ejercicio 04");
function sumaNumeros(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

let sumaN= sumaNumeros(1,2,4,9);
console.log(sumaN);

console.log("Reto 02 Ejercicio 05");
function FilterNoString(edad,nombre){
    let array=[edad,nombre];
    const filtracion=array.filter(function (numero){
        return typeof numero !== 'string' 
    })
    return filtracion;
}

let valors= FilterNoString(26,"cristhian");
console.log("No es string ",valors);

console.log("Reto 02 Ejercicio 06");
function ejercicio06(num1,num2,num3,num4,num5){
    let numeros=[num1,num2,num3,num4,num5];

    const min = Math.min(...numeros); 
    const max = Math.max(...numeros);
    console.log("Mínimo:", min);
    console.log("Máximo:", max); 
   
}

ejercicio06(4,6,8,10,9);

console.log("Reto 02 Ejercicio 07");
function ejercicio07(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
    let numbers=[num1,num2,num3,num4,num5,num6,num7,num8,num9,num10];
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

let telefono =ejercicio07(1,2,3,4,5,6,7,8,9,0);
console.log(telefono);

console.log("Reto 02 Ejercicio 08");

function obtenerMayores(matriz) {
    return matriz.map(subMatriz => Math.max(...subMatriz));
  }
  
  const matrizDeMatrices = [[1, 7, 3],[4, 5, 3],[9, 1, 9]];
  
  const resultado08 = obtenerMayores(matrizDeMatrices);
  console.log(resultado08);

  console.log("Reto 02 Ejercicio 09");

function ejercicio09(palabra){
    let firstletter;
    let lasttletter;
    let array1;
    let array2;
    array1 = palabra.split('');
    array2 = palabra.split('');

    firstletter= array1[0];
    lasttletter = array2[array2.length - 1];
    console.log("Primera letra: ",firstletter);
    console.log("Ultima letra: ",lasttletter);
  }

  ejercicio09("cristhian");

console.log("Reto 02 Ejercicio 10");
const toArray = obj => Object.entries(obj);

console.log(toArray({ a: 1, b: 2 }))

console.log("Reto 02 Ejercicio 11");
const list = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]
  
  const getBudgets = (list) => list.reduce((a, v)=> a + v.budget, 0) 

  console.log(getBudgets(list));

  console.log("Reto 02 Ejercicio 12");
  const students = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]
  const getStudentNames = list => list.map(item => item.name)
  getStudentNames(students)
  console.log(getStudentNames(students));

  console.log("Reto 02 Ejercicio 13");

  function ejercicio13(objeto){
    return Object.entries(objeto);
  }

  const objeto=({
    likes: 2,
    dislikes: 3,
    followers: 10
  })

  let array13=ejercicio13(objeto);
  console.log(array13);

  console.log("Reto 02 Ejercicio 14");

  const tamano = 10
const empieza = 10
console.log(Array.from({length: tamano}, (_, i) => (i + empieza)))

const squaresSum = n => Array.from({length: n}, (_, i) => (i + 1) ** 2).reduce((a,b) => a + b, 0)

squaresSum(3)
console.log(squaresSum(3));

console.log("Reto 02 Ejercicio 15");
function ejercicio15(num1,num2,num3,num4,num5){
    let numeros=[num1,num2,num3,num4,num5];
    
    let doubled = numeros.map(num => num * numeros.length);
    console.log(doubled); 
    console.log(numeros); 
}

ejercicio15(6,7,8,1,2);

console.log("Reto 02 Ejercicio 16");
const countdown = n => {
    const result = [];
    for (let i = n; i >= 0; i--) {
      result.push(i);
    }
    return result;
  };
  
  console.log(countdown(5));
  
  console.log("Reto 02 Ejercicio 17");
  const diffMaxMin = arr => Math.max(...arr) - Math.min(...arr)

  const resultado17=diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])
  
  console.log(resultado17);

  console.log("Reto 02 Ejercicio 18");
  function ejercicio18(...argumentos){
     let array=[...argumentos];
     console.log(array);
     let filtracion= array.filter(function(elemento){
        return  typeof elemento !== 'string'
     })
     return filtracion;
  }

  let array18=ejercicio18(1,5,6,7,"cristhian",8,"suan");
  console.log(array18);


console.log("Reto 02 Ejercicio 19");
const repeat = (elemento, time) => Array(time).fill(elemento)
repeat(13, 5)
console.log(repeat(13, 5));

console.log("Reto 02 Ejercicio 20");
String.prototype.vreplace = function(newVocal) {
    const regex = /[aeiouAEIOU]/g;
    return this.replace(regex, newVocal);
  };
  
  console.log("apples and bananas".vreplace("u")); 


console.log("Reto 02 Ejercicio 21");
function ejercicio21(mensaje) {
    let posicion = mensaje.indexOf("Nemo");
    
    if (posicion === -1) {
        return "Nemo not found!";
    }
    
    return `I found Nemo at position ${posicion}`;
}

let mensaje=ejercicio21("I am finding Nemo !");
console.log(mensaje);


console.log("Reto 02 Ejercicio 22");
function ejercicio22(palabra){
    let letras=palabra.split("");
    const ultimo = letras[letras.length - 1];
    return ultimo;
}
let ultima=ejercicio22("cristhian");
console.log("Ultimo caracter: ",ultima);





