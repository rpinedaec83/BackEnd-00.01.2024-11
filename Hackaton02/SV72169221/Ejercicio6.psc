Proceso sin_titulo
	
	Escribir "Introduzca las horas trabajadas en el mes"
	Leer horast
	
	Mientras horast<0 Hacer
		Escribir "Introduzca las horas trabajadas en el mes"
		Leer horast
	Fin Mientras
	
	
	Si horast<=40 Entonces
		pago=horast*20
	SiNo
		hextras=horast-40
		pago=800+(hextras*25)
	FinSi
	
	Escribir "El sueldo que le corresponde es de ",pago
	
	
	
FinProceso
