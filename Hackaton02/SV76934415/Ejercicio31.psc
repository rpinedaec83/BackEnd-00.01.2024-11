// 31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Algoritmo calcular_media_pares_impares
    DEFINIR numero, suma_pares, suma_impares, cantidad_pares, cantidad_impares COMO ENTERO
    suma_pares <- 0
    suma_impares <- 0
    cantidad_pares <- 0
    cantidad_impares <- 0
    
    Escribir "Ingrese 10 números:"

    Para i <- 1 Hasta 10 Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer numero
        
        Si numero MOD 2 = 0 Entonces
            suma_pares <- suma_pares + numero
            cantidad_pares <- cantidad_pares + 1
        Sino
            suma_impares <- suma_impares + numero
            cantidad_impares <- cantidad_impares + 1
        FinSi
    FinPara
    
    Si cantidad_pares > 0 Entonces
        media_pares <- suma_pares / cantidad_pares
        Escribir "La media de los números pares es: ", media_pares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi

    Si cantidad_impares > 0 Entonces
        media_impares <- suma_impares / cantidad_impares
        Escribir "La media de los números impares es: ", media_impares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi

FinAlgoritmo
