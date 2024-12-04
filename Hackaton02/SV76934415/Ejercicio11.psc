// 11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Algoritmo mayor_tres_numeros
    DEFINIR numero1, numero2, numero3, mayor COMO ENTERO

    Escribir "Ingresa el primer número:"
    Leer numero1
    Escribir "Ingresa el segundo número:"
    Leer numero2
    Escribir "Ingresa el tercer número:"
    Leer numero3
    
    mayor <- numero1
    
    Si numero2 > mayor Entonces
        mayor <- numero2
    FinSi
    
    Si numero3 > mayor Entonces
        mayor <- numero3
    FinSi
    
    Escribir "El número mayor es: ", mayor
FinAlgoritmo
