Proceso SueldoTrabajador
	Escribir "Ingrese el n�mero de horas trabajadas: "
    Leer horasTrabajadas
	
    Si horasTrabajadas <= 40 Entonces
        sueldo <- horasTrabajadas * 20
    Sino
        horasExtras <- horasTrabajadas - 40
        sueldo <- (40 * 20) + (horasExtras * 25)
    FinSi
	
    Escribir "El sueldo semanal es: $", sueldo
FinProceso
