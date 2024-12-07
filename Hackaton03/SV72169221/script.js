

function Ejercicio01(){
    
    let num;

    do {
        num=Number.parseInt(prompt("Ingrese un número positivo"));
    } while (num<0);

    if (num>=100 && num<1000) {
        alert("El número que ingreso tiene 3 dígitos");
    }
    else{
        alert("El número que ingreso no tiene 3 dígitos");
    }
        

}


function Ejercicio02 (){
    let num=Number.parseInt(prompt("Ingrese un número entero"));

    if(num<0){
        alert("El número que ingreso es negativo");
    }
    else{
        alert("El número que ingresó en mayor o igual a cero");
    }
}


function Ejercicio03(){
    let num=prompt("Ingrese un número");

    if(num[num.length-1]=="4"){
        alert("El número que usted ingresó termina en 4");
    }
    else{
        alert("El número que usted ingresó NO termina en cuatro");
    }
}


function Ejercicio04(){
    let num1=Number.parseFloat(prompt("Ingrese el primer número"));
    let num2=Number.parseFloat(prompt("Ingrese el segundo número"));
    let num3=Number.parseFloat(prompt("Ingrese el tercer número"));

    let nums=[num1,num2,num3];
    

    nums.sort((a,b)=>a-b);

    alert("Números ordenados de menor a mayor: "+ nums.join(", "));
}


function Ejercicio05(){
    let cant=0;
    do {
        cant=Number.parseInt(prompt("Cuantos zapatos desea comprar(Solo números mayores o iguales a cero)"));
    } while (cant<0);
    
    let desc=0;
    let precioV=cant*80;
    
    if(cant>10 && cant<=20){
        desc=precioV*0.1;
    }
    else if(cant>20 && cant<=30){
        desc=precioV*0.2;
    }
    else{
        desc=precioV*0.4;
    }
    let precioF=precioV-desc;

    alert(`El precio a pagar por ${cant} zapatos es de ${precioF}`);

}

function Ejercicio06(){
    let sueldoSemanal=0;
    let horasTrabajadas=Number.parseInt(prompt("Ingrese las horas trabajadas en la semana"));
    if(horasTrabajadas<=40){
        sueldoSemanal=horasTrabajadas*20;
    }
    else{
        sueldoSemanal=800+((horasTrabajadas-40)*25);
    }

    alert(`El trabajador trabajó ${horasTrabajadas} horas y por ello se le pagará ${sueldoSemanal}`);
}

function Ejercicio07(){
    let monto=Number.parseFloat(prompt("Ingrese el monto de su compra"));
    
    let opc;
    do {
        opc=Number.parseInt(prompt(`¿Qué tipo de membresía posee?
            1. --> Membresia A
            2. --> Membresía B
            3. --> Membresía C
    
            Digite una opción`));
    } while (opc<1 || opc>3);
    
        

    let desc;
    switch (opc) {
        case 1:
            desc=monto*0.1;
            break;
        case 2:
            desc=monto*0.15;
            break;
        case 3:
            desc=monto*0.2;
            break;
        default:
            desc=0;
            break;
    }
    monto=monto-desc;
    alert(`El monto a pagar es de ${monto} aplicando el descuento de la membresia`);
}



function Ejercicio08(){
    let nota1=Number.parseFloat(prompt("Ingrese su primera nota"));
    let nota2=Number.parseFloat(prompt("Ingrese su segunda nota"));
    let nota3=Number.parseFloat(prompt("Ingrese su tercera nota"));

    let promedio=(nota1+nota2+nota3)/3;

    if(promedio<=11){
        alert(`El estudiante desaprobó con nota ${promedio}`)
    }
    else{
        alert(`El estudiante aprobó el curso con nota ${promedio}`)
    }
}



function Ejercicio09(){
    let ganancia=Number.parseFloat(prompt(`Ingrese la cantidad de ganancia del trabajador`));
    let aum=0;
    let cantidadAum="";
    if (ganancia<=2000){
        cantidadAum="10%";
        aum=ganancia*0.1;
        ganancia=ganancia+aum;
    }
    else{
        cantidadAum="5%";
        aum=ganancia*0.05;
        ganancia=ganancia+aum;
    }
    alert(`El aumento del trabajador será del ${cantidadAum}
        Su nuevo sueldo es de ${ganancia}`)

}


function Ejercicio10(){

    let numero=0;
    do {
        numero=Number.parseInt(prompt("Ingrese un número entero(cero no es válido)"))
    } while (numero==0);
    
    let condicion="";
    if (numero%2==0){
        condicion="par";
    }
    else{
        condicion="impar";
    }
    alert(`El número que usted ingresó es ${condicion}`);

}


function Ejercicio11(){
    let numero1=Number.parseInt(prompt(`Ingrese el primer número`));
    let numero2=Number.parseInt(prompt(`Ingrese el segundo número`));
    let numero3=Number.parseInt(prompt(`Ingrese el tercer número`));

    let numeros=[numero1,numero2,numero3];

    let mayor=0;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>mayor){
            mayor=numeros[i];
        }
        
    }
    alert(`El mayor de los tres números introducidos es el ${mayor}`);
}

function Ejercicio12(){
    let numer1=Number.parseInt(prompt("Ingrese un número entero"));
    let numer2=Number.parseInt(prompt("Ingrese otro número entero"));

    if (numer1>numer2){
        alert(`El mayor de los números ingresados es el ${numer1}`);
    }
    else if(numer2>numer1){
        alert(`El mayor de los números que ingresaste es el ${numer2}`);
    }
    else{
        alert(`Los dos números ingresados son iguales`);
    }


}

function Ejercicio13(){
    vocales=["a","e","i","o","u","A","E","I","O","U"];

    let letra="";
    do {
        letra=prompt(`Ingrese una letra`);
    } while (letra.length>1);

    
    let cond=0;
    for (let i = 0; i < vocales.length; i++) {
        if(letra==vocales[i]){
            cond=1;
        }
        
    }
    if(cond==1){
        alert(`El usuario ingresó una vocal`)
    }
    else{
        alert(`El usuario NO ingresó una vocal`)
    }
}

function Ejercicio14(){
    let numero=0;
    do {
        numero=Number.parseInt(prompt(`Ingrese un número entero del 1 al 10`));
    } while (numero<1 || numero>10);
    
    let cond=true;
    for (let i = 2; i < numero; i++) {
        if (numero%i==0){
            cond=false;
        }
        
    }

    if(cond){
        alert(`El número introducido es primo`);
    }
    else{
        alert(`El número introducido no es primo`);
    }


}

function Ejercicio15(){
    let cm=Number.parseFloat(prompt(`Ingrese una cantidad en centímetros`));
    let lb=Number.parseFloat(prompt(`Ingrese una cantidad en libras`));

    let pulg=cm/2.54;
    let kg=lb/2.205;

    alert(`${cm} centímetros equivalen a ${pulg} pulgadas
        ${lb} libras equivalen a ${kg} kilogramos`)


}

function Ejercicio16(){
    let numeroEscogido=0;
    do {
        numeroEscogido=Number.parseInt(prompt(`Ingrese un número del 1 al 7`))
    } while (numeroEscogido<1 || numeroEscogido>7);


    let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];

    alert(`El número ${numeroEscogido} corresponde al día ${dias[numeroEscogido-1]} de la semana`)

}


function Ejercicio17(){
    let horas=Number.parseInt(prompt(`Ingrese el valor de la hora`));
    let minutos=Number.parseInt(prompt(`Ingrese los minutos`));
    let segundos=Number.parseInt(prompt(`Ingrese los segundos`));

    alert(`${horas}:${minutos}:${segundos} dentro de un segundo sera ${horas}:${minutos}:${segundos+1}`)
}
function Ejercicio18(){

    let cantCD=Number.parseInt(prompt(`Digite la cantidad de CDs que desea comprar`));

    let precioV=0;
    if(cantCD<=9){
        precioV=cantCD*10;
    }
    else if(cantCD>=10 && cantCD<=99){
        precioV=cantCD*8;
    }
    else if(cantCD>=100 && cantCD<=499){
        precioV=cantCD*7;
    }
    else{
        precioV=cantCD*6;
    }

    let ganancia=precioV*0.0825

    alert(`El cliente debe pagar ${precioV} por la compra de ${cantCD} CDs\nLa ganancia del vendedor es de ${ganancia} dolares`)


}

function Ejercicio19(){
    let opcEmpleado=Number.parseInt(prompt(`Digite la opción para seleccionar al empleado
        1 -> Cajero
        2 -> Servidor
        3 -> Preparador de Mezclas
        4 -> Mantenimiento`));
    let cantDias=0;
    do {
        cantDias=Number.parseInt(prompt(`Digite la cantidad de días que trabajó el empleado seleccionado (Maximo 6 días)`))
    } while (cantDias>6 || cantDias<0);

    let empleado="";
    let sueldo=0;

    switch (opcEmpleado) {
        case 1:
            empleado="Cajero";
            sueldo=56*cantDias;
            break;
        case 2:
            empleado="Servidor";
            sueldo=64*cantDias;
            break;
        case 3:
            empleado="Preparador de Mezclas";
            sueldo=80*cantDias;
            break;
        case 4:
            empleado="Mantenimiento";
            sueldo=48*cantDias;
            break;
        default:
            empleado="";
            sueldo=0;
            break;
    }
    alert(`Usted selecciono al empleado: ${empleado}
        El empleado trabajó ${cantDias} días
        Se le debe pagar ${sueldo} dolares al empleado`);

}

function Ejercicio20(){
    let numeros=[];
    for (let i = 0; i < 4; i++) {
         let num=0;
         do {
            num=Number.parseInt(prompt(`Ingrese un número mayor a cero`))
            
         } while (num<=0);
        numeros[i]=num;
    }


    //PARES
    let cantPares=0;
    for (let j = 0; j < numeros.length; j++) {
        if(numeros[j]%2==0){
            cantPares=cantPares+1;
        };
        
    }
    alert(`Hay ${cantPares} números pares`);


    //CUAL ES EL MAYOR
    let max=0;
    for (let j = 0; j < numeros.length; j++) {
        if(numeros[j]>max){
            max=numeros[j];
        };
    }

    alert(`El mayor de los números es ${max}`)
    
    //TERCERO PAR CUADRADO SEGUNDO
    if(numeros[2]%2==0){
        alert(`El cuadrado del segundo número: ${numeros[1]} es ${numeros[1]**2} `)
    }

    //PRIMERO MENOR QUE CUARTO, MEDIA
    if(numeros[0]<numeros[3]){
        let prom=0
        let sum=0;
        for (let i = 0; i < numeros.length; i++) {
            sum=sum+numeros[i];
            
        }
        prom=sum/numeros.length;
        alert(`El promedio de los 4 números es ${prom}`);
    }


    //SEGUNDO MAYOR QUE TERCERO
    if(numeros[1]>numeros[2]){
        if(numeros[2]>=50 && numeros[2]<=700){
            let sumita=0;
            for (let i = 0; i < numeros.length; i++) {
                sumita=sumita+numeros[i];
                
            }
            alert(`La suma de los cuatro números es ${sumita}`);
        }
    }
}



function Ejercicio21(){
    let numerito=0;
    do {
        numerito=Number.parseInt(prompt(`Digite un número entero mayor a cero`));
    } while (numerito<=0);

    let factorial=1;

    for (let i = 1; i <= numerito; i++) {
        
        factorial=factorial*i;
    }
    alert(`El factorial de ${numerito} es ${factorial}`)
}

function Ejercicio22(){
    let n=0
    do {
        n=Number.parseInt(prompt(`Ingrese n`));
    } while (n<0);
    let sumita1=0;
    for (let i = 1; i <=n; i++) {
        sumita1=sumita1+i;
        
    }
    alert(`La suma de los números del 1 al ${n} es : ${sumita1}`);
}

function Ejercicio23(){
    let n=0
    do {
        n=Number.parseInt(prompt(`Ingrese n`));
    } while (n<0);
    let sumita1=0;
    for (let i = 1; i <=n; i++) {
        if (i%2==1) {
            sumita1=sumita1+i;
        }
        
        
    }
    alert(`La suma de los números impares del 1 al ${n} es : ${sumita1}`);
}

function Ejercicio24(){

    let sumita2=0;
    for (let i = 0; i <=1000; i++) {
        if (i%2==0) {
            sumita2=sumita2+i;
            
        }
        
    }

    alert(`La suma de todos los números pares del 1 al 1000 es ${sumita2}`);

}




















