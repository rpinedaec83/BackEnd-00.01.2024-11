/**
 * EL PROBLEMA:
 * En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje javascript, definiremos algoritmos por cada problema.
 */

// 1. Crea una función que retorne la suma de dos números.

const suma = (num1, num2) => num1 + num2;
console.log(suma(3,2));


// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

const potencia = (num, potencia) => num ** potencia;
console.log(potencia(2,3));


// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

const sumaCubos = (...numeros) => numeros.reduce(
  (sum, num) => sum + num ** 3, 0
)
console.log(sumaCubos(2, 3, 2));// 8 + 27 + 8 = 43


// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaTriangulo(3, 2));


// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculator = (num1, operacion, num2) => {
  switch (operacion) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case 'x':
      return num1 * num2;
    case '%':
      return num1 % num2;
    default:
      return 'El parámetro no es reconocido';
  }
}
console.log(calculator(2, '+', 2));




// PREGUNTAS:
//  -  ¿Cómo defines una función?
/*
  Para definir una función en JavaScript, se utiliza la palabra clave function, seguida del nombre de la función, 
  paréntesis que encierran los parámetros, y llaves que contienen el cuerpo de la función. Por ejemplo, 
  function sumar(a, b) { return a + b; } define una función que retorna la suma de dos números. 
  Además, existen las funciones flecha, una sintaxis más concisa introducida en ES6, ideal para funciones rápidas y simples, 
  como const multiplicar = (a, b) => a * b;. 
  En esta hackatón, se están utilizando funciones flecha en todos los ejercicios.
*/

//  -  ¿Hasta cuantos argumentos puedes declarar en una función?
/*
  En JavaScript no hay un límite definido para la cantidad de argumentos que se pueden declarar en una función. 
  Sin embargo, manejar demasiados puede dificultar la legibilidad y mantenimiento del código.
  Para simplificar esto, se pueden usar objetos o el operador rest(...), que agrupa múltiples argumentos en un solo arreglo, 
  permitiendo trabajar con una cantidad variable de valores. 
  Por ejemplo, function sumar(...numeros) {} recibe un número indeterminado de argumentos. 
  En algunos ejercicios de esta hackatón se está utilizando parámetros rest para manejar múltiples valores.
*/




// 1) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne 
// en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const presentacion = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
console.log('Ejercicio 1:', presentacion('Sebastián', 'Yabiku', 33)); // Hola mi nombre es Sebastián Yabiku y mi edad 33


// 2) Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const sumOfCubes = (...numeros) => numeros.reduce(
  (sum, num) => sum + num ** 3, 0
)
console.log('Ejercicio 2:', sumOfCubes(1, 5, 9)); // 855


// 3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const tipoDeDato = (valor) => typeof valor;
console.log('Ejercicio 3:', tipoDeDato(10)); // number


// 4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumaCantidad = (...numeros) => numeros.reduce(
  (sum, num) => sum + num, 0
)
console.log('Ejercicio 4:', sumaCantidad(1, 2, 3, 4, 5)); // 15


// 5) Crear una función que reciba un array de valores y filtre los valores que no son string
// Ejemplo [1, 'a', 'b', 0, 15] -> ['a', 'b']
const filtrarStrings = (valores) => valores.filter(
  (valor) => typeof valor === 'string'
)
console.log('Ejercicio 5:', filtrarStrings([1, 'a', 'b', 0, 15])); // ['a', 'b']


// 6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = (numeros) => [Math.min(...numeros), Math.max(...numeros)];
console.log('Ejercicio 6:', minMax([1, 2, 3, 4, 5])); // [1, 5]


// 7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const formatPhoneNumber = (numeros) => numeros.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
console.log('Ejercicio 7:', formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890


// 8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const findLargestNums = (matriz) => matriz.map(
  (subMatriz) => Math.max(...subMatriz)
)
console.log('Ejercicio 8:', findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // [7, 90, 2]


// 9) Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
const charIndex = (palabra, caracter) => [palabra.indexOf(caracter), palabra.lastIndexOf(caracter)];
console.log('Ejercicio 9:', charIndex("hello", "l")); // [2, 3]


// 10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const toArray = (objeto) => Object.entries(objeto);
console.log('Ejercicio 10:', toArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]


// 11) Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 65700
const getBudgets = (personas) => personas.reduce(
  (total, persona) => total + persona.budget, 0
)
console.log('Ejercicio 11:', getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
])); // 65700


// 12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Steve", "Mike", "John"]
const getStudentNames = (estudiantes) => estudiantes.map(
  (estudiante) => estudiante.name
)
console.log('Ejercicio 12:', getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); // ["Steve", "Mike", "John"]


// 13) Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
const objectToArray = (objeto) => Object.entries(objeto);
console.log('Ejercicio 13:', objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})); // [["likes", 2], ["dislikes", 3], ["followers", 10]]


// 14) Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1^2 + 2^2 + 3^2 = 14
const comienzo = 1;
const incremento = 2;
const squaresSum = (tamanho) => Array.from({ length: tamanho }, (_, i) => i * incremento + 1).reduce(
  (sum, num) => sum + num ** 2, 0
)
console.log('Ejercicio 14:', squaresSum(3)); // 14


// 15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
const multiplyByLength = (numeros) => numeros.map(
  (num) => num * numeros.length
)
console.log('Ejercicio 15:', multiplyByLength([2, 3, 1, 0])); // [8, 12, 4, 0]


// 16) Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
const countdown = (tamanho) => Array.from({ length: tamanho + 1 }, (_, i) => tamanho - i);
console.log('Ejercicio 16:', countdown(5)); // [5, 4, 3, 2, 1, 0]


// 17) Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
const differenceMaxMin = (numeros) => Math.max(...numeros) - Math.min(...numeros);
console.log('Ejercicio 17:', differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // 82


// 18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filter_list([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
const filter_list = (valores) => valores.filter(
  (valor) => Number.isInteger(valor)
)


// 19) Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse,
// mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
const repeat = (elemento, veces) => Array(veces).fill(elemento);
console.log('Ejercicio 19:', repeat(13, 5)); // [13, 13, 13, 13, 13]


// 20) Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando 
// todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiou]/g, vocal);
}
console.log('Ejercicio 20:', "apples and bananas".vreplace("u")); // upplus und bununus


// 21) Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta:
// "Encontré a Nemo en [el orden de la palabra que encuentra nemo]!"
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
const findNemo = (palabras) => {
  const orden = palabras.split(' ').findIndex(
    (palabra) => palabra === 'Nemo'
  );
  return orden === -1 ? "No se encontró a Nemo" : `Encontré a Nemo en ${orden + 1}!`;
}
console.log('Ejercicio 21:', findNemo("I am finding Nemo !")); // I found Nemo at 4!


// 22) Cree una función que capitalice la última letra de cada palabra.
// capLast("hello word") ➞ "hellO worD"
const capLast = (palabras) => palabras.split(' ').map(
  (palabra) => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()
).join(' ');
console.log('Ejercicio 22:', capLast("hello word")); // hellO worD
