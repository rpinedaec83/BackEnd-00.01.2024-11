//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso Ejercicio23
	
	Escribir "Ingresar numero"
	Leer N
	
	para i = 1 hasta N Con Paso 2 Hacer
		si i mod 2 <> 0 Entonces
			suma = suma + i
		FinSi
		
	FinPara
	
	Escribir "La suma de los numeros impares es ", suma
FinProceso
