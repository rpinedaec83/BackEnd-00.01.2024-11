Proceso Ejercicio26
	Escribir "Ingrese dividendo"
	Leer dividendo
	
	Escribir "Ingrese divisor"
	Leer divisor
	
	Mientras divisor>dividendo Hacer
		Escribir "Ingrese el divisor"
		Leer divisor
	Fin Mientras
	
	
	Mientras dividendo>=divisor Hacer
		dividendo=dividendo-divisor
		cociente=cociente+1
	Fin Mientras
	
	
	
	Escribir "Cociente ",cociente
	Escribir "Divisor ",divisor
FinProceso
