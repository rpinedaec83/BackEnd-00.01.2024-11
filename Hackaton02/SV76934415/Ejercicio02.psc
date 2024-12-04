// 2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.

Algoritmo es_negativo
    DEFINIR numero COMO ENTERO

    Escribir "Ingresa un número entero:"
    Leer numero
    
    Si numero < 0 Entonces
        Escribir "El número es negativo"
    Sino
        Si numero = 0 Entonces
            Escribir "El número neutro"
        SiNo
            Escribir "El número no es negativo"
        FinSi
    FinSi
FinAlgoritmo
