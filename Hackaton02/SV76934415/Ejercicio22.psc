// 22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo suma_n_primeros
    DEFINIR numero, suma COMO ENTERO
    
    Escribir "Ingresa un número n para calcular la suma de los primeros n números:"
    Leer numero
    
    suma <- 0
    
    Para i <- 1 HASTA numero HACER
        suma <- suma + i
    FinPara
    
    Escribir "La suma de los primeros ", numero, " números es: ", suma
FinAlgoritmo
