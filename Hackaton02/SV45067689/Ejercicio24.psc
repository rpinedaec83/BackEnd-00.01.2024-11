//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso sin_titulo
	Escribir "Calculo de la suma de los numeros pares del 1 al 1000"
	N = 1000
	suma = 0
	para x = 1 hasta N Con Paso 1 Hacer
		si x mod 2 == 0 Entonces
			suma = suma + x
		FinSi
		
	FinPara
	Escribir "La suma de los numeros pares hasta el 1000 es ", suma
FinProceso
