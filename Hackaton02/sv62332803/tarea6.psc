Proceso tarea6
	
	Definir horast Como Entero
    Definir saldos Como Real
	
    Escribir "Ingrese las horas trabajadas:"
    Leer horast
	
    Si horast <= 40 Entonces
        saldos <- horast * 20
    SiNo
        saldos <- (40 * 20) + ((horast - 40) * 25)
    Fin Si
	
    Escribir "El sueldo semanal es: $", saldos
	
FinProceso
