//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	Definir i, x Como Entero
	Definir fact Como Real
	
	Escribir "Ingresar numero para calculo de factorial"
	Leer i
	si i < 0 Entonces
		Escribir "Numero ingresado no se puede operar"
	SiNo
		fact = 1
		para x = 1 hasta i Con Paso 1 Hacer
			fact = fact * x
			
		FinPara
		Escribir "El resultado del factorial de ", i , " es ", fact 
	FinSi
	
FinProceso
