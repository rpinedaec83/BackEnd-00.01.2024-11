Algoritmo Ejercicio36
    
    Escribir "Ingrese el número para calcular la serie Fibonacci:"
    Leer n
	
    a = 0
    b = 1
	
    Escribir "Serie Fibonacci:"
    Escribir a
    Escribir b
	
    Para i = 3 Hasta n Con Paso 1
        c = a + b
        Escribir c
        a = b
        b = c
    FinPara
FinAlgoritmo
