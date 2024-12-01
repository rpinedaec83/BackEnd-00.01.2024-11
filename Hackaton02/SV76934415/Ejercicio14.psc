//  14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Algoritmo numero_primo
    DEFINIR numero, i, divisor COMO ENTERO
    DEFINIR esPrimo COMO ENTERO
    
    esPrimo <- 1  // Inicializamos esPrimo en 1 (supuesto primo)
    
    Escribir "Ingresa un número entre 1 y 9:"
    Leer numero
    
    Si numero < 1 O numero > 9 Entonces
        Escribir "El número debe estar entre 1 y 9."
    Sino
        Si numero = 1 Entonces
            Escribir "El número no es primo."
        Sino
            Para i <- 2 HASTA numero - 1 HACER
                Si numero MOD i = 0 Entonces
                    esPrimo <- 0  // Si encuentra un divisor, no es primo
                FinSi
            FinPara

            Si esPrimo = 1 Entonces
                Escribir "El número es primo."
            Sino
                Escribir "El número no es primo."
            FinSi
        FinSi
    FinSi
FinAlgoritmo
