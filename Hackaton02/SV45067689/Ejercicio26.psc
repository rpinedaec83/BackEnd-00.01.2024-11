// 26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Proceso Ejercicio26
	Definir dividendo, divisor, cociente, resto Como Entero
	Definir continuar Como Caracter
	
	Repetir
		Escribir "Ingrese el dividendo:"
		Leer dividendo
		Escribir "Ingrese el divisor:"
		Leer divisor
		
		cociente <- 0
		resto <- dividendo
		
		Mientras resto >= divisor Hacer
			resto <- resto - divisor
			cociente <- cociente + 1
		FinMientras
		
		Escribir "El cociente es: ", cociente
		Escribir "El resto es: ", resto
		
		Escribir ""
		Escribir "¿Desea realizar otra operación? (S/N):"
		Leer continuar
		Escribir ""
	Hasta Que continuar = "N" O continuar = "n"
	
	Escribir "Gracias por usar el programa."
FinAlgoritmo
