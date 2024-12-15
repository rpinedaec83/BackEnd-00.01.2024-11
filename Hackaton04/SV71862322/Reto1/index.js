function Ejercicio01() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    alert(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
  }

  // Ejercicio 2
  function Ejercicio02() {
    const base = parseFloat(prompt("Ingrese el número base:"));
    const exponent = parseFloat(prompt("Ingrese la potencia:"));
    alert(`${base} elevado a la potencia ${exponent} es: ${Math.pow(base, exponent)}`);
  }

  // Ejercicio 3
  function Ejercicio03() {
    const numbers = prompt("Ingrese números separados por comas:").split(",").map(Number);
    const result = numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    alert(`La suma de los cubos es: ${result}`);
  }

  // Ejercicio 4
  function Ejercicio04() {
    const base = parseFloat(prompt("Ingrese la base del triángulo:"));
    const height = parseFloat(prompt("Ingrese la altura del triángulo:"));
    const area = (base * height) / 2;
    alert(`El área del triángulo es: ${area}`);
  }

  // Ejercicio 5
  function Ejercicio05() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const operation = prompt("Ingrese la operación (+, -, *, /, %):");
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let result;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        alert("El parámetro no es reconocido");
        return;
    }
    alert(`El resultado de ${num1} ${operation} ${num2} es: ${result}`);
  }