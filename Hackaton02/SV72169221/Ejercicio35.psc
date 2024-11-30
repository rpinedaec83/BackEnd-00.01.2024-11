Proceso sin_titulo
	
	Escribir "Ingresar el número 1"
	Leer num1
	
	may=num1
	men=num1
	
	Para i<-2 Hasta 20 Con Paso +1 Hacer
		Escribir "Ingresar el número ",i
		Leer numer
		
		Si (numer>may) Entonces
			may=numer
		FinSi
		
		Si(numer<men) Entonces
			men=numer
		FinSi
		
		
	Fin Para
	Escribir "El mayor número introducido es el número ",may
	Escribir "El menor número introducido es el número ",men
	
	
	
	
FinProceso
