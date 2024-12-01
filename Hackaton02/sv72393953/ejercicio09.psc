Proceso Ejercicio09
	Escribir "Ingrese su sueldo"
	Leer sueldo
	Si sueldo>2000 Entonces
		aumento = sueldo*0.05
	SiNo
		aumento = sueldo*0.10
	Fin Si
	
	sueldofinal = sueldo + aumento;
	
	Escribir "Su sueldo base es ",sueldo;
	Escribir "Su aumento es ",aumento;
	Escribir "Su nuevo sueldo es ",sueldofinal
FinProceso
