// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01() {
  console.log("Ejercicio 01");

  let numero = Number.parseInt(prompt("Ingresa numero"));

  if ((numero >= 100 && numero <= 999) || (numero >= -999 && numero <= -100)) {
    alert("Tiene 3 digitos");
  } else if (isNaN(numero)) {
    console.log(numero.toString());
    alert("No es un numero");
  } else {
    console.log(numero.valueOf());
    alert("No tiene 3 digitos");
  }
}

// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {
  const num = parseInt(prompt("Ingrese un número entero:"), 10);
  if (isNaN(num)) return alert("Por favor, ingrese un número válido.");
  alert(num < 0 ? "El número es negativo." : "El número no es negativo.");
}

// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03() {
  const num = parseInt(prompt("Ingrese un número:"), 10);
  if (isNaN(num)) return alert("Por favor, ingrese un número válido.");
  alert(
    num % 10 === 4 ? "El número termina en 4." : "El número no termina en 4."
  );
}

// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04() {
  const nums = [];
  for (let i = 0; i < 3; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i + 1}:`), 10);
    if (isNaN(num)) return alert("Por favor, ingrese números válidos.");
    nums.push(num);
  }
  alert(`Ordenados: ${nums.sort((a, b) => a - b).join(", ")}`);
}

// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
// esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
// si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta
// zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio05() {
  const zapatos = parseInt(prompt("Ingrese la cantidad de zapatos:"), 10);
  if (isNaN(zapatos) || zapatos <= 0)
    return alert("Por favor, ingrese un número válido.");
  const precioZapato = 80;
  let descuento = 0;
  if (zapatos > 30) descuento = 0.4;
  else if (zapatos > 20) descuento = 0.2;
  else if (zapatos > 10) descuento = 0.1;
  const total = zapatos * precioZapato * (1 - descuento);
  alert(`Total a pagar: $${total.toFixed(2)}`);
}

// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal,
// se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces
// las horas extras se le pagarán a $25 por hora.
function ejercicio06() {
  const horas = parseInt(prompt("Ingrese las horas trabajadas:"), 10);
  if (isNaN(horas) || horas < 0)
    return alert("Por favor, ingrese un número válido.");
  const sueldo = horas <= 40 ? horas * 20 : 40 * 20 + (horas - 40) * 25;
  alert(`Sueldo semanal: $${sueldo.toFixed(2)}`);
}

// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus
//    clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
//    Los descuentos son los siguientes:
//      Tipo A 10% de descuento
//      Tipo B 15% de descuento
//      Tipo C 20% de descuento
function ejercicio07() {
  const tipoMembresia = prompt(
    "Ingrese el tipo de membresía (A, B o C):"
  ).toUpperCase();
  const precio = parseFloat(prompt("Ingrese el precio del helado:"));
  if (!["A", "B", "C"].includes(tipoMembresia) || isNaN(precio) || precio <= 0)
    return alert("Datos inválidos.");
  const descuentos = { A: 0.1, B: 0.15, C: 0.2 };
  const total = precio * (1 - descuentos[tipoMembresia]);
  alert(`Precio con descuento: $${total.toFixed(2)}`);
}

// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio08() {
  const notas = [];
  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    if (isNaN(nota) || nota < 0 || nota > 20) return alert("Notas inválidas.");
    notas.push(nota);
  }
  const promedio = notas.reduce((a, b) => a + b, 0) / 3;
  alert(
    `Promedio: ${promedio.toFixed(2)} - ${
      promedio >= 10.5 ? "Aprobó" : "Desaprobó"
    }`
  );
}

// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta
// que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function ejercicio09() {
  const salario = parseFloat(prompt("Ingrese el salario actual:"));
  if (isNaN(salario) || salario <= 0) return alert("Salario inválido.");
  const aumento = salario > 2000 ? 0.05 : 0.1;
  const nuevoSalario = salario * (1 + aumento);
  alert(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}

// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10() {
  const num = parseInt(prompt("Ingrese un número:"), 10);
  if (isNaN(num)) return alert("Número inválido.");
  alert(num % 2 === 0 ? "El número es par." : "El número es impar.");
}

// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11() {
  const nums = [];
  for (let i = 0; i < 3; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i + 1}:`), 10);
    if (isNaN(num)) return alert("Número inválido.");
    nums.push(num);
  }
  alert(`El mayor es: ${Math.max(...nums)}`);
}

// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12() {
  let num1 = parseInt(prompt("Ingresa el primer número:"));
  let num2 = parseInt(prompt("Ingresa el segundo número:"));

  if (num1 > num2) {
    alert("El primer número es mayor.");
  } else if (num2 > num1) {
    alert("El segundo número es mayor.");
  } else {
    alert("Ambos números son iguales.");
  }
}

// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13() {
  let letra = prompt("Ingresa una letra:").toLowerCase();

  if ("aeiou".includes(letra)) {
    alert("Es una vocal.");
  } else {
    alert("No es una vocal.");
  }
}

// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
function ejercicio14() {
  let num = parseInt(prompt("Ingresa un número entre 1 y 9:"));

  if (num < 1 || num > 9) {
    alert("El número no está en el rango permitido.");
    return;
  }

  let esPrimo = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo && num > 1) {
    alert(`${num} es un número primo.`);
  } else {
    alert(`${num} no es un número primo.`);
  }
}

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15() {
  let cm = parseFloat(prompt("Ingresa la medida en centímetros:"));
  let libras = parseFloat(prompt("Ingresa el peso en libras:"));

  let pulgadas = cm / 2.54;
  let kilogramos = libras / 2.20462;

  alert(`${cm} cm son ${pulgadas.toFixed(2)} pulgadas.`);
  alert(`${libras} libras son ${kilogramos.toFixed(2)} kilogramos.`);
}

// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16() {
  let dia = parseInt(
    prompt("Ingresa un número entre 1 y 7 para saber el día de la semana:")
  );

  switch (dia) {
    case 1:
      alert("Lunes");
      break;
    case 2:
      alert("Martes");
      break;
    case 3:
      alert("Miércoles");
      break;
    case 4:
      alert("Jueves");
      break;
    case 5:
      alert("Viernes");
      break;
    case 6:
      alert("Sábado");
      break;
    case 7:
      alert("Domingo");
      break;
    default:
      alert("Número no válido.");
  }
}

// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17() {
  let hora = parseInt(prompt("Ingresa la hora (0-23):"));
  let minuto = parseInt(prompt("Ingresa los minutos (0-59):"));
  let segundo = parseInt(prompt("Ingresa los segundos (0-59):"));

  segundo += 1;

  if (segundo === 60) {
    segundo = 0;
    minuto += 1;
  }

  if (minuto === 60) {
    minuto = 0;
    hora += 1;
  }

  if (hora === 24) {
    hora = 0;
  }

  alert(`La hora en un segundo será: ${hora}:${minuto}:${segundo}`);
}

//  18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes.
//      Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//        $10. Si se compran unidades separadas hasta 9.
//        $8. Si se compran entre 10 unidades hasta 99.
//        $7. Entre 100 y 499 unidades.
//        $6. Para mas de 500 unidades.
//        La ganancia para el vendedor es de 8,25 % de la venta.
//        Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
function ejercicio18() {
  let cantidad = parseInt(prompt("Ingresa la cantidad de CDs a vender:"));
  let precio;

  if (cantidad <= 9) {
    precio = 10;
  } else if (cantidad >= 10 && cantidad <= 99) {
    precio = 8;
  } else if (cantidad >= 100 && cantidad <= 499) {
    precio = 7;
  } else {
    precio = 6;
  }

  let totalVenta = precio * cantidad;
  let ganancia = totalVenta * 0.0825;

  alert(`Precio total de la venta: $${totalVenta}`);
  alert(`Ganancia para el vendedor: $${ganancia.toFixed(2)}`);
}

//  19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su
//      número identificador y salario diario correspondiente:
//        Cajero (56$/día).
//        Servidor (64$/día).
//        Preparador de mezclas (80$/día).
//        Mantenimiento (48$/día).
//        El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número
//          identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
//          Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
function ejercicio19() {
  let idEmpleado = parseInt(
    prompt("Ingresa el número identificador del empleado (56, 64, 80, 48):")
  );
  let diasTrabajados = parseInt(
    prompt("Ingresa la cantidad de días trabajados (máximo 6 días):")
  );

  let salarioPorDia;

  switch (idEmpleado) {
    case 56:
      salarioPorDia = 56;
      break;
    case 64:
      salarioPorDia = 64;
      break;
    case 80:
      salarioPorDia = 80;
      break;
    case 48:
      salarioPorDia = 48;
      break;
    default:
      alert("Identificador de empleado no válido.");
      return;
  }

  let salarioTotal = salarioPorDia * diasTrabajados;
  alert(
    `El empleado recibirá $${salarioTotal} por ${diasTrabajados} días trabajados.`
  );
}

//  20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//        ¿Cuántos números son Pares?
//        ¿Cuál es el mayor de todos?
//        Si el tercero es par, calcular el cuadrado del segundo.
//        Si el primero es menor que el cuarto, calcular la media de los 4 números.
//        Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
//          Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
function ejercicio20() {
  let num1 = parseInt(prompt("Ingresa el primer número:"));
  let num2 = parseInt(prompt("Ingresa el segundo número:"));
  let num3 = parseInt(prompt("Ingresa el tercer número:"));
  let num4 = parseInt(prompt("Ingresa el cuarto número:"));

  let pares = 0;
  if (num1 % 2 === 0) pares++;
  if (num2 % 2 === 0) pares++;
  if (num3 % 2 === 0) pares++;
  if (num4 % 2 === 0) pares++;

  let mayor = Math.max(num1, num2, num3, num4);
  let cuadradoDelSegundo = num3 % 2 === 0 ? num2 ** 2 : null;
  let media = num1 < num4 ? (num1 + num2 + num3 + num4) / 4 : null;
  let suma =
    num2 > num3 && num3 >= 50 && num3 <= 700 ? num1 + num2 + num3 + num4 : null;

  alert(`Pares: ${pares}`);
  alert(`El mayor de los números es: ${mayor}`);
  if (cuadradoDelSegundo !== null)
    alert(`El cuadrado del segundo número es: ${cuadradoDelSegundo}`);
  if (media !== null) alert(`La media de los números es: ${media}`);
  if (suma !== null) alert(`La suma de los números es: ${suma}`);
}

// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21() {
  let num = parseInt(prompt("Ingresa un número para calcular su factorial:"));

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  alert(`El factorial de ${num} es: ${factorial}`);
}

// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22() {
  let n = parseInt(prompt("Ingresa el valor de n:"));

  let suma = (n * (n + 1)) / 2;

  alert(`La suma de los primeros ${n} números es: ${suma}`);
}

// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23() {
  let n = parseInt(prompt("Ingresa un número n:"));
  let suma = 0;

  for (let i = 1; i <= n; i += 2) {
    suma += i;
  }

  alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
}

// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24() {
  let suma = 0;

  for (let i = 2; i <= 1000; i += 2) {
    suma += i;
  }

  alert(`La suma de los números pares hasta el 1000 es: ${suma}`);
}

// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25() {
  let num = parseInt(prompt("Ingresa un número para calcular su factorial:"));
  let factorial = 1;

  // Usando una función recursiva
  function calcularFactorial(n) {
    if (n <= 1) return 1;
    return n * calcularFactorial(n - 1);
  }

  factorial = calcularFactorial(num);
  alert(`El factorial de ${num} es: ${factorial}`);
}

// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {
  let dividendo = parseInt(prompt("Ingresa el dividendo:"));
  let divisor = parseInt(prompt("Ingresa el divisor:"));

  let cociente = 0;

  while (dividendo >= divisor) {
    dividendo -= divisor;
    cociente++;
  }

  alert(`El cociente es ${cociente} y el resto es ${dividendo}`);
}

// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio27() {
  let suma = 0;
  let contador = 0;

  while (true) {
    let numero = parseInt(
      prompt("Ingresa un número positivo (o un número negativo para terminar):")
    );
    if (numero < 0) break;
    suma += numero;
    contador++;
  }

  if (contador > 0) {
    let media = suma / contador;
    alert(`La media de los números ingresados es: ${media}`);
  } else {
    alert("No se ingresaron números positivos.");
  }
}

// 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28() {
  let suma = 0;
  let i = 1;

  do {
    suma += i;
    i++;
  } while (i <= 100);

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

// 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29() {
  let suma = 0;
  let i = 1;

  while (i <= 100) {
    suma += i;
    i++;
  }

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

// 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30() {
  let suma = 0;

  for (let i = 1; i <= 100; i++) {
    suma += i;
  }

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

// 31. Hacer un algoritmo en JavaScript para calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31() {
  let sumaPares = 0,
    sumaImpares = 0;
  let contadorPares = 0,
    contadorImpares = 0;

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (numero % 2 === 0) {
      sumaPares += numero;
      contadorPares++;
    } else {
      sumaImpares += numero;
      contadorImpares++;
    }
  }

  let mediaPares = sumaPares / contadorPares;
  let mediaImpares = sumaImpares / contadorImpares;

  alert(`La media de los números pares es: ${mediaPares}`);
  alert(`La media de los números impares es: ${mediaImpares}`);
}

// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades.
function ejercicio32() {
  let ciudades = {
    Provincia1: { Ciudad1: 500000, Ciudad2: 300000, Ciudad3: 250000 },
    Provincia2: { Ciudad4: 700000, Ciudad5: 450000, Ciudad6: 500000 },
    Provincia3: {
      Ciudad7: 800000,
      Ciudad8: 600000,
      Ciudad9: 350000,
      Ciudad10: 450000,
      Ciudad11: 600000,
    },
  };

  let ciudadMaxima = "";
  let maxPoblacion = 0;

  for (let provincia in ciudades) {
    for (let ciudad in ciudades[provincia]) {
      if (ciudades[provincia][ciudad] > maxPoblacion) {
        maxPoblacion = ciudades[provincia][ciudad];
        ciudadMaxima = ciudad;
      }
    }
  }

  alert(
    `La ciudad con la mayor población es: ${ciudadMaxima} con una población de ${maxPoblacion}`
  );
}

// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {
  let continuar = true;

  while (continuar) {
    let opcion = prompt("¿Quieres continuar? (sí/no)").toLowerCase();

    if (opcion === "no") {
      continuar = false;
    } else if (opcion === "si") {
      alert("Continuando con el programa...");
    } else {
      alert("La opción ingresada no es válida.");
    }
  }
}

// 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
function ejercicio34() {
  let result = ""; // Cadena para almacenar todas las tablas de multiplicar

  // Recorre los números del 1 al 9
  for (let i = 1; i <= 9; i++) {
    result = `Tabla de multiplicar del ${i}:\n`; // Encabezado de la tabla

    // Imprime las multiplicaciones de cada número (del 1 al 10)
    for (let j = 1; j <= 12; j++) {
      result += `${i} * ${j} = ${i * j}\n`; // Agregar cada multiplicación
    }

    alert(result); // Muestra el resultado completo de todas las tablas
  }
}

// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function ejercicio35() {
  let mayor = -Infinity;
  let menor = Infinity;

  for (let i = 0; i < 20; i++) {
    let num = parseInt(prompt("Ingresa un número:"));

    if (isNaN(num)) {
      alert("Número no válido.");
      return;
    }

    if (num > mayor) mayor = num;
    if (num < menor) menor = num;
  }

  alert(`El número mayor es: ${mayor}`);
  alert(`El número menor es: ${menor}`);
}

// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36() {
  let n = parseInt(
    prompt("Ingresa el número de términos para la serie de Fibonacci:")
  );
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  alert(`La serie de Fibonacci es: \n${fib.join(", ")}`);
}

// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37() {
  let a = parseInt(prompt("Ingresa el primer número:"));
  let b = parseInt(prompt("Ingresa el segundo número:"));

  // Algoritmo de Euclides para el MCD
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  alert(`El MCD de los números es: ${a}`);
}

// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38() {
  let num = parseInt(
    prompt("Ingresa un número para verificar si es perfecto:")
  );
  let sumaDivisores = 0;

  // Encontrar los divisores propios del número (sin incluir el mismo número)
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sumaDivisores += i;
    }
  }

  if (sumaDivisores === num) {
    alert(`${num} es un número perfecto.`);
  } else {
    alert(`${num} no es un número perfecto.`);
  }
}

//  39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz.
//      La formula que se debe aplicar es:
//          Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio39() {
  let n = parseInt(
    prompt("Ingresa el número de términos para aproximar Pi (mayor que 0):")
  );
  let pi = 0;

  // Serie de Gregory-Leibniz para aproximar pi
  for (let i = 0; i < n; i++) {
    let term = 4 / (2 * i + 1); // Cada término de la serie
    if (i % 2 === 0) {
      pi += term; // Sumar cuando el índice es par
    } else {
      pi -= term; // Restar cuando el índice es impar
    }
  }

  alert(`La aproximación de Pi con ${n} términos es: ${pi}`);
}

//  40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha.
//      La formula que se debe aplicar es:
//          Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function ejercicio40() {
  let n = parseInt(
    prompt("Ingresa el número de términos para aproximar Pi (mayor que 0):")
  );
  let pi = 3; // La serie comienza en 3

  // Serie de Nilakantha para aproximar pi
  for (let i = 1; i <= n; i++) {
    let term = 4 / (2 * i * (2 * i + 1) * (2 * i + 2)); // Cada término de la serie
    if (i % 2 === 0) {
      pi += term; // Sumar cuando el índice es par
    } else {
      pi -= term; // Restar cuando el índice es impar
    }
  }

  alert(`La aproximación de Pi con ${n} términos es: ${pi}`);
}
