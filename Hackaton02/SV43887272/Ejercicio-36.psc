//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso Fibonacci
	
	Escribir "Digite la cantidad de terminos de la serie"
	Leer n
	
	Dimension  f[n+2]
	f[1] = 0
	f[2] = 1
	
	Para i = 1 Hasta (n) Hacer
		f[i+2] = f[i+1] + f[i]
		Escribir "T",i,"=",f[i]
	FinPara
	
FinProceso
