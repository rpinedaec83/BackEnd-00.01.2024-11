// 24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Algoritmo suma_pares
    DEFINIR suma COMO ENTERO
    
    suma <- 0
    
    Para i <- 2 HASTA 1000 CON PASO 2 HACER
        suma <- suma + i
    FinPara
    
    Escribir "La suma de los números pares hasta 1000 es: ", suma
FinAlgoritmo
