Proceso sin_titulo
	Escribir "Ingrese el dividendo"
	Leer dividendo
	
	
	Escribir "Ingrese el divisor (debe ser menor que el dividendo)"
	Leer divisor
	
	Mientras divisor>dividendo Hacer
		Escribir "Ingrese el divisor (debe ser menor que el dividendo)"
		Leer divisor
	Fin Mientras
	
	cociente=0
	resto=0
	n=dividendo
	Mientras n>=divisor Hacer
		n=n-divisor
		cociente=cociente+1
	Fin Mientras
	resto=n
	
	Escribir "Al dividir ",dividendo," entre ",divisor
	Escribir "El cociente es ",cociente," y el resto es ",resto
	
FinProceso
