



function ejecutar(){
    console.log("ejercicio01");
    let número = Number.parseInt(prompt("digita los números"));
    if(número>99 && número<1000){
        alert("Este número tiene 3 digitos")
    }else{
        alert("El número que introdujo tiene mas o menos de 3 dígitos")
    }
} 

function mifuncion(){
    console.log("ejercicio02");
    let número = Number.parseInt(prompt("digita los números"));
    if(número>0){
        alert("este número es positivo")
    }else if(número<0){
        alert("este número es negativo")
    }else if(número=0)
       alert ("esto es 0")
    }

    function miclick() {
        let primernúmero = prompt("Digite un número entero:");

        if (isNaN(Number(primernúmero))) {
            alert("Por favor, ingresa un número válido");
            return;
        }
        let ultimoDigito = primernúmero.trim().slice(-1);
        if (ultimoDigito === '4') {
            alert("El número termina en 4");
        } else {
            alert("El número no termina en 4");
        }
    }
    
    function mibtn(){
        let primernúmero = prompt("Digite el primer número")
        let segundonúmero = prompt("Digite el segundo digito")
        let tercernúmero = prompt("Digite el tercer digito")

        if (isNaN(primernúmero) || isNaN(segundonúmero) || isNaN(tercernúmero)) {
            alert("Por favor, ingresa solo números válidos.");
            return;
        }

        if (primernúmero > segundonúmero && primernúmero > tercernúmero) {
            alert("El primer número es mayor.");
        } else if (segundonúmero > primernúmero && segundonúmero > tercernúmero) {
            alert("El segundo número es mayor.");
        } else if (tercernúmero > primernúmero && tercernúmero > segundonúmero) {
            alert("El tercer número es mayor.");
        } else {
            alert("Algunos o todos los números son iguales.");
        }

    }

    function mibt(){
        let precioUnitario = 80;
        let primernúmero = Number(prompt("Ingrese la cantidad de zapatos que desea comprar"));
        let descuento;
        let total_compra = primernúmero * precioUnitario;
        if (isNaN(primernúmero) || primernúmero< 0) {
            alert("Por favor, ingresa una cantidad válida de zapatos.");
            return;
        }

         if(primernúmero> 30){
             descuento = 0.4;
        }else if(primernúmero>20){
            descuento = 0.2;
        }else if(primernúmero>10){
            descuento = 0.1;
        }else{
            descuento = 0;
        }    
        let total_apagar = total_compra - (total_compra* descuento)
        alert(`Cantidad de zapatos: ${primernúmero}`);
        alert(`Precio unitario: $${precioUnitario}`);
        alert(`Total de la compra: $${total_compra.toFixed(2)}`);
        alert(`Descuento aplicado: ${descuento * 100}%`);
        alert(`Total a pagar: $${total_apagar.toFixed(2)}`);;
        
    }

    function mibut(){
        let horas = Number(prompt("Ingrese las horas trabajadas:"));
        let sueldo;
        if (isNaN(horas) || sueldo < 0) {
            alert("Por favor, ingresa un número válido de horas trabajadas.");
            return;
        }
        if(horas<1){
            sueldo = horas * 20;
        }else{
            sueldo = (40 * 20) + ((horas - 40) * 25);
                    
        alert(`El sueldo semanal es:$${sueldo.toFixed(2)}`);
        }
    }

    function mitn(){
        let descuento = 0;
        let tipom;
        let precio;
        let total_apagar;
        precio = parseFloat(prompt("Ingrese el precio total:"));
        tipom = parseInt(prompt("Ingrese el tipo de membresía (1, 2 o 3):"));
        
        if(tipom === 1){
            descuento = precio * 0.10;
        }else if(tipom === 2){
            descuento = precio * 0.15;
        }else if(tipom === 3){
            descuento = precio * 0.20;
        }
        
         total_apagar = precio - descuento;
        alert("El descuento aplicado es: $" + descuento.toFixed(2));
        alert("El total a pagar es: $" + total_apagar.toFixed(2));
    }

    function min(){
        let primernúmero = parseFloat(prompt("Digite laprimera nota"));
        let segundonúmero = parseFloat (prompt("Digite la segundo nota"));
        let tercernúmero = parseFloat(prompt("Digite la tercer nota"));
        let promo = (primernúmero + segundonúmero + tercernúmero) / 3;
        if(promo> 13) {
            alert("El estudiante aprobo");
        }else{
            alert("El estudiante no aprobo");
        }
       
        alert("El promedio es:" + promo.toFixed(2));
    
    }
    function sin(){
        let salario = parseFloat(prompt("Ingrese el sueldo actual"));
        let aumento;
        if(salario> 2000){
            aumento = salario * 0.05;
        }else{
            aumento = salario * 0.10;
        }
        let Nsalario = salario + aumento;
        alert(`El aumento es: $${aumento.toFixed(2)}`);
        alert("El sueldo nuevo es: $" + Nsalario.toFixed(2));
    }
    function zun(){
        let primernúmero = parseFloat(prompt("Digite laprimera nota"));
        if(primernúmero % 2 === 0){
            alert("El número es par")
        }else{
            alert("El número es impar")
        }

    
    }
    
    function lun(){
        let primernúmero = prompt("Digite el primer número")
        let segundonúmero = prompt("Digite el segundo digito")
        let tercernúmero = prompt("Digite el tercer digito")

        if (isNaN(primernúmero) || isNaN(segundonúmero) || isNaN(tercernúmero)) {
            alert("Por favor, ingresa solo números válidos.");
            return;
        }

        if (primernúmero > segundonúmero && primernúmero > tercernúmero) {
            alert("El primer número es mayor.");
        } else if (segundonúmero > primernúmero && segundonúmero > tercernúmero) {
            alert("El segundo número es mayor.");
        } else if (tercernúmero > primernúmero && tercernúmero > segundonúmero) {
            alert("El tercer número es mayor.");
        } else {
            alert("Algunos o todos los números son iguales.");
        }
    }

    function hu(){
        let primernúmero = prompt("Digite el primer número")
        let segundonúmero = prompt("Digite el segundo digito")

        if (isNaN(primernúmero) || isNaN(segundonúmero)) {
            alert("Por favor, ingresa solo números válidos.");
            return;
        }

        if (primernúmero > segundonúmero) {
            alert("El primer número es mayor.");
        } else if (segundonúmero > primernúmero) {
            alert("El segundo número es mayor.");
        } else {
            alert("Algunos o todos los números son iguales.");
        }
    }

    function sip(){
        let vocal  = prompt("Digite una vocal")
        if(vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u" || vocal === "A" || vocal === "E" || vocal === "I" || vocal === "O" || vocal === "U"){            
            alert("Digitaste un vocal")
        }else{
            alert("Digitaste una consonante")
        }
    }

    function sp(){
        let número = prompt("Digite el Ingrese un número entre 1 y 10:")
        if(número< 1 && número> 10){
           alert("El número ingresado no está en el rango de 1 a 10.")
        }else if(número === "1"){
            alert("El número no es primo.")
        }else if(número === "2" || número === "3" || número === "5" || número === "7"){
            alert("El número es primo.")
        }else{
            alert("El número no es primo.")
        }

        
    }
    
    function psp(){
        let cm = prompt("Ingrese la medida en centímetros:")
        let pulgadas = cm / 2.54;
        alert("El total a pagar es: " + pulgadas.toFixed(2));
        let libras = prompt("Ingrese la peso en libras:")
        let kilogramos = libras * 0.453592;
        alert("El total a pagar es: " + kilogramos.toFixed(2));

    }
function zzz(){
    let dia = parseInt(prompt("Ingrese un número del 1 al 7:"));
   
    if (dia=== 1){
        alert("El día correspondiente es: Lunes")
    }else if(dia=== 2){
        alert("El día correspondiente es: Martes")
    }else if(dia=== 3){
        alert("El día correspondiente es: Miércoles")
    }else if(dia=== 4){
        alert("El día correspondiente es: Jueves")
    }else if(dia=== 5){
        alert("El día correspondiente es: Viernes")
    }else if(dia=== 6){
        alert("El día correspondiente es: Sábado")
    }else if(dia=== 7){
        alert("El día correspondiente es: Domingo")
    }else{
        alert("Número no válido, ingrese un número entre 1 y 7.");
    }
}
function riz(){
    let cd = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    let cantidad = cd;
    let precio;
    if( cantidad > 1 && cantidad < 9){
        precio = 10;
    }else if(cantidad >10 && cantidad < 99){
        precio = 8;
    }else if(cantidad > 100 && cantidad < 499){
        precio = 7;
    }else if(cantidad > 500){
        precio = 6;
    }
    let total_venta = cantidad * precio;
    let ganancia = total_venta * 0.0825;
    alert(`El precio total para el cliente es: $${total_venta.toFixed(2)}`);
    alert(`La ganancia para el vendedor es: $${ganancia.toFixed(2)}`);

}

function pop(){
    hora = parseInt(prompt("Ingresa la hora,formato 24hr"));
    minuto = parseInt(prompt("Ingrese los minutos"));
    segundo = parseInt(prompt("Ingrese los segundos"));
    let minutoSiguiente = minuto;
    let horaSiguiente = hora;
    let segundoSiguiente = segundo + 1;
if(segundoSiguiente === 60){
    segundoSiguiente = 0;
    minutoSiguiente = minuto + 1;
}else if(minutoSiguiente === 60){
    minutoSiguiente = 0;
    horaSiguiente = hora + 1;
}else if(horaSiguiente === 24){
    horaSiguiente = 0;
}
alert(
    `La hora un segundo después es: ${horaSiguiente.toString().padStart(2, '0')}:${minutoSiguiente
        .toString()
        .padStart(2, '0')}:${segundoSiguiente.toString().padStart(2, '0')}`
);

}     

function am(){
    idem = parseInt(prompt("Ingrese el número identificador del empleado (1-Cajero, 2-Servidor, 3-Preparador de mezclas, 4-Mantenimiento):"))
    dias = parseFloat(prompt("Ingrese la cantidad de días trabajados (máximo 6 días):"))
    let salario;
   
    if(idem === 1){
     salario= 56;
    }else if(idem===2){
        salario=64;
    }else if(idem===3){
        salario = 80;
    }else if(idem ===4){
        salario = 48;
    }else{
        alert("ID de empleado no válido.")
    }
        let total_apagar = salario * dias;
        alert(`El sueldo semanal es:$${total_apagar.toFixed(2)}`);
    

}
function mp(){
    let primernúmero = parseInt(prompt("ingrese el primer digito positivos"));
    let segundonúmero = parseInt(prompt("ngrese el segundo digito positivos"));
    let tercernúmero = parseInt(prompt("ingrese el tercer digito positivos"));
    let cuartonúmero = parseInt(prompt ("ingrese el cuarto digito positivos"));
    let pares = 0;
    let media = 0;
    let suma = 0;
    let Nmayor = primernúmero;
    
    if(primernúmero % 2 === 0)pares++;
       
    if(segundonúmero % 2 === 0)pares++;
     
    if(tercernúmero % 2 === 0)pares++;
        
    if(cuartonúmero % 2 === 0)pares++;
       
    Nmayor = Math.max(primernúmero, segundonúmero, tercernúmero, cuartonúmero);
    
    if(tercernúmero % 2 === 0){
        alert("El cuadrado del segundo número es: " + (segundonúmero ** 2));
    }
    
    if( primernúmero< cuartonúmero){
      media = (primernúmero + segundonúmero + tercernúmero + cuartonúmero) /4;  
      alert("La media de los cuatro números es: " + media.toFixed(2));
    }

    if(tercernúmero > 50 && tercernúmero< 700){
            suma = primernúmero + segundonúmero + tercernúmero + cuartonúmero;
            alert("El tercero está entre 50 y 700.");
            alert("La suma de los cuatro números es: " + suma);
        }
    
        alert("Cantidad de números pares: " + pares);
        alert("El número mayor es: " + Nmayor);
    
}

function mv(){
let primernúmero = parseInt(prompt("Digite un número entero positivo"));
let factorial = 1;
let contador = 1;
if( primernúmero < 0){
    alert("El número debe ser positivo o cero")
}else{
    while(contador <= primernúmero){
    factorial = factorial * contador;
    contador++;
    }
}
alert("El factorial de " + primernúmero + " es: " + factorial);


}

function pm(){
    número= parseInt(prompt("Digite el número"));
    let suma = número * (número + 1) / 2;
    alert("La suma de los primeros: " + número + " números es: " + suma);
}

function vp(){
    let número= parseInt(prompt("Digite el número"));
    let suma = 0;
    for (let x = 1; x <= número; x++){
       if (x % 2 !==0){
        suma += x;
       }
    }
    alert("La suma de los números impares menores o iguales a: " + número + "es: " + suma);

}

function bea(){
   
    let suma = 0;
    for(let x = 2; x <= 1000; x +=2){ 
        suma += x;
    }
    alert("La suma de todos los números pares hasta 1000 es: " + suma);
}
function wwe(){
    let número= parseInt(prompt("Digite un número para calcular su factorial:"));
    let x = 1;
    let factorial = 1;
    while(x <= número){
        factorial = factorial * x;
        x = x + 1;
    }
    alert("El factorial de " + número + " es: " + factorial);

}

function arc(){
    let primernúmero = parseInt(prompt("Digite el dividendo:"));
    let segundonúmero = parseInt(prompt("Digite el divisor:"));
    let cociente = 0;
    let resto = primernúmero;
     while(resto >= segundonúmero) {
        resto = resto - segundonúmero;
        cociente++;
     }
     alert("El cociente es: " + cociente);
     alert("El resto es: " + resto);


}

function eng(){
    let número = parseInt(prompt("Digite un número positivo:"));
    let contador = 0;
    let suma = 0;
    while(número>= 0){
        suma = suma + número;
        contador++;
        número = parseInt(prompt("Digite un número positivo o un número negativo para salir):"));
    }
    if(contador > 0){
       let media = suma / contador;
       alert("La media de los números ingresado es : " + media);
    }else{
        alert("No se ingresaron números positivos")
    }
}
function spa(){
    let x = 1;
    let número = 0;
    while(x <= 100){
        número = número + x;
        x++;  
    }
    alert("La suma de los primeros 100 números es: " + número);  
}
function lol(){   
    let número = 0;
    for(let x = 1; x <= 100;){
        número = número + x;
        x++;  
    }
    alert("La suma de los primeros 100 números es: " + número);
}
function aja(){
    let x = 1;
    let número = 0;
    do{
        número = número + x;
        x++;
    }while(x <= 100 );
    alert("La suma de los primeros 100 números es: " + número);
}
function oa(){
    let número = parseInt(prompt("Ingrese el número"));
    let SumaP = 0;
    let SumaI= 0;
    let ContadorP = 0;
    let ContadorI = 0;
    for(let x = 1; x <= 10; x++){
        let número = parseInt(prompt("Ingrese el número " + x + " (positivo o negativo):"));
        if(número % 2 === 0){
            SumaP += número;  
            ContadorP++; 
        }else{
            SumaI += número;
            ContadorI++;
        }
    }
    if(ContadorP >= 0){
        let mediap = SumaP / ContadorP;
        alert("La media de los números pares es: " + mediap);
    }else{
        alert("No se ingresaron números pares.");
    }
    if (ContadorI > 0) {
        let mediai = SumaI / ContadorI;
        alert("La media de los números impares es: " + mediai);
    } else {
        alert("No se ingresaron números impares.");
    }
}

function che(){
    mayorp = 0;
    ciudadm = 0;
    
    for(let x = 1; x <= 11; x++){
        let poblacion = parseInt(prompt("Ingrese el número " + x + ":"));  
    if(x === 1){
        mayorp = poblacion;
        ciudadm = x;
    }else{
        if(poblacion>=mayorp){
            mayorp = poblacion;
            ciudadm = x;
        }
    }
    }
    alert("La ciudad con la mayor población es la ciudad:  "  + ciudadm +   " con una población de: " + mayorp);
}
function gozu(){
    let número = "si";
while (número === "si") {
    alert("Este es el programa en ejecución.");
    número = prompt("¿Desea continuar? (si/no):").toLowerCase();
    if (número === "si") {
        let opcion = parseInt(
            prompt(
                "¡Genial! ¿Qué te gustaría hacer?\n" +
                "1. Saber un chiste.\n" +
                "2. Ver una broma secreta.\n" +
                "3. Hacer un cálculo rápido.\n" +
                "4. Salir del programa.\n" +
                "5. Confidencial."
            )
        );
        
        switch (opcion) {
            case 1:
                alert("¿Qué le dice una taza a otra? ¿Qué taza ciendo?");
                break;
            case 2:
                alert("¿Sabías que los programadores nunca tienen tiempo libre? ¡Porque siempre están depurando!");
                break;
            case 3:
                alert("Vamos a hacer un cálculo rápido, ¿cuál es 3 + 5?");
                let nume = prompt("Ingrese su respuesta:");
                if (nume === "8") {
                    alert("¡Correcto!");
                } else {
                    alert("Tranquilo, sigue intentando!!");
                }
                break;
            case 4:
                alert("¡Gracias por usar el programa! ¡Hasta la próxima!");
                número = "no";  // Salir del bucle principal
                break;
            case 5:
                let numeConfirm = prompt("¿Desea continuar? (si/no):");
                numeConfirm = prompt("¿ESTÁ SEGUROOOO?!!!!! (si/no):");
                window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
                break;
            default:
                alert("Opción no válida. Por favor, elija una opción entre 1 y 5.");
            }    
        } 
    }
}   
function tot(){
    let nume = "si";
    while (nume === "si") {
        alert("Este es el programa en ejecución.");   
        for (let x = 1; x <= 9; x++) {
            alert("Tabla de multiplicar del " + x + ":");
            for (let P = 1; P <= 10; P++) {
                alert(x + " x " + P + " = " + (x * P));  
            }
        }  
        nume = prompt("¿Desea continuar? (si/no):");
    }
    alert("¡Gracias por usar el programa!"); 
    
}
function hl(){
    let Nmayor = -Infinity;
    let nmenor = Infinity;
    for (let x = 1; x <= 20; x++) {
        let nume = parseInt(prompt("Ingresa el número " + x + ":"));
        if (nume > Nmayor) {
            Nmayor = nume;
        }
        if (nume < nmenor) {
            nmenor = nume;
        }
    }
    alert("El número mayor es: " + Nmayor);
    alert("El número menor es: " + nmenor);   
}
function help(){
    let nume = parseInt(prompt("Ingrese la cantidad de términos de la serie Fibonacci:"));
    let a = 0;
    let b = 1;
    alert("La serie de Fibonacci es:");
    for(let i = 1; i <= nume; i++){
        alert(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
}
function me(){
  let a = parseInt(prompt("Ingrese el primer número:"));
  let b = parseInt(prompt("Ingrese el segundo número:"));
  let temp;
  do{
    temp = b
    b = a % b
    a = temp
  }while(b !== 0)
    alert ("El M.C.D. es: "+ a);
}
function pls(){
    let numero = parseInt(prompt("Ingrese un número:"));
    let suma = 0;
    for(x = 1; x <= numero - 1; x++){
        if(numero % x === 0){
            suma += x;
        }
    }
    if(suma === numero){
        alert(" es un número perfecto: "+ numero);
    }else{
        alert(" no es un número perfecto: "+ numero);
    }
}
function xd(){
    let numero = parseInt(prompt("Ingrese el número de iteraciones para la aproximación de P1:"));
    let p1 = 0;
    let signo = 1;
    for(let x = 1; x <= numero; x++){
        p1 += (signo * (4 /(2 * x -1)));
        signo = -signo;
    }
    alert("La aproximación de π es: "+ p1);
}
function GG(){
    let numero = parseInt(prompt("Ingrese el número de iteraciones para la aproximación de Pi:"));
    let p1 = 3;
    let signo = 1;
    for(let x = 1; x <= numero; x++){
        p1 += signo * (4 / ((2 * x) * (2 * x +1) * (2 * x + 2)));
        if(signo = 1){
            signo = -1;
        }else{
            signo = 1;
        }
    }
    alert("La aproximación de π es: "+ p1);
}