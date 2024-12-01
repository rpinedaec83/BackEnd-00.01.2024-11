// Hacer un algoritmo en Pseint donde se ingrese una 
//hora y nos calcule la hora dentro de un segundo.

Proceso HoraMasUnSegundo
	Definir hora, minuto, segundo Como Entero
		
		// Entrada de datos
	Escribir "Ingrese la hora (formato 24h):"
	Leer hora
	Escribir "Ingrese los minutos:"
	Leer minuto
	Escribir "Ingrese los segundos:"
	Leer segundo
		
		// Incrementar un segundo
	segundo = segundo + 1
		
		// Ajustar los segundos, minutos y horas si es necesario
	Si segundo = 60 Entonces
		segundo = 0
		minuto = minuto + 1
		Si minuto = 60 Entonces
			minuto = 0
			hora = hora + 1
			Si hora = 24 Entonces
				hora = 0
			FinSi
		FinSi
	FinSi
		
		// Mostrar la hora resultante
	Escribir "La hora en un segundo será: ", hora, ":", minuto, ":", segundo

FinProceso
