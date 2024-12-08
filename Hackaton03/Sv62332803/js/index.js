



function ejecutar(){
    console.log("ejercicio01");
    let numero = Number.parseInt(prompt("digita los numeros"));
    if(numero>99 && numero<1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("El número que introdujo tiene mas o menos de 3 dígitos")
    }
} 

function mifuncion(){
    console.log("ejercicio02");
    let numero = Number.parseInt(prompt("digita los numeros"));
    if(numero>0){
        alert("este numero es positivo")
    }else if(numero<0){
        alert("este numero es negativo")
    }else if(numero=0)
       alert ("esto es 0")
    }

    function miclick() {
        let primerNumero = prompt("Digite un número entero:");

        if (isNaN(Number(primerNumero))) {
            alert("Por favor, ingresa un número válido");
            return;
        }
        let ultimoDigito = primerNumero.trim().slice(-1);
        if (ultimoDigito === '4') {
            alert("El número termina en 4");
        } else {
            alert("El número no termina en 4");
        }
    }
    
    function mibtn(){
        let primerNumero = prompt("Digite el primer numero")
        let segundoNumero = prompt("Digite el segundo digito")
        let tercerNumero = prompt("Digite el tercer digito")

        if (isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(tercerNumero)) {
            alert("Por favor, ingresa solo números válidos.");
            return;
        }

        if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
            alert("El primer número es mayor.");
        } else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
            alert("El segundo número es mayor.");
        } else if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
            alert("El tercer número es mayor.");
        } else {
            alert("Algunos o todos los números son iguales.");
        }

    }

    function mibt(){
        let precioUnitario = 80;
        let primerNumero = Number(prompt("Ingrese la cantidad de zapatos que desea comprar"));
        let descuento;
        let total_compra = primerNumero * precioUnitario;
        if (isNaN(primerNumero) || primerNumero< 0) {
            alert("Por favor, ingresa una cantidad válida de zapatos.");
            return;
        }

         if(primerNumero> 30){
             descuento = 0.4;
        }else if(primerNumero>20){
            descuento = 0.2;
        }else if(primerNumero>10){
            descuento = 0.1;
        }else{
            descuento = 0;
        }    
        let total_apagar = total_compra - (total_compra* descuento)
        alert(`Cantidad de zapatos: ${primerNumero}`);
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
        let primerNumero = parseFloat(prompt("Digite laprimera nota"));
        let segundoNumero = parseFloat (prompt("Digite la segundo nota"));
        let tercerNumero = parseFloat(prompt("Digite la tercer nota"));
        let promo = (primerNumero + segundoNumero + tercerNumero) / 3;
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
        let primerNumero = parseFloat(prompt("Digite laprimera nota"));
        if(primerNumero % 2 === 0){
            alert("El numero es par")
        }else{
            alert("El numero es impar")
        }

    
    }
    
    function lun(){
        let primerNumero = prompt("Digite el primer numero")
        let segundoNumero = prompt("Digite el segundo digito")
        let tercerNumero = prompt("Digite el tercer digito")

        if (isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(tercerNumero)) {
            alert("Por favor, ingresa solo números válidos.");
            return;
        }

        if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
            alert("El primer número es mayor.");
        } else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
            alert("El segundo número es mayor.");
        } else if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
            alert("El tercer número es mayor.");
        } else {
            alert("Algunos o todos los números son iguales.");
        }
    }

    function hu(){
        let primerNumero = prompt("Digite el primer numero")
        let segundoNumero = prompt("Digite el segundo digito")

        if (isNaN(primerNumero) || isNaN(segundoNumero)) {
            alert("Por favor, ingresa solo números válidos.");
            return;
        }

        if (primerNumero > segundoNumero) {
            alert("El primer número es mayor.");
        } else if (segundoNumero > primerNumero) {
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
        let numero = prompt("Digite el Ingrese un número entre 1 y 10:")
        if(numero< 1 && numero> 10){
           alert("El número ingresado no está en el rango de 1 a 10.")
        }else if(numero === "1"){
            alert("El número no es primo.")
        }else if(numero === "2" || numero === "3" || numero === "5" || numero === "7"){
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
        "Número no válido, ingrese un número entre 1 y 7."
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
    
}