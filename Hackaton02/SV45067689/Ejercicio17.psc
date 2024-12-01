// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Algoritmo calcular_hora_segundo
	Definir horas, minutos, segundos Como Entero
	Escribir "Ingrese la hora actual en formato 24 horas (HH MM SS):"
	Leer horas, minutos, segundos
	
	Si horas < 0 o horas > 23 o minutos < 0 o minutos > 59 o segundos < 0 o segundos > 59 Entonces
		Escribir "La hora ingresada es inválida."
	Sino
		segundos <- segundos + 1
		Si segundos == 60 Entonces
			segundos <- 0
			minutos <- minutos + 1
			Si minutos == 60 Entonces
				minutos <- 0
				horas <- horas + 1
				Si horas == 24 Entonces
					horas <- 0
				FinSi
			FinSi
		FinSi
		Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos
	FinSi
FinAlgoritmo
