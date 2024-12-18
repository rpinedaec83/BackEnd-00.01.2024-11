// Ejercicio 1/5
const suma = (num1, num2) => num1 + num2;
console.log(suma(2, 2));

// Ejercicio 2/5
const potencia = (base, exponente) => base ** exponente;
console.log(potencia(2, 3));

// Ejercicio 3/5
const sumaDeCubos = (...numeros) => {
  const cubos = numeros.map(e => e ** 3);
  const suma = cubos.reduce((a, v) => a + v, 0); // Aseguramos que el reduce empieza desde 0
  return suma;
};
console.log(sumaDeCubos(1, 5, 9));

// Ejercicio 4/5
const area = (base, altura) => (base * altura) / 2;
console.log(area(3, 2));

// Ejercicio 5/5
const calculadora = (num1, num2, operador) => {
  switch (operador) {
    case "suma":
    case "SUMA":
    case "+":
      return num1 + num2;
    case "resta":
    case "RESTA":
    case "-":
      return num1 - num2;
    case "x":
    case "X":
    case "*":
      return num1 * num2;
    case "/":
    case "dividir":
    case "DIVIDIR":
      return num1 / num2;
    default:
      return "El parámetro no es reconocido";
  }
};
console.log(calculadora(2, 3, "x"));

// Ejercicio 1 (Hackaton)
const concatenar = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
console.log(concatenar("Sebastian", "Yabiku", 33));

// Ejercicio 2 (Hackaton)
const SumaDeCubos = (...numeros) => {
  return numeros.reduce((sum, num) => sum + Math.pow(num, 3), 0);
};
console.log(SumaDeCubos(1, 5, 9));

// Ejercicio 3 (Hackaton)
const getTypeOfJavascript = value => typeof value;
const values = ["Hola", "2323", true, {}, []];
for (const value of values) {
  console.log(getTypeOfJavascript(value));
}

// Ejercicio 4 (Hackaton)
const sum = (...numeros) => numeros.reduce((a, v) => a + v, 0);
console.log(sum(1, 2, 3, 4, 5));

// Ejercicio 5 (Hackaton)
const lista = [1, "hola", 2, true, "como", "estas"];
const filtersetting = (array) => array.filter(item => typeof item === "string");
console.log(filtersetting(lista));

// Ejercicio 6 (Hackaton)
const getMaxMin = Array => [Math.min(...Array), Math.max(...Array)];
console.log(getMaxMin([1, 2, 3, 4, 5]));

// Ejercicio 7 (Hackaton)
const numberPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formatPhoneNuber = nums => `(${nums.slice(0, 3).join("")}) ${nums.slice(3, 6).join("")}-${nums.slice(6).join("")}`;
console.log(formatPhoneNuber(numberPhone));

// Ejercicio 8 (Hackaton)
function findLargestNums(array) {
  return array.map(arr => Math.max(...arr));
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

// Ejercicio 9 (Hackaton)
const charIndex = (str, char) => str.includes(char) ? [str.indexOf(char), str.lastIndexOf(char)] : undefined;
console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));

// Ejercicio 10 (Hackaton)
const toArray = obj => Object.entries(obj);
console.log(toArray({ a: 1, b: 2 }));

// Ejercicio 11 (Hackaton)
const list = [
  { name: "Jonh", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
];
const getBudgets = (list) => list.reduce((a, v) => a + v.budget, 0);
console.log(getBudgets(list));

// Ejercicio 12 (Hackaton)
const students = [
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
];
const getStudentNames = list => list.map(item => item.name);
console.log(getStudentNames(students));

// Ejercicio 13 (Hackaton)
const ToArray = obj => Object.entries(obj);
console.log(ToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));

// Ejercicio 14 (Hackaton)
const tamano = 10;
const empieza = 10;
const squaresSum = n => Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((a, b) => a + b, 0);
console.log(squaresSum(3));
console.log(Array.from({ length: tamano }, (_, i) => (i + empieza)));

// Ejercicio 15 (Hackaton)
const multiplyByLength = array => array.map(Elemento => Elemento * array.length);
console.log(multiplyByLength([2, 3, 1, 0]));

// Ejercicio 16 (Hackaton)
const countdown = n => Array.from({ length: n + 1 }, (_, i) => n - i);
console.log(countdown(5));

// Ejercicio 17 (Hackaton)
const diffMaxMin = arr => Math.max(...arr) - Math.min(...arr);
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

// Ejercicio 18 (Hackaton)
const repeat = (elemento, time) => Array(time).fill(elemento);
console.log(repeat(13, 5));

// Ejercicio 19 (Hackaton)
String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};
console.log("apples and bananas".vreplace("u"));

// Ejercicio 21 (Hackaton)
const findNemo = oracion => {
  const words = oracion.split(" ");
  const index = words.indexOf("Nemo");
  return index !== -1 ? `¡Encontré a Nemo en ${index + 1}` : "No se encontró a Nemo";
};
console.log(findNemo("I am finding otra palabra nemo cada Nemo y Nemo !"));

// Ejercicio 22 (Hackaton)
const capitalize = str =>
  str.split(" ")
    .map(word =>
      word.slice(0, -1) + word.slice(-1).toUpperCase()
    )
    .join(" ");
console.log(capitalize("hello world"));
