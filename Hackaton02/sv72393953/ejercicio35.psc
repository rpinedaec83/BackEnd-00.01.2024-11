Proceso Ejercicio35
	
	mayornumero=-999999
	menornumero=999999
	
	Para i=1 Hasta 20 Con Paso 1 Hacer
		Escribir i,") Ingresa numero"
		Leer num
		
		Si  mayornumero<num Entonces
			mayornumero=num
		Fin Si
		
		Si  menornumero>num Entonces
			menornumero=num
		Fin Si
	Fin Para
	
	Escribir "El numero menor es ",menornumero
	Escribir "El numero mayor es ",mayornumero
FinProceso
