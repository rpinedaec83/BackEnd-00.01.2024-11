Proceso Ejercicio21
	Escribir "Ingrese numero para calcular su factorial"
	Leer num
	
	Si num<=0 Entonces
		Escribir "El numero debe ser positivo"
	SiNo
		factorial=1;
		Para i=1 Hasta num Con Paso 1 Hacer
			factorial=factorial*i
		Fin Para
	Fin Si
	
	Escribir "El factorial es ",factorial
FinProceso
