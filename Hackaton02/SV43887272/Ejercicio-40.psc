Proceso serieMilakanta
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi 
   //con la serie de Nilakantha. La formula que se debe aplicar es:	
	//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	
	sum = 0
	serie = 0
	Escribir "Cantidad de terminos a sumar"
	Leer n
	
	para i=0 Hasta n Hacer
		sum = sum + 4 * ((-1)^i)/((2*i+2)*(2*i+3)*(2*i+4))
	FinPara
	serie = 3 + sum
	Escribir serie
FinProceso
