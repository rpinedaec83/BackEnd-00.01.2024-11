// Reto 1

// Función para mostrar la suma de dos números
function showSum(a, b) {
    const result = sum(a, b);
    displayResult(`La suma de ${a} + ${b} es: ${result}`);
}
function sum(a, b) {
    return a + b;
}

// Función para mostrar la potencia de un número
function showPower(base, exponent) {
    const result = power(base, exponent);
    displayResult(`${base} elevado a la potencia ${exponent} es: ${result}`);
}
function power(base, exponent) {
    return base ** exponent;
}

// Función para mostrar la suma de cubos
function showSumOfCubes(...numbers) {
    const result = sumOfCubes(...numbers);
    displayResult(`La suma de los cubos de ${numbers.join(', ')} es: ${result}`);
}
function sumOfCubes(...numbers) {
    return numbers.reduce((sum, num) => sum + num ** 3, 0);
}

// Función para mostrar el área de un triángulo
function showTriArea(base, height) {
    const result = triArea(base, height);
    displayResult(`El área del triángulo con base ${base} y altura ${height} es: ${result}`);
}
function triArea(base, height) {
    return (base * height) / 2;
}

// Función para manejar la calculadora con inputs dinámicos
function handleCalculator() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);

    const result = calculator(num1, operator, num2);
    displayResult(`El resultado de ${num1} ${operator} ${num2} es: ${result}`);
}

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
        case 'x':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

// Función para mostrar resultados en el DOM
function displayResult(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}
