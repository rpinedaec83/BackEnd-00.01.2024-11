Proceso Ejercicio38
	Escribir "Ingresa numero"
	Leer num
	
	Para i=1 Hasta num-1 Con Paso 1 Hacer
		Si num mod i = 0 Entonces
			suma=suma+i
		Fin Si
	Fin Para
	
	Si num=suma Entonces
		Escribir  num, " es un número perfecto."
	SiNo
		Escribir  num, " no es un número perfecto."
	Fin Si
FinProceso
