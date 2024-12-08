function ejercicio01(){
     console.log("Ejercicio 01");

     let numero= Number.parseInt(prompt("Ingresa numero"));

     if((numero>99 && numero<1000) || (numero>-1000 && numero <-99)){
        alert("Tiene 3 digitos");
     }else{
        alert("No tiene 3 digitos");
     }
}

function ejercicio02(){
    console.log("Ejercicio 02");

    let numero= Number.parseInt(prompt("Ingresa numero"));

    while(numero===0){
         numero= Number.parseInt(prompt("Ingresa otra vez un numero por favor"));
    }

    if(numero>0){
        alert("Es un numero positivo");
    }else{
        alert("Es un numero negativo");
    }
}

function ejercicio03(){
    console.log("Ejercicio 03");

    let numero=Number.parseInt(prompt("Ingresa numero"));

    if(numero.toString().endsWith('4')){
        alert("Termina en 4")
    }else{
        alert("No termina en 4");
    }
}


function ejercicio04(){
    console.log("Ejercicio 04");

    let num1=Number.parseInt(prompt("Ingresa el primer numero"));
    let num2 = Number.parseInt(prompt("Ingresa el segundo numero"));
    let num3 = Number.parseInt(prompt("Ingresa el tercer numero"));

    let numeros=[num1,num2,num3];

    let ordenados=numeros.sort((a, b) => a - b);
    alert(ordenados);
}

function ejercicio05(){
    console.log("Ejercicio 05");

    let cantidad = Number.parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar"));
    let precio=80;
    let descuento;
    let totalCompra;

    while(cantidad<=0){
        cantidad= Number.parseInt(prompt("Ingresa una cantidad positiva por favor"));
   }
    
    if(cantidad>=30){
        totalCompra = cantidad*precio;
        descuento=totalCompra*0.10;
        totalFinal= totalCompra -descuento;
    }else if(cantidad>20 && cantidad<30){
        totalCompra = cantidad*precio;
        descuento=totalCompra*0.20;
        totalFinal= totalCompra -descuento;
    }else if(cantidad>10){
        totalCompra = cantidad*precio;
        descuento=totalCompra*0.40;
        totalFinal= totalCompra -descuento;
    }else{
        totalCompra = cantidad*precio;
        totalFinal=totalCompra;
    }

    alert("El total final es "+totalFinal);
}

function ejercicio06(){
    console.log("Ejercicio 06");

    let horas=Number.parseInt(prompt("Ingrese la cantidad de horas que trabaja semanalmente"));
    let sueldoTotal;
    let sueldoInicial;
    let horasExtras;
    let adicional;

    if(horas<=40){
        sueldoTotal=horas*20;
    }else{
     horasExtras=horas-40;
     adicional= horasExtras*25;
     sueldoInicial =40*20;
     sueldoTotal=sueldoInicial+adicional;
    }

    alert("El sueldo total es "+sueldoTotal);
}

function ejercicio07(){
    console.log("Ejercicio 07");

    let tipoMembresia = prompt("Ingrese tipo de membresia");
    let total=1000;

    switch(tipoMembresia.toUpperCase()){
        case 'A':
            descuento=total*0.10;
            alert("Su tipo de membresia es "+tipoMembresia.toUpperCase()+ " y su descuento es "+descuento);
            break;
        case 'B':
            descuento=total*0.15;
            alert("Su tipo de membresia es "+tipoMembresia.toUpperCase()+ " y su descuento es "+descuento);
            break;
        case 'C':
            descuento=total*0.20;
            alert("Su tipo de membresia es "+tipoMembresia.toUpperCase()+ " y su descuento es "+descuento);
            break;
        default:
            alert("Membresia no valida");
            break;
    }
}


function ejercicio08(){
    console.log("Ejercicio 08");

    let num1= parseFloat(prompt("Ingrese primera nota"));
    let num2 = parseFloat(prompt("Ingrese segunda nota"));
    let num3 = parseFloat(prompt("Ingrese tercera nota"));

    let suma;
    let promedio;
    suma= num1+num2+num3;
    promedio=suma/3;

    if(promedio>=10.5){
        alert("Su nota final es "+promedio+" Aprobo");
    }else{
        alert("Su nota final es "+promedio+" Desaprobo");
    }
}

function ejercicio09(){
    console.log("Ejercicio 09");

    let sueldo= parseFloat(prompt("Ingrese sueldo del trabajador"));
    let aumento;
    if(sueldo>2000){
      aumento=sueldo*0.05;
    }else{
      aumento=sueldo*0.10;
    }

    alert("El sueldo es "+sueldo+" Entonces el aumento es de "+aumento);
}


function ejercicio10(){
    console.log("Ejercicio 10");

    let numero= Number.parseInt(prompt("Ingrese numero"));

    if(numero % 2==0){
        alert(numero+" es par");
    }else{
        alert(numero+" es impar");
    }
}


function ejercicio11(){
    console.log("Ejercicio 11");

    let num1=Number.parseInt(prompt("Ingrese primer numero"));
    let num2=Number.parseInt(prompt("Ingrese segundo numero"));
    let num3=Number.parseInt(prompt("Ingrese tercer numero"));

    if (num1 > num2 && num1 > num3) {
        alert(num1+" es mayor");
    } else if (num2 > num1 && num2 > num3) {
        alert(num2+" es mayor");
    } else if (num3 > num1 && num3 > num2) {
        alert(num3+" es mayor");
    } 
}


function ejercicio12(){
    console.log("Ejercicio 12");

    let num1=Number.parseInt(prompt("Ingrese primer numero"));
    let num2=Number.parseInt(prompt("Ingrese segundo numero"));

    if(num1>num2){
        alert(num1+ " es mayor");
    }else if(num2>num1){
        alert(num2+ " es mayor");
    }else{
        alert(num1+ " y "+num2+" son iguales");
    }
}


function ejercicio13(){
    console.log("Ejercicio 13");

    let letra= prompt("Ingresa letra");
    let letraMayuscula=letra.toUpperCase();

    if(letraMayuscula==='A' || letraMayuscula==='E' || letraMayuscula==='I' || letraMayuscula==='O' || letraMayuscula==='U'){
        alert(letraMayuscula+" es una vocal");
    }else{
        alert(letraMayuscula+" no es una vocal");
    }
}


function ejercicio14(){
    console.log("Ejercicio 14");

    let num = Number.parseInt(prompt("Ingresa numero"));

if (num < 1 || num > 9) {
    alert("Numero ingresado fuera de rango");
} else {
    let esPrimo = true;

    for (let i = 2; i <= Math.trunc(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert(num + " es un número primo.");
    } else {
        alert(num + " no es un número primo.");
    }
}
}

function ejercicio15(){
    console.log("Ejercicio 15");

    let centimetros=parseFloat(prompt("Ingrese centimetros"));
    let libras=parseFloat(prompt("Ingrese libras"));

    let pulgadas;
    let kilogramos;

    pulgadas = centimetros * 0.39;
    kilogramos = libras * 0.45;

    alert(centimetros + " centimetros en pulgadas es " + pulgadas);
    alert(libras + " libras en kilogramos es " + kilogramos);
}


function ejercicio16(){
    console.log("Ejercicio 16");

    let numero=Number.parseInt(prompt("Ingrese numero"));

    switch(numero){
        case 1:
            alert("Es Lunes");
            break;
        case 2:
            alert("Es Martes");
            break;
        case 3:
            alert("Es Miercoles");
            break;
        case 4:
            alert("Es Jueves");
            break;
        case 5:
            alert("Es Viernes");
            break;
        case 6:
            alert("Es Sabado");
            break;
        case 7:
            alert("Es Domingo");
            break;
        default:
            alert("Numero fuera del rango");
            break;
    }
}

function ejercicio17(){
    console.log("Ejercicio 17");

    let horas=Number.parseInt(prompt("Ingrese hora"));
    let minutos=Number.parseInt(prompt("Ingrese minutos"));
    let segundos=Number.parseInt(prompt("Ingrese segundos"));

    alert("Hora Actual "+horas+":"+minutos+":"+segundos);
    alert("Hora despues de un segundo "+horas+":"+minutos+":"+(segundos+1));
}


function ejercicio18(){
    console.log("Ejercicio 18");

    let cantidad= Number.parseInt(prompt("Ingrese la cantidad de CDs que desea comprar"));
    
    let gananciaCliente;
    let gananciaVendedor;
    let gananciaTotal;

    if(cantidad<=9){
        gananciaTotal=parseFloat(cantidad*10);
       gananciaVendedor=parseFloat(gananciaTotal*0.0825);
       gananciaCliente= gananciaTotal-gananciaVendedor;
    }

    if(cantidad>=10 && cantidad<=99){
        gananciaTotal=parseFloat(cantidad*8);
        gananciaVendedor=parseFloat(gananciaTotal*0.0825);
        gananciaCliente= gananciaTotal-gananciaVendedor;
    }

    if(cantidad>=100 && cantidad<=499){
        gananciaTotal=parseFloat(cantidad*7);
        gananciaVendedor=parseFloat(gananciaTotal*0.0825);
        gananciaCliente= gananciaTotal-gananciaVendedor;
    }

    if(cantidad>500){
        gananciaTotal=parseFloat(cantidad*6);
        gananciaVendedor=parseFloat(gananciaTotal*0.0825);
        gananciaCliente= gananciaTotal-gananciaVendedor;
    }

    alert("Ganancia del cliente "+gananciaCliente);
    alert("Ganancia del vendedor "+gananciaVendedor);
    alert("Ganancia Total "+gananciaTotal);
}


function ejercicio19(){
    console.log("Ejercicio 19");
    let codigoCajero=10;
    let codigoServidor=20;
    let codigoPreparadorDeMezclas=30;
    let codigoMantenimiento=40;

    let codigo = prompt("Ingrese su codigo");
    let cantidad=Number.parseInt(prompt("Ingrese la cantidad de dias que trabaja por semana"));
    let sueldo=0;

    switch(codigo){
        case '10':
            sueldo=parseFloat(cantidad*56);
            alert("Su codigo es "+codigo);
            alert("Trabaja como cajero");
            alert("Su sueldo es "+sueldo);
            break;
        case '20':
            sueldo=parseFloat(cantidad*64);
            alert("Su codigo es "+codigo);
            alert("Trabaja como servidor");
            alert("Su sueldo es "+sueldo);
            break;
        case '30':
            sueldo=parseFloat(cantidad*80);
            alert("Su codigo es "+codigo);
            alert("Trabaja como preparador de mezclas");
            alert("Su sueldo es "+sueldo);
            break;
        case '40':
            sueldo=parseFloat(cantidad*48);
            alert("Su codigo es "+codigo);
            alert("Trabaja en mantenimiento");
            alert("Su sueldo es "+sueldo);
            break;
        default:
            alert("Codigo invalido");
            break;
    }
}


function ejercicio20(){
    console.log("Ejercicio 20");

    let promedio;
    let cuadrado;
    let suma;

    let num1 = Number.parseInt(prompt("Ingrese primer numero"));
    let num2 = Number.parseInt(prompt("Ingrese segundo numero"));
    let num3 = Number.parseInt(prompt("Ingrese tercer numero"));
    let num4 = Number.parseInt(prompt("Ingrese cuarto numero"));

    let numeros=[num1,num2,num3,num4];

    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    let mayor = Math.max(...numeros);
    
    if(numeros[0]<numeros[3]){
      promedio=(num1+num2+num3+num4)/4;
      alert("Como el primer numero es menor que el cuarto numero se hallara el promedio ");
      alert(promedio+" es el promedio");
    }

    if(numeros[2]%2==0){
        cuadrado=numeros[1]*numeros[1];
        alert("Como el tercer numero es par se hallara el cuadrado del segundo numero");
        alert(cuadrado+" es el curadro del segundo numero que es "+numeros[1]);
    }

    if((numeros[1]>numeros[2]) && (numeros[1]>=50 && numeros[1]<=700)){
        suma=numeros[0]+numeros[1]+numeros[2]+numeros[3];
        alert("Como el segundo numero es mayor que el tercer numero y esta entre 50 y 700 se hallara la suma de todos los numeros ingresados");
        alert(" La suma total es "+suma);
    }

    alert("Numeros Pares: "+numerosPares)
    alert("Cantidad de numeros pares "+numerosPares.length);
    alert(mayor+" es el mayor");
}



function ejercicio21(){
    console.log("Ejercicio 21");

    let numero=Number.parseInt(prompt("Ingrese numero"));
    let factorial=1;
    let i;

    if(numero<1){
        alert("Numero no valido");
    }else{
        for(i=1;i<=numero;i++){
           factorial=parseFloat(factorial*i);
        }
    }

    alert("El factorial de "+numero+" es "+factorial);
}


function ejercicio22(){
    console.log("Ejercicio 22");

    let N= Number.parseInt(prompt("Ingrese N"));
    let i;
    let numero;
    let sumaNumeros=0;

    for(i=1;i<=N;i++){
       numero=Number.parseInt(prompt(i+") Ingrese numero"));
       sumaNumeros=sumaNumeros+numero;
    }

    alert("La suma total es "+sumaNumeros);
}


function ejercicio23(){
    console.log("Ejercicio 23");
    let sumaImpar=0;
    let N=Number.parseInt(prompt("Ingrese el valor de N"));

    for(i=1;i<=N;i++){
        if(i %2!==0){
            sumaImpar=sumaImpar+i;
        }
     }

     alert("La suma impar es "+sumaImpar);
}


function ejercicio24(){
    console.log("Ejercicio 24");

    let i;
    let sumaPares=0;

    for(i=1;i<=1000;i++){
        if(i%2==0){
            sumaPares=sumaPares+i;
        } 
    }

    alert("La suma de los pares es "+sumaPares);
}


function ejercicio25(){
    console.log("Ejercicio 25");
    let numero= Number.parseInt(prompt("Ingresa numero"));
    let i=1;
    let factorial=1;

    while(i<=numero){
       factorial =factorial*i;
      i++;
    }
    alert("El factorial de "+numero+" es "+factorial);
}


function ejercicio26(){
    console.log("Ejercicio 26");

    let dividendo = parseInt(prompt("Ingrese dividendo"));
    let divisor = parseInt(prompt("Ingrese divisor"));


    while (divisor > dividendo) {
    divisor = parseInt(prompt("Ingrese el divisor nuevamente, debe ser menor o igual que el dividendo"));
    }

    let cociente = 0;

    while (dividendo >= divisor) {
    dividendo = dividendo - divisor;
    cociente = cociente + 1;
    }

    alert("Cociente: "+ cociente+ " Divisor: "+ divisor)
}

function ejercicio27(){
    console.log("Ejercicio 27");

    let numero;
    let sumaTotal=0;
    let promedio=0;
    let contador=0;

    do{
     numero=Number.parseInt(prompt("Ingrese numero"));
     if(numero>0){
        sumaTotal=sumaTotal+numero
     }
     contador++;
    }while(numero>0)
    
    promedio=sumaTotal/(contador-1);

    alert("La suma total es "+sumaTotal);
    alert("Ingreso "+contador+" numeros");
    alert("El promedio es "+promedio);
    alert("salio del programa");
}


function ejercicio28(){
    console.log("Ejercicio 28");

    let i;
    let sumaTotal=0;

    for(i=1;i<=100;i++){
          sumaTotal=sumaTotal+i;
    }

    alert("La suma total de los primeros 100 numeros es "+sumaTotal);

}


function ejercicio29(){
    console.log("Ejercicio 29");
    let sumaTotal=0;
    let i=0;

    while(i<=100){
      sumaTotal=sumaTotal+i;
      i++;
    }

    alert("La suma total de los primeros 100 numeros es "+sumaTotal);
}

function ejercicio30(){
    console.log("Ejercicio 30");
    let sumaTotal=0;
    let i=0;

    do{
      sumaTotal=sumaTotal+i;
      i++;
    }while(i<=100)

    alert("La suma total de los primeros 100 numeros es "+sumaTotal);
}

function ejercicio31(){
    console.log("Ejercicio 31");

    let i;
    let numero;

    let contadorPares=0;
    let sumaPares=0;
    let promedioPares;

    let contadorImpares=0;
    let sumaImpares=0;
    let promedioImpares;


    for(i=1;i<=10;i++){
      numero= Number.parseInt(prompt(i+") Ingrese numero"));
      if(numero%2==0){
         sumaPares=sumaPares+numero;
         contadorPares++;
      }else{
        sumaImpares=sumaImpares+numero;
        contadorImpares++;
      }
    }

    promedioPares=sumaPares/contadorPares;
    promedioImpares=sumaImpares/contadorImpares;
   

    alert("Cantidad de pares: "+contadorPares);
    alert("Cantidad de impares: "+contadorImpares);

    alert("La suma de los pares es "+sumaPares);
    alert("La suma de los impares es "+sumaImpares);

    alert("Promedio de los pares "+promedioPares);
    alert("Promedio de los impares "+promedioImpares);
}


function ejercicio32(){
    console.log("Ejercicio 32");

    let mayornumero = -999999;
    let menornumero = 999999;
    let Provincia, Ciudad, Poblacion, Ciudadmayor;

for (let i = 1; i <= 3; i++) {
    console.log(i + ".0) Provincia");
    Provincia = prompt("Ingrese el nombre de la provincia " + i);  
    
    for (let j = 1; j <= 11; j++) {
        console.log(j + ") Ciudad");
        Ciudad = prompt("Ingrese el nombre de la ciudad " + j);  
        
        Poblacion = parseInt(prompt("Ingrese la población de " + Ciudad));  
        
        if (mayornumero < Poblacion) {
            mayornumero = Poblacion;
            Ciudadmayor = Ciudad;
        }
    }
    
    alert("En " + Provincia + ", en la ciudad de " + Ciudadmayor + " es la que tiene la mayor población con " + mayornumero);
}}


function ejercicio33(){
    console.log("Ejercicio 33");

    let respuesta;
    do{
       respuesta = prompt("¿ Desea seguir en le programa?");
    }while(respuesta==='si');

    alert("Salio del programa")
}


function ejercicio34(){
    console.log("Ejercicio 34");

    let i;
    let j;
    let producto;

    for(i=1;i<=9;i++){
        for(j=1;j<=12;j++){
          producto=i*j;
          console.log(i +" * "+ j + " = " + producto);
        }
    }

}


function ejercicio35(){
    console.log("Ejercicio 35");

    let mayornumero = -999999;
let menornumero = 999999;


for (let i = 1; i <= 20; i++) {
    let num = parseInt(prompt(i + ") Ingresa un número:")); 

    if (mayornumero < num) {
        mayornumero = num;
    }

    if (menornumero > num) {
        menornumero = num;
    }
}

alert("El número menor es " + menornumero);
alert("El número mayor es " + mayornumero);
}


function ejercicio36(){
    console.log("Ejercicio 36");

    let numero = parseInt(prompt("Ingrese el número para calcular la serie Fibonacci:"));

    let a = 0;
    let b = 1;

    console.log("Serie Fibonacci:");
    console.log(a);
    console.log(b);


    for (let i = 3; i <= numero; i++) {
       let c = a + b;
       console.log(c);
       a = b;
       b = c;
    }

}

function ejercicio37(){
    console.log("Ejercicio 37");

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    
  
    while (num2 !== 0) {
        let residuo = num1 % num2;
        num1 = num2;
        num2 = residuo;
    }
    
    alert("El MCD es: " + num1);
}


function ejercicio38(){
    console.log("Ejercicio 38");

    let num = parseInt(prompt("Ingresa un número:"));
    let suma = 0;

    for (let i = 1; i < num; i++) {
       if (num % i === 0) {
          suma += i;
       }
    }

    if (num === suma) {
        alert(num + " es un número perfecto.");
    } else {
        alert(num + " no es un número perfecto.");
     }
}

function ejercicio39(){
    console.log("Ejercicio 39");

    let num = parseInt(prompt("Ingrese un número:"));
    let suma = 0;


   for (let i = 0; i < num; i++) {
     suma += Math.pow(-1, i) / (2 * i + 1);
   }

   alert("La aproximación a pi usando la fórmula de Leibniz es " + suma * 4);
}

function ejercicio40(){
    console.log("Ejercicio 40");
    
    let num=Number.parseInt(prompt("Ingrese numero"));
    let suma = 0;

    for (let i = 3; i <= num; i++) {
      suma += 4 * Math.pow(-1, i+1) / ((2*i) * (2*i+1) * (2*i+2));
    }

    const aproximacionPi = suma + 3;

    alert("La aproximación a pi reemplazando "+ num+ " en la serie de Nilakantha es "+ aproximacionPi);
}



