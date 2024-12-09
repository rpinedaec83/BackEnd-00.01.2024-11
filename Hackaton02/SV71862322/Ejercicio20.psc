Proceso operaciones_con_numeros
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

	Si num3 % 2 = 0 Entonces
		cuadrado <- num2 * num2
		Escribir "El cuadrado del segundo número es: ", cuadrado
	FinSi

	Si num1 < num4 Entonces
		media <- (num1 + num2 + num3 + num4) / 4
		Escribir "La media de los cuatro números es: ", media
	FinSi
	
	Si num2 > num3 Entonces
		Si num3 >= 50 Y num3 <= 700 Entonces
			sumaTotal <- num1 + num2 + num3 + num4
			Escribir "La suma de los cuatro números es: ", sumaTotal
		FinSi
	FinSi

FinProceso
