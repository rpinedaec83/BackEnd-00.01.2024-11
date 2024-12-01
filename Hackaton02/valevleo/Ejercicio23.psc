Algoritmo sumaNimpares
    
    Escribir "Ingrese un numero n para sumar sus impares hasta ese numero:"
    Leer n
	suma = 0
	
    Para i = 1 Hasta n Hacer
		Si i % 2 <> 0 Entonces
			suma = suma + i
		FinSi
    FinPara

    Escribir "La suma de los numeros impares menores o iguales a ", n, " es: ", suma
	
FinAlgoritmo
