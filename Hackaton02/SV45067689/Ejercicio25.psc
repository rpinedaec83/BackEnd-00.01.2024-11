//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Proceso Ejercicio25
    
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