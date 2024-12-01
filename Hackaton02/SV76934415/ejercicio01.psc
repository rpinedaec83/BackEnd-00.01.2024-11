// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Algoritmo tres_digitos
    LIMITE_INFERIOR <- 100
    LIMITE_SUPERIOR <- 999
    DEFINIR numero COMO ENTERO
	
    Escribir "Ingresa un número:"
    Leer numero
    
    Si numero >= LIMITE_INFERIOR Y numero <= LIMITE_SUPERIOR Entonces
        Escribir "El número tiene tres dígitos"
    Sino
        Escribir "El número no tiene tres dígitos"
    FinSi
FinAlgoritmo
