Proceso Ejercicio27
	
	Mientras num>-1 Hacer
		Escribir "Ingresa numero"
		Leer num
		contador=contador+1
		Si num>-1 Entonces
			suma=suma+num
		Fin Si
		
	Fin Mientras
	
	media= suma/(contador-1)
	Escribir "La cantidad de numeros ingresados es ",contador-1
	Escribir "La suma total es ",suma
	Escribir "La media es ",media
FinProceso
