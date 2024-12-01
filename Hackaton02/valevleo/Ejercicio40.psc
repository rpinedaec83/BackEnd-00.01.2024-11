// 	40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
//		La formula que se debe aplicar es:
//		Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
//		Patron: 4/n(n+1)(n+2)

Algoritmo aproximacion_pi
	Definir i, term, pii, sign Como Real
	Definir numTerminos Como Entero
	
	Escribir "Ingrese el número de términos para aproximar Pi: "
	Leer numTerminos
	
	pii <- 3  // Inicializamos Pi con el primer valor de la serie
	sign <- 1  // Usamos esta variable para alternar los signos (+/-)
	
	Para i <- 2 Hasta numTerminos*2 Con Paso 2 Hacer
		term <- 4 / (i * (i + 1) * (i + 2))  // Calculamos el término de la serie
		
		Si sign = 1 Entonces
			pii <- pii + term  // Si el signo es positivo, sumamos el término
		Sino
			pii <- pii - term  // Si el signo es negativo, restamos el término
		FinSi
		
		sign <- sign * (-1)  // Alternamos el signo para el siguiente término
	FinPara
	
	Escribir "La aproximación de Pi con ", numTerminos, " términos es: ", pi
FinAlgoritmo
