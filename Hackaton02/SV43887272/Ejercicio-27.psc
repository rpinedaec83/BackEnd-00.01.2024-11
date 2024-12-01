// Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.
Proceso sin_titulo
	num = 0
	sum = 0
	cont = 0
	Escribir "Ingrese un número"
	Leer num
	Mientras num > 0 Hacer
			sum = sum + num
		Escribir "Ingrese un número"
		Leer num
		cont = cont +1
	FinMientras
	media = sum / cont
	Escribir "La media es : ", media
	escribir cont, sum
FinProceso
