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


