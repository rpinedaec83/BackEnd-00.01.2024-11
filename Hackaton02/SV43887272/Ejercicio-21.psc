//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso factorial
	Escribir "ingrese un número"
	Leer num
	fact = 1
	
	si num = 0 Entonces
		fact = 1
	SiNo
		Para i=1 Hasta num Hacer
			fact = fact * i
		FinPara
	FinSi
	
	Escribir fact
FinProceso
