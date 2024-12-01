//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso Ejercicio27
	
	suma = 0
	contador = 0
	N = 0
	Mientras N >= 0 Hacer
		Escribir "Ingresar numero entero"
		Leer N
		SI N > 0 Entonces
			suma = suma + N
			contador = contador + 1
		FinSi
	FinMientras
	media = suma / contador
	Escribir suma
	Escribir contador
	Escribir "La media de los numeros ingresados es: ", media
FinProceso
