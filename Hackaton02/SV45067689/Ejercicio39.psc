//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
		
		//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso Ejercicio39
    
    pii = 0
	
    Escribir "Ingrese el número de términos para aproximar el valor de Pi:"
    Leer n

    Para i = 1 Hasta n Hacer
        termino = 4 / (2*i-1) 
        Si i % 2 == 0 Entonces
            pii = pii + termino 
        SiNo
            pii = pii - termino 
        FinSi
    FinPara
	
    Escribir "La aproximación de Pi con ", n, " términos es: ", pi
FinAlgoritmo
