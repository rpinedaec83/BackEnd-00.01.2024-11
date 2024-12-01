// 25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Algoritmo calcular_factorial_distinto
    DEFINIR numero, factorial, i COMO ENTERO
    
    Escribir "Ingresa un número para calcular su factorial:"
    Leer numero
    
    factorial <- 1
    i <- 1
    
    Mientras i <= numero Hacer
        factorial <- factorial * i
        i <- i + 1
    FinMientras
    
    Escribir "El factorial de ", numero, " es: ", factorial
FinAlgoritmo
