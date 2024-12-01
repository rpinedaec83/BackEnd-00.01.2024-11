Proceso Ejercicio25
	Escribir "Ingrese numero para calcular su factorial"
	Leer num
	
	Si num<=0 Entonces
		Escribir "El numero debe ser positivo"
	SiNo
		factorial=1;
		i=1;
		Mientras i<=num Hacer
			factorial=factorial*i
			i=i+1
		Fin Mientras
	Fin Si
	
	Escribir "El factorial es ",factorial
FinProceso
