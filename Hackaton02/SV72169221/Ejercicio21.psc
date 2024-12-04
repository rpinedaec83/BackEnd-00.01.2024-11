Proceso sin_titulo
	Escribir "Introduzca un número positivo mayor a 1"
	Leer num
	
	Mientras num<1 Hacer
		Escribir "Introduzca un número positivo mayor a 1"
		Leer num
	Fin Mientras
	
	
	fac=1
	Para i<-num Hasta 1 Con Paso -1 Hacer
		fac=i*fac
	Fin Para
	
	Escribir "El factorial del número ",num," es ", fac
	
	
	
FinProceso
