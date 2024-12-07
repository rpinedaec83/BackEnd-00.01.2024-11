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
    console.log("Ejercicio o7");

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