// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Algoritmo calcular_factorial
    DEFINIR numero, factorial COMO ENTERO
    
    Escribir "Ingresa un número para calcular su factorial:"
    Leer numero
    
    factorial <- 1
    
    Para i <- 1 HASTA numero HACER
        factorial <- factorial * i
    FinPara
    
    Escribir "El factorial de ", numero, " es: ", factorial
FinAlgoritmo
