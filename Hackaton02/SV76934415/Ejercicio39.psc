//  39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//      La formula que se debe aplicar es:
//      pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Algoritmo aproximacion_pii_gregory_leibniz
    Definir n COMO ENTERO
    Definir pii COMO REAL
    pii <- 0

    Escribir "Ingrese el número de términos para aproximar pii:"
    Leer n

    Para i <- 1 Hasta n Con Paso 1
        pii <- pii + 4 / ((2 * i) - 1) * ((-1) ^ (i + 1))
    FinPara

    Escribir "La aproximación de pii con ", n, " términos es: ", pii
FinAlgoritmo
