Proceso Ejercicio22
	Escribir "Ingrese un numero"
	Leer num
	
	Si num<=0 Entonces
		Escribir "Ingrese un numero positivo"
	SiNo
		Para i=1 Hasta num Con Paso 1 Hacer
			sumaTotal = sumaTotal+i
		Fin Para
	Fin Si
	
	Escribir "La suma final es ",sumaTotal
FinProceso
