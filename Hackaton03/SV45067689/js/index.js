// document.getElementById("calculadora").addEventListener("click", (e) => {
//     e.preventDefault();
//     Ejercicio01();
// });


function ejercicio01(){
    console.log("Ejercicio 01");
    let numero = Number.parseInt(prompt("Ingresa un numero"));
    if(numero> 99 && numero<1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero no tiene 3 digitos")
    }
}

function ejercicio02(){
    console.log("Ejercicio 02");
    let numero = Number.parseInt(prompt("Ingrese un numero entero"))
    if(numero < 0)
        alert("Este numero es negativo");
    else
        if (numero > 0)
        alert("Este numero es positivo");
    else 
        if(numero == 0)
            alert("cero es un numero neutro");
    
}

function ejercicio03(){

    let numero = Number.parseInt(prompt("Ingresar un numero"))
    if (numero % 10 == 4){
        alert(`Numero ingresado: ${numero} termina en 4`);
    }
    else
        alert(`Numero ingresado: ${numero} no termina en 4`);
}

function ejercicio04(){

    let N1 = Number.parseFloat(prompt("Ingresar primer numero"));
    let N2 = Number.parseFloat(prompt("Ingresar seguno numero"));
    let N3 = Number.parseFloat(prompt("Ingresar tercero numero"));

    if(N1 <N2 && N1 < N3){
        if(N2 < N3){
            alert(`El orden de los numeros de menor a mayor es:\n 
                ${N1} \n
                ${N2} \n
                ${N3}`);
        }
        else
            {
                alert(`El orden de los numeros de menor a mayor es:\n 
                    ${N1} \n
                    ${N3} \n
                    ${N2}`);
            }
            
    }
    if (N2 < N1 && N2 < N3) {
                if (N1 < N3){
                    alert(`El orden de los numeros de menor a mayor es:\n 
                        ${N2} \n
                        ${N1} \n
                        ${N3}`);
                }
                else{
                    alert(`El orden de los numeros de menor a mayor es:\n 
                        ${N2} \n
                        ${N3} \n
                        ${N1}`);
                }
    }
     if (N3 < N1 && N3 < N2) {
        if(N1 < N2){
            alert(`El orden de los numeros de menor a mayor es:\n 
                ${N3} \n
                ${N1} \n
                ${N2}`); 
            }
            else{
                alert(`El orden de los numeros de menor a mayor es:\n 
                    ${N3} \n
                    ${N2} \n
                    ${N1}`); 
            }            
     }
}

function ejercicio05(){
    price = 80
    descuento = 0
    let cantZapatos = Number.parseInt(prompt("Ingrese la cantidad de zapatos a comprar"));
    priceSindescuento = price * cantZapatos;

    if(cantZapatos > 10 && cantZapatos <=20){
        descuento = priceSindescuento * 0.1;
     }
        else if (cantZapatos > 20 && cantZapatos <=30){
            descuento = priceSindescuento * 0.20;
    }
    else if (cantZapatos > 30){
         descuento = priceSindescuento * 0.40;
    }
    total = priceSindescuento - descuento;
    alert(`El preciot total es: ${priceSindescuento} \n
            El descuento es: ${descuento} \n 
            El total a pagar es: ${total}`);
}


function ejercicio06(){

    horasTrabaj = Number.parseInt(prompt("Ingresar numero de horas trabajadas"));
    sueldo = 0;
    sueldoTotal = 0;
    horasExtras = 0;
    if(horasTrabaj <=40 ){
        sueldoTotal = horasTrabaj * 20;
    }
    else{
        horasExtras = horasTrabaj - 40;
        costoExtra = horasExtras * 25;
        sueldo = 40 * 20;
        sueldoTotal = sueldo + costoExtra;

    }
    alert(`Tu sueldo es: ${sueldoTotal} \n
        Tienes un total de ${horasExtras} realizadas`);

}

function ejercicio07(){

    consumo = Number.parseFloat(prompt("Ingresar el monto consumido"));
    membresia = prompt("Ingresar Tipo de Membresia \n A <-- \n B <-- \n C <--");
    descuento = 0;
    total = 0;
    switch(membresia){
        case "A": 
            descuento = consumo * 0.1;
            break;
        case "B":
            descuento = consumo * 0.15;
            break;
        case "C":
            descuento = consumo * 0.2;
            break;
        default:
            alert("Ingrese una membrsía valida");
    }
    Total = consumo - descuento;
    alert(`Tu descuento es S/. ${descuento} \n
        Solo debes abonar S/. ${Total} `);
}

function ejercicio08(){

    N3 = Number.parseInt(prompt("Ingrese la NOTA 1"));
    N2 = Number.parseInt(prompt("Ingrese la NOTA 2"));
    N1 = Number.parseInt(prompt("Ingrese la NOTA 3"));
    promedio = (N1 + N2 +N3)/ 3

    if(promedio <= 10.5){
        alert("Alumno no aprobó el semestre");
    }
    else{
        alert("Alumno logró aprobar el semestre");
    }
    
    alert(`El promedio final es: ${promedio}`);
}

function ejercicio09(){

    sueldo = Number.parseFloat(prompt("Ingresar sueldo actual"));

    if(sueldo < 2000){
        aumento = sueldo * 0.05
    }
    else{
        aumento = sueldo * 0.10
    }
    sueldo = sueldo + aumento;
    alert(`El aumento es de S/. ${aumento} \n 
        Tu nuevo sueldo es de S/. ${sueldo}`);
}

function ejercicio10(){

    numero = Number.parseInt(prompt("Ingresar un numero"));
    if (numero == 0){
        alert("cero es numero neutro");
    }
    else if(numero % 2 == 0){
        alert(`El numero ${numero} es par`);
    }
    else{
        alert(`El numero ${numero} es impar`);
    }
       
}


function ejercicio11(){

    Num1 = Number.parseInt(prompt("Ingrese primer numero"));
    Num2 = Number.parseInt(prompt("Ingrese segundo numero"));
    Num3 = Number.parseInt(prompt("Ingrese tercero numero"));

    if(Num1 > Num2 && Num1 > Num3 ){
        alert(`El numero mayoe es: ${Num1}`);
    }
    else if(Num2 > Num1 && Num2 > Num3){
        alert(`El numero mayoe es: ${Num2}`);
    }
    else{
        alert(`El numero mayoe es: ${Num3}`);
    }

}

function ejercicio12(){
    N1 = Number.parseInt(prompt("Ingrese primer numero"));
    N2 = Number.parseInt(prompt("Ingrese segundo numero"));
    
    if(N1 > N2 ){
        alert(`El numero mayoe es: ${N1}`);
    }
    else{
        alert(`El numero mayoe es: ${N2}`);
    }
}

function ejercicio13(){
    
    letra = prompt("Ingresar una letra por teclado")

    if(letra == "A" || letra == "E" ||  letra == "I" || letra == "O" || letra == "U" ){
        alert(`Caracter ingresado: ${letra} es una vocal` )
    }
    else if(letra == "a" || letra == "e" ||  letra == "i" || letra == "o" || letra == "u" ){
        alert(`Caracter ingresado: ${letra} es una vocal` )
    }
    else{
        alert(`Caracter ingresado: ${letra} no es una vocal` )
    }
}

function ejercicio14(){

    num = Number.parseInt(prompt("Ingrese un numero"));
    cantDiv = 0;

    if (num < 0 || num > 9){
        alert("Ingrese un numero valido del 1 al 9");
    }
    else{
            for (let j = 1; j <= num; j++) {
                if(num % j == 0){
                    cantDiv = cantDiv + 1;
                    console.log(cantDiv);
                }    
            }

            if (cantDiv == 2){
                alert(`Numero ${num} es un numero primo` );
            }else{
                alert(`Numero ${num} no es un numero primo` );
            }
        }
         
    }
            

function ejercicio15(){

    pulgada = 0.393701
	libra = 0.453592
    op = Number.parseInt(prompt
        ("Ingresar que operacion deseas realizar \n Opcion 1 = convertir centimtetros a pulgadas \n Opcion 2 = convertir libras a kilogramos "));
    dato = Number.parseFloat(prompt("Ingresar cantidad a convertir"));

    switch(op){
        case 1 :
            conversion = dato * pulgada;
            alert(`La conversion de ${dato} centimetros a pulgadas es ${conversion}`) ;
            break;
        case 2:
            conversion = dato * libra;
            alert(`La conversion de ${dato} libras a kilogramos es ${conversion}`) ;
            break;
        default:
            alert("Ingrese una operacion valida");
    }

}

function ejercicio16(){

    ndia = Number.parseInt(prompt("Ingrese un numero para el dia de la semana"));

    switch(ndia){
        case 1:
            alert("Este dia corresponde al domingo");
            break;
        case 2:
                alert("Este dia corresponde al lunes");
                break;
        case 3:
                alert("Este dia corresponde al martes");
                break;
        case 4:
                alert("Este dia corresponde al miercoles");
                break;
        case 5:
                alert("Este dia corresponde al jueves");
                break;
        case 6:
                alert("Este dia corresponde al viernes");
                break;
        case 7:
                alert("Este dia corresponde al sabado");
                break;
                default:
                    alert("Seleccione un dia vlaido del 1 al 7");

    }
}

function ejercicio17(){
    alert("Ingrese la hora actual en formato de 24 Hrs");
    hora = Number.parseInt(prompt("Ingrese hora de 0 a 24"));
    minuto = Number.parseInt(prompt("Ingrese minuto de 0 59"))
    segundo = Number.parseInt(prompt("Ingrese segundo de 0 59"));
    
    if(hora > 24){
        alert("La Hora no valida");
    }
    else if(minuto > 59){
        alert("Tiempo en minutos no es valido");
    }else if(segundo > 59){
        alert("Tiempo en segundos no es valido");
    }
    else{
        segundo = segundo +1;
        if (segundo == 60 && minuto == 59 ){
            hora = hora + 1;
            segundo = "00";
            minuto = "00";
            if(hora == 24){
              alert("Hora es 00:00:00")
            }  
            else{
                alert(`La hora es ${hora}: ${minuto}: ${segundo}` );
            }
       }
        else{ 
            alert(`La hora es ${hora}: ${minuto}: ${segundo}` );
        }
    }}



function ejercicio18(){
        
    cant = Number.parseInt(prompt("Ingresar la cantidad de Cd's a comprar"))

    if(cant < 10){
        totalApagar= cant * 10
    }
    else if(cant >= 10 && cant < 100){
        totalApagar = cant * 8
    }
    else if(cant >= 100 && cant < 500){
        totalApagar = cant * 7
    }
    else{
        totalApagar = cant * 6
    }
    ganancia = totalApagar * 0.0825
    alert(`El precio total es S/. ${totalApagar} \n
        La ganancia del vendedor es S/. ${ganancia}`);
       
}

function ejercicio19(){

    sueldo = 0;
    op = Number.parseInt(prompt
        ("Ingresar que opcion para cada trabajador \n 1.- Cajero  \n 2.- Servidor \n 3.- Preparador de mezclas \n 4.- Mantenimiento "));
    diasTrab = Number.parseInt(prompt("Ingrese la cantidad de dias trabajados"));

    if(diasTrab > 6 ){
        alert("La cantidad de dias trabajdos no puede exceder a 6");
    }
    else{
        switch(op){
            case 1:
                sueldo = diasTrab * 56;
                break;
            case 2:
                sueldo = diasTrab * 64;
                break;
            case 3:
                sueldo = diasTrab * 80;
                break;
            case 4:
                sueldo = diasTrab * 48;
                break;
            default :
                alert("opcion no valida");
        }
    }
    alert(`El calculo de sueldo es S/.  ${sueldo}`)
}

function ejercicio20(){

    n1 = Number.parseInt(prompt("Ingrese primer numero"));
    n2 = Number.parseInt(prompt("Ingrese segundo numero"));
    n3 = Number.parseInt(prompt("Ingrese tercer numero"));
    n4 = Number.parseInt(prompt("Ingrese cuarto numero"));

    cuadrado = Math.pow(n2, 2);
    contador = 0;

    if (n1 % 2 == 0){
        contador = contador + 1;
    }
     if(n2 % 2 == 0){
        contador = contador + 1;
    }
     if(n3 % 2 == 0){
        contador = contador + 1;
    }
    if(n4 % 2 == 0){
        contador = contador + 1;
    }

    if(n1 > n2 && n1 > n3 && n1 > n4){
        mayor = n1;
    }
    else if(n2 > n1 && n2 > n3 && n2 > n4){
        mayor = n2;
    }
    else if(n3 > n1 && n3 > n2 && n3 > n4){
        mayor = n3;
    }
    else if(n4 > n1 && n4 > n2 && n4 > n3){
        mayor = n4;
    }
        alert(`La cantidad de numeros pares es: ${contador} \n
            El numero mayor de los 4 es: ${mayor} \n
            El cuadrado de ${n2} es : ${cuadrado}`);

}

function ejercicio21(){
  
    i = Number.parseInt(prompt("Ingrese numero a factorizar"))

    if(i < 0 ) {
        alert("Ingresar numero valido");
    }
    else{
        fact = 1
        for (let x = 1; x <=i ; i++) {
            fact = fact * x;
            alert(`El factorial de ${i} es ${fact}`);
        }
       
    }
   
}

function ejercicio22(){

    num = Number.parseInt(prompt("Ingresar la cantidad de nuneros para la suma"));
    suma = 0;

    for (let i = 1; i <= num; i++) {
        suma = suma + i;
        console.log(suma);
    }
    alert(`La suma de los ${num} primeros numeros es ${suma}`);

}

function ejercicio23(){

    num = Number.parseInt(prompt("Ingresar numero"));
    suma = 0;

    for (let i = 0; i <= num ; i++) {
        if( i % 2 != 0){
            suma = suma + i;
        }
        
    }
    alert(`La suma de numeros impares es: ${suma}`);
}

function ejercicio24(){
    alert("Suma de numeros pares del 1 al 1000");
    N = 1000;
    suma = 0;

    for (let i = 0; i <= N; i++) {
        if (i % 2 == 0){
            suma = suma + i;
        }  
    }
    alert(`La suma de los numeros pares del 1 al 1000 es : ${suma}`);
}

function ejercicio25(){

    num = Number.parseInt(prompt("Ingrese un numero para calculo de factorial"));
    facto = 1;
    temp = num;

    while (num > 1) {
        facto = facto * num;
        num = num -1;
    }

    alert(`El factorial de ${num} es ${facto}`);
}


function ejercicio26(){

    div = Number.parseInt(prompt("Ingrese dividendo"));
    divsor = Number.parseInt(prompt("Ingreso divisor"));

    cociente = 0;
    residuo = div;

 while (residuo >= divsor) {
        residuo = residuo - divsor;
        cociente = cociente + 1;
 }

    alert(`El cociente es ${cociente} \n
        El residuo es: ${residuo}`);
}

function ejercicio27(){
    suma = 0;
    contador = 0;
    N = 0;

    while (N >= 0) {
       N = Number.parseFloat(prompt("Ingresar numero entero"));
       if (N > 0){
            suma = suma + N;
            contador = contador + 1;
       }
    }
    media = suma / contador;
    alert(`La media de los numeros ingresados es: ${media}`);
}

function ejercicio28(){

    suma = 0;
    contador = 0;
    N = 1;
    do{
        N = N +1;
        contador = contador + 1;
        suma = suma + contador;
    } while (N <= 100);

    alert(`La suma de los primeros 100 numeros es: ${suma}`);
}


function ejercicio29(){

    suma = 0;
    contador = 0;
    N = 1;
   while (N <= 100) {
        
        contador = contador + 1;
        suma = suma + contador;
        console.log(contador);
        N = N + 1;
    }
    alert(`La suma de los primeros 100 numeros es: ${suma}`);
}


function ejercicio30(){

    suma = 0;
    contador = 0;
    //N = 1;
    for (let N = 1; N <= 100; N++) {
        contador = contador + 1;
        suma = suma + contador;
        //console.log(contador);
        N = N + 1;
        
    }
    alert(`La suma de los primeros 100 numeros es: ${suma}`);
}

function ejercicio31(){
    contador = 0;
    contadorImpar = 0;
    sumaPar = 0;
    sumaImpar = 0;
    mediaPar = 0;
    mediaImpar = 0;
    for (let i = 1; i <= 10; i++) {
      
        j = Number.parseFloat(prompt(`Ingrese numero ${i}`));
        if(j % 2 == 0){
            sumaPar = sumaPar + j;
            contador = contador + 1;
            //console.log(contador);
        }  
        else{
            sumaImpar = sumaImpar + j;
            contadorImpar = contadorImpar + 1;
        }
    }
        mediaPar = sumaPar / contador;
        mediaImpar = sumaImpar / contadorImpar;
        //console.log(sumaImpar);
        //console.log(contadorImpar);

        alert(`La media de numeros pares es: ${mediaPar} \n
              La media de los numeros imaprs es: ${mediaImpar}`);
        

}

function ejercicio32(){

}


function ejercicio33(){

    alert("Estimado usuario Bienvenido");
    //op = (prompt("Desea continuar con el programa S/N"));
    op = "S";

  while (op == "S" || op == "s") {

     op = (prompt("Si Desea continuar con el programa presione S \n Presione cualquier otro caracter para salir!!"));
  
  }

   alert("Gracias por usar el programa");

}

function ejercicio34(){

    i = Number.parseFloat(prompt("Ingresar numero para elborar tabla de multiplicar"))
    resul = 0;
    j = 0;
    for ( j = 0; j <= 9; j++) {
       //alert(`Tabla de multiplicar del ${i}`)
       resul = i * j;
       //console.log(`${i} * ${j} = ${resul}`);
       alert(`${i} * ${j} = ${resul}`);
  
    }
    // alert(`Tabla de multiplicar del ${i} \n ************\n
//     ${i} * ${j} = ${resul} `)
    
}

function ejercicio35(){
   
        mayor = 0;
        menor = 0;
        x = 0;
        n = 0;

    for (let i = 1; i <= 5; i++) {
      
        j = Number.parseFloat(prompt(`Ingrese numero ${i}`));
        if(i == 1){
            mayor = j;
            menor = j;
        }
        else
             if( j > mayor){
                mayor = j;
                
        }else
            if(j < menor)
                menor = j;
            console.log(menor);

    }           

    alert(`El numero mayor de todos es: ${mayor} \n
        El numero menor de todos los ingresados es ${menor}` ) ;
}

function ejercicio36(){

    n = Number.parseFloat(prompt("Ingresar cantida de numros de seria fibonacci"));
    a = 1;
    b = 1;
    nvalor = 0;
    const arrayFib = [0,1];

    for(let i = 2; i <= n; i++){

        arrayFib.push(arrayFib[i -1] + arrayFib[i -2]);
    }
    //console.log(arrayFib.toString());
    alert(`La seria Fibonacci de ${n} es : ${arrayFib.toString()}`);
}

function ejercicio37(){

    a = Number.parseInt(prompt("Ingrese primer numero"));
    b = Number.parseInt(prompt("Ingrese segundo numero"));

    while (b !=0 ) {
        residuo = a % b;
        a = b;
        b = residuo;
    }
    alert(`El M.C.D es ${a}`);
}

function ejercicio38(){

    num = Number.parseInt(prompt("Ingresar numero"));
    suma = 0;

    for (let i = 0; i < num; i++) {
       
        if(num % i == 0)
        suma = suma + i;
    }
    if(suma == num){

        alert(`El numero ${num} es perfecto`);
    }
    else{
        alert(`El numero ${num} no es perfecto`);
    }
   
}