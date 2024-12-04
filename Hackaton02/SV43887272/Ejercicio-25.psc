//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Funcion  retorno  <- CalcularFactorial(n)
	Si n = 0 Entonces
		retorno <- 1;
	SiNo
		retorno <- n * CalcularFactorial(n - 1);
	FinSi
FinFuncion

Proceso factorial		
	Escribir "Ingrese un número para calcular su factorial:"
	Leer num
	
	resultado = CalcularFactorial(num)
	
	Escribir "El factorial de ", num, " es ", resultado
FinProceso