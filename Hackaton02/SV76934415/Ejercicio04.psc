// 4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.


Algoritmo ordenar_tres_numeros
    DEFINIR n1, n2, n3, temp COMO ENTERO

    Escribir "Ingresa el primer número:"
    Leer n1
    Escribir "Ingresa el segundo número:"
    Leer n2
    Escribir "Ingresa el tercer número:"
    Leer n3
    
    Si n1 > n2 Entonces
        temp <- n1
        n1 <- n2
        n2 <- temp
    FinSi
    
    Si n2 > n3 Entonces
        temp <- n2
        n2 <- n3
        n3 <- temp
    FinSi
    
    Si n1 > n2 Entonces
        temp <- n1
        n1 <- n2
        n2 <- temp
    FinSi
    
    Escribir "Los números ordenados son: ", n1, ", ", n2, ", ", n3
FinAlgoritmo
