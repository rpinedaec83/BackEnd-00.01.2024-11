// Ejercicio 1
const Ejercicio01 = () => {
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const edad = prompt("Ingrese su edad:");
    alert(`Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`);
  };

  // Ejercicio 2
  const Ejercicio02 = () => {
    const numbers = prompt("Ingrese números separados por comas:").split(",").map(Number);
    const result = numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    alert(`La suma de los cubos es: ${result}`);
  };

  // Ejercicio 3
  const Ejercicio03 = () => {
    const value = eval(prompt("Ingrese un valor de cualquier tipo:")); // eval para probar objetos/valores complejos
    alert(`El tipo de valor es: ${typeof value}`);
  };

  // Ejercicio 4
  const Ejercicio04 = (...args) => {
    const numbers = prompt("Ingrese números separados por comas:").split(",").map(Number);
    const result = numbers.reduce((sum, num) => sum + num, 0);
    alert(`La suma de los argumentos es: ${result}`);
  };

  // Ejercicio 5
  const Ejercicio05 = () => {
    const values = prompt("Ingrese valores separados por comas:").split(",");
    const strings = values.filter(value => typeof value === "string" || isNaN(value));
    alert(`Los valores que son strings: ${strings.join(", ")}`);
  };

  // Ejercicio 6
  const Ejercicio06 = () => {
    const numbers = prompt("Ingrese una matriz de números separados por comas:").split(",").map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    alert(`Mínimo: ${min}, Máximo: ${max}`);
  };

  // Ejercicio 7
  const Ejercicio07 = () => {
    const digits = prompt("Ingrese 10 números del 0 al 9 separados por comas:").split(",").map(Number);
    if (digits.length === 10) {
      const formatted = `(${digits.slice(0, 3).join("")}) ${digits.slice(3, 6).join("")}-${digits.slice(6).join("")}`;
      alert(`Número de teléfono: ${formatted}`);
    } else {
      alert("Debe ingresar exactamente 10 números.");
    }
  };

  // Ejercicio 8
  const Ejercicio08 = () => {
    const matrix = JSON.parse(prompt("Ingrese una matriz (en formato JSON, e.g., [[1,2,3],[4,5,6]]):"));
    const largest = matrix.map(arr => Math.max(...arr));
    alert(`Los números más grandes son: ${largest.join(", ")}`);
  };

  // Ejercicio 9
  const Ejercicio09 = () => {
    const word = prompt("Ingrese una palabra:");
    const char = prompt("Ingrese un carácter:");
    const firstIndex = word.indexOf(char);
    const lastIndex = word.lastIndexOf(char);
    if (firstIndex !== -1) {
      alert(`Índices del carácter "${char}": [${firstIndex}, ${lastIndex}]`);
    } else {
      alert(`El carácter "${char}" no está en la palabra.`);
    }
  };

  // Ejercicio 10
  const Ejercicio10 = () => {
    const obj = JSON.parse(prompt("Ingrese un objeto en formato JSON (e.g., {\"a\":1,\"b\":2}):"));
    const entries = Object.entries(obj);
    alert(`El objeto convertido a array: ${JSON.stringify(entries)}`);
  };

  // Ejercicio 11
  const Ejercicio11 = () => {
    const budgets = JSON.parse(prompt("Ingrese una matriz de objetos con formato JSON:"));
    const totalBudget = budgets.reduce((sum, person) => sum + person.budget, 0);
    alert(`El presupuesto total es: ${totalBudget}`);
  };

  // Ejercicio 12
  const Ejercicio12 = () => {
    const students = JSON.parse(prompt("Ingrese una matriz de estudiantes (formato JSON):"));
    const names = students.map(student => student.name);
    alert(`Nombres de estudiantes: ${names.join(", ")}`);
  };

  // Ejercicio 13
  const Ejercicio13 = () => {
    const obj = JSON.parse(prompt("Ingrese un objeto en formato JSON:"));
    const entries = Object.entries(obj);
    alert(`Objeto convertido en matriz: ${JSON.stringify(entries)}`);
  };

  // Ejercicio 14
  const Ejercicio14 = () => {
    const n = parseInt(prompt("Ingrese un número:"));
    const sum = Array.from({ length: n }, (_, i) => Math.pow(i + 1, 2)).reduce((a, b) => a + b, 0);
    alert(`La suma de los cuadrados es: ${sum}`);
  };

  // Ejercicio 15
  const Ejercicio15 = () => {
    const arr = prompt("Ingrese una matriz de números separados por comas:").split(",").map(Number);
    const result = arr.map(num => num * arr.length);
    alert(`Resultado: ${result}`);
  };

  // Ejercicio 16
  const Ejercicio16 = () => {
    const n = parseInt(prompt("Ingrese un número:"));
    const result = Array.from({ length: n + 1 }, (_, i) => n - i);
    alert(`Cuenta regresiva: ${result}`);
  };

  // Ejercicio 17
  const Ejercicio17 = () => {
    const arr = prompt("Ingrese una matriz de números separados por comas:").split(",").map(Number);
    const diff = Math.max(...arr) - Math.min(...arr);
    alert(`La diferencia entre el máximo y el mínimo es: ${diff}`);
  };

  // Ejercicio 18
  const Ejercicio18 = () => {
    const arr = prompt("Ingrese una matriz de valores separados por comas:").split(",");
    const result = arr.filter(item => !isNaN(item)).map(Number);
    alert(`Números enteros: ${result}`);
  };

  // Ejercicio 19
  const Ejercicio19 = () => {
    const element = prompt("Ingrese el elemento a repetir:");
    const times = parseInt(prompt("Ingrese el número de repeticiones:"));
    const result = Array(times).fill(element);
    alert(`Resultado: ${JSON.stringify(result)}`);
  };

  // Ejercicio 20
  String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/g, vowel);
  };
  const Ejercicio20 = () => {
    const str = prompt("Ingrese una cadena:");
    const vowel = prompt("Ingrese la vocal para reemplazar:");
    alert(`Resultado: ${str.vreplace(vowel)}`);
  };

  // Ejercicio 21
  const Ejercicio21 = () => {
    const str = prompt("Ingrese una cadena:");
    const words = str.split(" ");
    const index = words.indexOf("Nemo") + 1;
    if (index > 0) {
      alert(`¡Encontré a Nemo en la posición ${index}!`);
    } else {
      alert("¡Nemo no está en la cadena!");
    }
  };

  // Ejercicio 22
  const Ejercicio22 = () => {
    const str = prompt("Ingrese una cadena:");
    const result = str.split(" ").map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(" ");
    alert(`Resultado: ${result}`);
  };
