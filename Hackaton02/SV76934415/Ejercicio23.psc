// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Algoritmo suma_impares
    DEFINIR numero, suma COMO ENTERO
    
    Escribir "Ingresa un número n para calcular la suma de los números impares menores o iguales a n:"
    Leer numero
    
    suma <- 0
    
    Para i <- 1 HASTA numero HACER
        Si i MOD 2 <> 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
    
    Escribir "La suma de los números impares menores o iguales a ", numero, " es: ", suma
FinAlgoritmo
