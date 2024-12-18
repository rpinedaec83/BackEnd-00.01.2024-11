// script.js

// Funciones de los ejercicios
const exercises = [
    {
      title: "Concatenar Nombre y Edad",
      execute: () => {
        const concatName = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
        return concatName("Sebastián", "Yabiku", 33);
      },
    },
    {
      title: "Suma de cubos",
      execute: () => {
        const sumOfCubes = (...nums) => nums.reduce((acc, num) => acc + Math.pow(num, 3), 0);
        return sumOfCubes(1, 5, 9);
      },
    },
    {
      title: "Tipo de valor",
      execute: () => {
        const typeOfValue = (value) => typeof value;
        return [typeOfValue(42), typeOfValue("Hello"), typeOfValue(true), typeOfValue(null)];
      },
    },
    {
      title: "Suma de argumentos",
      execute: () => {
        const sumAll = (...nums) => nums.reduce((acc, num) => acc + num, 0);
        return sumAll(1, 2, 3, 4, 5);
      },
    },
    {
      title: "Filtrar strings",
      execute: () => {
        const filterStrings = (arr) => arr.filter((item) => typeof item !== "string");
        return filterStrings(["a", 1, "b", 2, 3]);
      },
    },
    {
      title: "Mínimo y máximo",
      execute: () => {
        const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
        return minMax([1, 2, 3, 4, 5]);
      },
    },
    {
      title: "Formato de número de teléfono",
      execute: () => {
        const formatPhoneNumber = (nums) => `(${nums.slice(0, 3).join('')}) ${nums.slice(3, 6).join('')}-${nums.slice(6).join('')}`;
        return formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      },
    },
    {
      title: "Mayor de cada submatriz",
      execute: () => {
        const findLargestNums = (arr) => arr.map((subArr) => Math.max(...subArr));
        return findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
      },
    },
    {
      title: "Índices de carácter",
      execute: () => {
        const charIndex = (str, char) => [str.indexOf(char), str.lastIndexOf(char)];
        return charIndex("circumlocution", "c");
      },
    },
    {
      title: "Convertir objeto en matriz",
      execute: () => {
        const toArray = (obj) => Object.entries(obj);
        return toArray({ a: 1, b: 2 });
      },
    },
    {
        title: "Suma de presupuestos",
        execute: () => {
          const getBudgets = (arr) => arr.reduce((acc, obj) => acc + obj.budget, 0);
          return getBudgets([
            { name: "John", age: 21, budget: 23000 },
            { name: "Steve", age: 32, budget: 40000 },
            { name: "Martin", age: 16, budget: 2700 },
          ]);
        },
      },
      {
        title: "Obtener nombres de estudiantes",
        execute: () => {
          const getStudentNames = (arr) => arr.map((obj) => obj.name);
          return getStudentNames([
            { name: "Steve" },
            { name: "Mike" },
            { name: "John" },
          ]);
        },
      },
      {
        title: "Convertir objeto a matriz de claves y valores",
        execute: () => {
          const objectToArray = (obj) => Object.entries(obj);
          return objectToArray({
            likes: 2,
            dislikes: 3,
            followers: 10,
          });
        },
      },
      {
        title: "Suma de cuadrados",
        execute: () => {
          const squaresSum = (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((acc, num) => acc + num, 0);
          return squaresSum(3);
        },
      },
      {
        title: "Multiplicar por longitud",
        execute: () => {
          const multiplyByLength = (arr) => arr.map((num) => num * arr.length);
          return multiplyByLength([2, 3, 1, 0]);
        },
      },
      {
        title: "Cuenta regresiva",
        execute: () => {
          const countdown = (n) => Array.from({ length: n + 1 }, (_, i) => n - i);
          return countdown(5);
        },
      },
      {
        title: "Diferencia entre máximo y mínimo",
        execute: () => {
          const diffMaxMin = (arr) => Math.max(...arr) - Math.min(...arr);
          return diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
        },
      },
      {
        title: "Filtrar enteros",
        execute: () => {
          const filterList = (arr) => arr.filter((item) => Number.isInteger(item));
          return filterList([1, 2, 3, "x", "y", 10]);
        },
      },
      {
        title: "Repetir elemento",
        execute: () => {
          const repeat = (element, times) => Array(times).fill(element);
          return repeat(13, 5);
        },
      },
      {
        title: "Reemplazar vocales",
        execute: () => {
          String.prototype.vreplace = function (vowel) {
            return this.replace(/[aeiou]/g, vowel);
          };
          return "apples and bananas".vreplace("u");
        },
      },
      {
        title: "Encontrar Nemo",
        execute: () => {
          const findNemo = (sentence) => {
            const words = sentence.split(" ");
            const index = words.indexOf("Nemo") + 1;
            return index ? `I found Nemo at ${index}!` : "Nemo not found!";
          };
          return findNemo("I am finding Nemo !");
        },
      },
      {
        title: "Capitalizar última letra",
        execute: () => {
          const capLast = (str) => str
            .split(" ")
            .map((word) => word.slice(0, -1) + word.slice(-1).toUpperCase())
            .join(" ");
          return capLast("Fernando Ramos");
        },
      },
    ];
  
  // Mostrar resultados en el HTML
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("exercises");
  
    exercises.forEach((exercise, index) => {
      const exerciseDiv = document.createElement("div");
      exerciseDiv.className = "exercise";
  
      const title = document.createElement("h2");
      title.textContent = `${index + 1}. ${exercise.title}`;
  
      const result = document.createElement("div");
      result.className = "result";
      result.textContent = `Resultado: ${JSON.stringify(exercise.execute())}`;
  
      exerciseDiv.appendChild(title);
      exerciseDiv.appendChild(result);
      container.appendChild(exerciseDiv);
    });
  });
  