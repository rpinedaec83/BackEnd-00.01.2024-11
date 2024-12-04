// 35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Algoritmo mayor_menor
    DEFINIR numero, mayor, menor COMO ENTERO
    CANTIDAD <- 20
    Escribir "Ingrese ", CANTIDAD," números:"

    Leer numero
    mayor <- numero
    menor <- numero

    Para i <- 2 Hasta CANTIDAD Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer numero
        
        Si numero > mayor Entonces
            mayor <- numero
        FinSi
        
        Si numero < menor Entonces
            menor <- numero
        FinSi
    FinPara

    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo
