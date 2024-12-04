Proceso ContinuarPrograma
	x <- Verdadero
		
	Mientras x Hacer
		Escribir "El programa está ejecutándose."
		Escribir "¿Desea continuar? (S/N): "
		Leer respuesta
		Si respuesta = "N" O respuesta = "n" Entonces
			x <- Falso
		FinSi
	FinMientras
				
	Escribir "Programa finalizado."
FinProceso
