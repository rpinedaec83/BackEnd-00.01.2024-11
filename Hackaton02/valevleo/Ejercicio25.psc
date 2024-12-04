Algoritmo factorialv2
    
    Escribir "Ingrese un numero para calcular su factorial:"
    Leer numero
	
	facto = 1
	temp = numero
    Mientras numero >= 1 Hacer
        facto = facto * numero
        numero = numero - 1
    FinMientras
	
    Escribir "El factorial de ", temp, " es: ", facto
FinAlgoritmo