

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








