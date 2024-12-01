Proceso tarea8 
	
	Definir nume1, nume2, nume3, prom Como Real
	
    Escribir "Ingrese la primera nota:"
    Leer nume1
    Escribir "Ingrese la segunda nota:"
    Leer nume2
    Escribir "Ingrese la tercera nota:"
    Leer nume3
	
    prom <- (nume1 + nume2 + nume3) / 3
	
    Escribir "El promedio es:", prom
	
    Si prom >= 13 Entonces
        Escribir "El estudiante aprobó."
    SiNo
        Escribir "El estudiante no aprobó."
    Fin Si	
	
FinProceso
