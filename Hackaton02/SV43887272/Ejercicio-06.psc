Proceso trabajador
	horas = 0
	sueldoSemanal = 0
	
	Escribir "Digite la cantidad de horas trabajadas"
	Leer horas
	
	si horas <= 40 Entonces
		sueldoSemanal = 20 * horas
	SiNo
		sueldoSemanal = 25 * horas
	FinSi
	Escribir sueldoSemanal
FinProceso
