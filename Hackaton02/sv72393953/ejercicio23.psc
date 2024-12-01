Proceso Ejercicio23
	Escribir  "Ingrese el valor de N"
	Leer N
	
	Si N <=0 Entonces
		Escribir  "Ingrese un valor positivo"
	SiNo
		Para i=1 Hasta N Con Paso 1 Hacer
			Si i  % 2 <> 0 Entonces
				sumaImpares=sumaImpares+i
			Fin Si
		Fin Para
	Fin Si
	
	Escribir  "La suma de impares es ",sumaImpares
FinProceso
