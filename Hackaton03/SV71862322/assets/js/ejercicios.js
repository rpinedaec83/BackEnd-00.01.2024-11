 // Ejercicio 1
 //1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function ejercicio01(){
    let numero= prompt("Ingrese un número: ")
    if(numero>99 && numero<1000){
        alert("El número tiene tres dígitos")
    }
    else{
        alert("El número no tiene tres digitos")
    }

}

// Ejercicio 2
//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {
    const num = parseInt(prompt("Ingrese un número entero:"));
    if (num < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número no es negativo.");
    }
}

// Ejercicio 3
//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (num % 10 === 4) {
        alert("El número termina en 4.");
    } else {
        alert("El número no termina en 4.");
    }
}

// Ejercicio 4
// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));
    let auxiliar;

    if (num1 > num2) {
        auxiliar = num1;
        num1 = num2;
        num2 = auxiliar;
    }
    if (num1 > num3) {
        auxiliar = num1;
        num1 = num3;
        num3 = auxiliar;
    }
    if (num2 > num3) {
        auxiliar = num2;
        num2 = num3;
        num3 = auxiliar;
    }

    alert(`Los números de menor a mayor son: ${num1}, ${num2}, ${num3}`);
}

// Ejercicio 5
function ejercicio05() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de zapatos a comprar:"));
    const precioZapato = 80;
    let descuento = 0;

    if (cantidad > 30) {
        descuento = 0.4;
    } else if (cantidad > 20) {
        descuento = 0.2;
    } else if (cantidad > 10) {
        descuento = 0.1;
    }
    const totalDescuento = cantidad * precioZapato * descuento;
    const total = (cantidad * precioZapato) - totalDescuento;
    alert(`El total con descuento es: $${total}`);
}

// Ejercicio 6
function ejercicio06() {
    const horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas:"));
    const tarifa = 20;
    const extraTarifa = 25;
    const limiteHoras = 40;

    let sueldo;
    if (horas <= limiteHoras) {
        sueldo = horas * tarifa;
    } else {
        const horasExtras = horas - limiteHoras;
        sueldo = (limiteHoras * tarifa) + (horasExtras * extraTarifa);
    }
    alert(`El sueldo semanal es: $${sueldo}`);
}

// Ejercicio 7
function ejercicio07() {
    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();
    const totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
    let descuento = 0;

    switch (tipoMembresia) {
        case "A":
            descuento = 0.1;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.2;
            break;
        default:
            alert("Tipo de membresía inválido.");
            return;
    }
    const montoDescuento = totalCompra * descuento;
    const total = totalCompra - montoDescuento;
    alert(`El total con descuento es: $${total}`);
}

// Ejercicio 8
function ejercicio08() {
    const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 11) {
        alert(`El estudiante aprobó con un promedio de ${promedio}.`);
    } else {
        alert(`El estudiante reprobó con un promedio de ${promedio}.`);
    }
}

// Ejercicio 9
function ejercicio09() {
    const sueldoActual = parseFloat(prompt("Ingrese el sueldo actual del trabajador:"));
    let aumento;

    if (sueldoActual > 2000) {
        aumento = sueldoActual * 0.05;
    } else {
        aumento = sueldoActual * 0.1;
    }

    const nuevoSueldo = sueldoActual + aumento;
    alert(`El nuevo sueldo es: $${nuevoSueldo} (aumento de $${aumento})`);
}

// Ejercicio 10
function ejercicio10() {
    const num = parseInt(prompt("Ingrese un número:"));
    if (num % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

// Ejercicio 11
function ejercicio11() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    const num3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (num1 > num2 && num1 > num3) {
        alert(`El mayor es: ${num1}`);
    } else if (num2 > num3) {
        alert(`El mayor es: ${num2}`);
    } else {
        alert(`El mayor es: ${num3}`);
    }
}

// Ejercicio 12
function ejercicio12() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num1 > num2) {
        alert(`El mayor de los dos números es: ${num1}`);
    } else if (num2 > num1) {
        alert(`El mayor de los dos números es: ${num2}`);
    } else {
        alert("Ambos números son iguales.");
    }
}

// Ejercicio 13
function ejercicio13() {
    const letra = prompt("Ingrese una letra:").toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
        alert(`La letra '${letra}' es una vocal.`);
    } else {
        alert(`La letra '${letra}' no es una vocal.`);
    }
}

// Ejercicio 14
function ejercicio14() {
    const num = parseInt(prompt("Ingrese un número entero positivo (1-9):"));

    if (num < 1 || num > 9) {
        alert("El número está fuera del rango permitido.");
    } else {
        let esPrimo = true;
        let i = 2;

        while (i < num && esPrimo) {
            if (num % i === 0) {
                esPrimo = false;
            }
            i++;
        }

        if (esPrimo) {
            alert("El número es primo.");
        } else {
            alert("El número no es primo.");
        }
    }
}

// Ejercicio 15
function ejercicio15() {
    const cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
    const libras = parseFloat(prompt("Ingrese la cantidad en libras:"));

    const pulgadas = cm / 2.54;
    const kg = libras * 0.453592;

    alert(`Conversión:\n${cm} cm son ${pulgadas} pulgadas.\n${libras} libras son ${kg} kilogramos.`);
}

// Ejercicio 16
function ejercicio16() {
    let opcion;
    do {
        opcion = parseInt(prompt(
            "Seleccione una opción:\n" +
            "1. Consultar día de la semana según un número.\n" +
            "0. Salir."
        ));

        switch (opcion) {
            case 1:
                const numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
                switch (numero) {
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
                        alert("Número inválido. Debe estar entre 1 y 7.");
                        break;
                }
                break;
            case 0:
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción inválida. Intente nuevamente.");
                break;
        }
    } while (opcion !== 0);
}

// Ejercicio 17
function ejercicio17() {
    let horas = parseInt(prompt("Ingrese la hora actual (HH):"));
    let minutos = parseInt(prompt("Ingrese los minutos actuales (MM):"));
    let segundos = parseInt(prompt("Ingrese los segundos actuales (SS):"));
    if (
        horas < 0 || horas > 23 ||
        minutos < 0 || minutos > 59 ||
        segundos < 0 || segundos > 59
    ) {
        alert("La hora ingresada es inválida.");
    } else {

        segundos += 1;
            
        if (segundos === 60) {
            segundos = 0;
            minutos += 1;

            if (minutos === 60) {
                minutos = 0;
                horas += 1;

                if (horas === 24) {
                    horas = 0;
                }
            }
        }
        alert(
            `La hora dentro de un segundo será: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
        );
    }
}
// Ejercicio 18
function ejercicio18() {
    const PORCENTAJE = 8.25 / 100;
    let seguir;

    do {
        let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));

        let precioTotal;
        if (cantidad <= 9) {
            precioTotal = cantidad * 10;
        } else if (cantidad <= 99) {
            precioTotal = cantidad * 8;
        } else if (cantidad <= 499) {
            precioTotal = cantidad * 7;
        } else {
            precioTotal = cantidad * 6;
        }

        let ganancia = precioTotal * PORCENTAJE;

        alert(`El precio total a pagar es: $${precioTotal.toFixed(2)}`);
        alert(`La ganancia del vendedor es: $${ganancia.toFixed(2)}`);

        seguir = prompt("¿Desea seguir comprando? (s/n)").toLowerCase();
    } while (seguir !== "n");
}

// Ejercicio 19
function ejercicio19() {
    let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1 a 4):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"));

    if (diasTrabajados < 1 || diasTrabajados > 6) {
        alert("La cantidad de días trabajados debe estar entre 1 y 6.");
        return; 
    }

    let salarioDia;
    switch (idEmpleado) {
        case 1:
            salarioDia = 56;
            break;
        case 2:
            salarioDia = 64;
            break;
        case 3:
            salarioDia = 80;
            break;
        case 4:
            salarioDia = 48;
            break;
        default:
            alert("ID de empleado no válido.");
            return; 
    }

    let salarioTotal = salarioDia * diasTrabajados;
    alert("El salario total a pagar es: $" + salarioTotal);
}

// Ejercicio 20
function ejercicio20() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número:"));
    let cantidadPares = 0;
    let mayor = num1;
    let cuadrado, sumaTotal, media;

    if (num1 % 2 === 0) cantidadPares++;
    if (num2 % 2 === 0) cantidadPares++;
    if (num3 % 2 === 0) cantidadPares++;
    if (num4 % 2 === 0) cantidadPares++;

    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    if (num4 > mayor) mayor = num4;

    alert("Cantidad de números pares: " + cantidadPares);
    alert("El mayor número es: " + mayor);
    if (num3 % 2 === 0) {
        cuadrado = num2 * num2;
        alert("El cuadrado del segundo número es: " + cuadrado);
    }
    if (num1 < num4) {
        media = (num1 + num2 + num3 + num4) / 4;
        alert("La media de los cuatro números es: " + media);
    }
    if (num2 > num3) {
        if (num3 >= 50 && num3 <= 700) {
            sumaTotal = num1 + num2 + num3 + num4;
            alert("La suma de los cuatro números es: " + sumaTotal);
        }
    }
}

// Ejercicio 21
function ejercicio21(){
    let num = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let factorial = 1;

    if (num < 0) {
        alert("El factorial no está definido para números negativos.");
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        alert("El factorial de " + num + " es: " + factorial);
    }
}
// Ejercicio 22
function ejercicio22(){
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    alert("La suma de los primeros " + n + " números es: " + suma);
}
// Ejercicio 23
function ejercicio23(){
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a él:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }

    alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
}
// Ejercicio 24
function ejercicio24(){
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert("La suma de todos los números pares hasta 1000 es: " + suma);
}
// Ejercicio 25
function ejercicio25(){
    let n = parseInt(prompt("Ingrese un número entero:"));
    
    if (n < 0) {
        alert("No se puede calcular el factorial de un número negativo.");
    } else {
        let factorial = 1;
        let contador = 1;
        
        while (contador <= n) {
            factorial *= contador;
            contador++;
        }
        
        alert("El factorial de " + n + " es: " + factorial);
    }
}
// Ejercicio 26
function ejercicio26(){
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));

    if (divisor === 0) {
        alert("El divisor no puede ser cero.");
        return;
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert("Cociente: " + cociente + "\nResto: " + resto);
}
// Ejercicio 27
function ejercicio27(){
    let suma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Ingrese un número positivo (o un negativo para terminar):"));
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } while (numero >= 0);

    if (contador > 0) {
        let media = suma / contador;
        alert("La media de los números ingresados es: " + media);
    } else {
        alert("No se ingresaron números positivos.");
    }
}
// Ejercicio 28
function ejercicio28(){
    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++;
    } while (contador <= 100);

    alert("La suma de los primeros 100 números es: " + suma);
}
// Ejercicio 29
function ejercicio29(){
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}
// Ejercicio 30
function ejercicio30(){
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}
// Ejercicio 31
function ejercicio31(){
    let sumaPares = 0;
    let sumaImpares = 0;
    let conteoPares = 0;
    let conteoImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt("Ingrese un número:"));

        if (numero % 2 === 0) {
            sumaPares += numero;
            conteoPares++;
        } else {
            sumaImpares += numero;
            conteoImpares++;
        }
    }

    if (conteoPares > 0) {
        let mediaPares = sumaPares / conteoPares;
        alert("Media de números pares: " + mediaPares);
    } else {
        alert("No se ingresaron números pares.");
    }

    if (conteoImpares > 0) {
        let mediaImpares = sumaImpares / conteoImpares;
        alert("Media de números impares: " + mediaImpares);
    } else {
        alert("No se ingresaron números impares.");
    }
}
// Ejercicio 32
function ejercicio32(){
    let mayorPoblacion = 0;
    let ciudadMayor = "";

    for (let provincia = 1; provincia <= 3; provincia++) {
        for (let ciudad = 1; ciudad <= 2; ciudad++) {
            let poblacion = parseInt(prompt("Ingrese la población de la ciudad " + ciudad + " de la provincia " + provincia + ":"));

            if (poblacion > mayorPoblacion) {
                mayorPoblacion = poblacion;
                ciudadMayor = "Provincia " + provincia + ", Ciudad " + ciudad;
            }
        }
    }

    alert("La ciudad con mayor población es: " + ciudadMayor + " con " + mayorPoblacion + " habitantes.");
}

// Ejercicio 33
function ejercicio33(){
    let x = true;
    
    while (x) {
        console.log("El programa está ejecutándose.");
        let respuesta = prompt("¿Desea continuar? (S/N): ");
        
        if (respuesta === "N" || respuesta === "n") {
            x = false;
        }
    }
    
    console.log("Programa finalizado.");
}

// Ejercicio 34
function ejercicio34(){
    for (let i = 1; i <= 9; i++) {
        console.log("Tabla del " + i + ":");
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
        console.log("");  
    }
}

// Ejercicio 35
function ejercicio35(){
    let mayor = -999999;
    let menor = 999999;
    
    for (let i = 1; i <= 20; i++) {
        let numero = parseInt(prompt("Ingrese un número: "));
        
        if (numero > mayor) {
            mayor = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
    
    console.log("El número mayor es: " + mayor);
    console.log("El número menor es: " + menor);
}

// Ejercicio 36
function ejercicio36(){
    let n = parseInt(prompt("Ingrese el número de términos de la serie Fibonacci: "));
    let a = 0, b = 1;

    console.log("Serie Fibonacci:");

    for (let i = 1; i <= n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

// Ejercicio 37
function ejercicio37(){
    let a = parseInt(prompt("Ingrese el primer número: "));
    let b = parseInt(prompt("Ingrese el segundo número: "));
    
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    
    console.log("El MCD es: " + a);
}

// Ejercicio 38
function ejercicio38(){
    let numero = parseInt(prompt("Ingrese un número: "));
    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        console.log(numero + " es un número perfecto.");
    } else {
        console.log(numero + " no es un número perfecto.");
    }
}

// Ejercicio 39
function ejercicio39(){
    let n = parseInt(prompt("Ingrese el número de términos: "));
    let pi = 0;
    let signo = 1;

    for (let i = 1; i <= n; i++) {
        pi += (4 / (2 * i - 1)) * signo;
        signo *= -1;
    }

    console.log("La aproximación de pi es: ", pi);
}

// Ejercicio 40
function ejercicio40(){
    let n = parseInt(prompt("Ingrese el número de términos: "));
    let pi = 3;
    let signo = 1;

    for (let i = 2; i <= n * 2; i += 2) {
        pi += (4 / (i * (i + 1) * (i + 2))) * signo;
        signo *= -1;
    }

    console.log("La aproximación de pi es: ", pi);
}