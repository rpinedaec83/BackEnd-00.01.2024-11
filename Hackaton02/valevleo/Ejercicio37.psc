// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Algoritmo MCD_euclides
	Definir a, b, residuo Como Entero
	
	Escribir "Ingrese el primer número: "
	Leer a
	Escribir "Ingrese el segundo número: "
	Leer b
	
	Mientras b <> 0 Hacer
		residuo <- a Mod b  // Calculamos el residuo de a dividido por b
		a <- b  // Asignamos el valor de b a a
		b <- residuo  // Asignamos el residuo a b
	FinMientras
	
	Escribir "El MCD es: ", a
FinAlgoritmo
