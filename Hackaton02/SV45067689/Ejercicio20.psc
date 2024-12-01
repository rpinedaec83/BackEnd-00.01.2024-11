// ------------------------------------------------------------------------------------------------------------------------------
//	20.	Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//			¿Cuántos números son Pares?

//			¿Cuál es el mayor de todos?

//			Si el tercero es par, calcular el cuadrado del segundo.

//			Si el primero es menor que el cuarto, calcular la media de los 4 números.				

//			Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//			Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Proceso Ejercicio20
	Definir num1, num2, num3, num4 Como Entero
	Definir cantidadPares, mayor, cuadrado, sumaTotal Como Entero
	Definir media Como Real
	
	Escribir "Ingrese el primer número:"
	Leer num1
	Escribir "Ingrese el segundo número:"
	Leer num2
	Escribir "Ingrese el tercer número:"
	Leer num3
	Escribir "Ingrese el cuarto número:"
	Leer num4
	
	// Contar pares
	cantidadPares <- 0
	Si num1 % 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Si num2 % 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Si num3 % 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Si num4 % 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	
	// Determinar el mayor
	mayor <- num1
	Si num2 > mayor Entonces
		mayor <- num2
	FinSi
	Si num3 > mayor Entonces
		mayor <- num3
	FinSi
	Si num4 > mayor Entonces
		mayor <- num4
	FinSi
	
	Escribir ""
	Escribir "Cantidad de números pares: ", cantidadPares
	Escribir "El mayor número es: ", mayor
	
	// Calcular el cuadrado del segundo número si el tercero es par
	Si num3 % 2 = 0 Entonces
		cuadrado <- num2 * num2
		Escribir "El cuadrado del segundo número es: ", cuadrado
	FinSi
	
	// Calcular la media si el primero es menor que el cuarto
	Si num1 < num4 Entonces
		media <- (num1 + num2 + num3 + num4) / 4
		Escribir "La media de los cuatro números es: ", media
	FinSi
	
	// Verificar y calcular suma si el segundo es mayor que el tercero y el tercero está entre 50 y 700
	Si num2 > num3 Entonces
		Si num3 >= 50 Y num3 <= 700 Entonces
			sumaTotal <- num1 + num2 + num3 + num4
			Escribir "La suma de los cuatro números es: ", sumaTotal
		FinSi
	FinSi

FinAlgoritmo
