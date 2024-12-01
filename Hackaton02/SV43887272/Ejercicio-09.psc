Proceso sueldoTrabajador
	
	aumento = 0
	Escribir "Digite el sueldo del trabajador"
	Leer sueldo
	
	si sueldo >= 2000 Entonces
		aumento = 0.05 * sueldo
	FinSi
	si sueldo < 2000 Entonces
		aumento = 0.1 * sueldo
	FinSi
	Escribir " Le corresponde un aumento de : ", aumento
FinProceso
