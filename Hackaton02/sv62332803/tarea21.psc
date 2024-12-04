Proceso tarea21
  Definir primerNumero, factorial , contador Como Entero
  Escribir " Digite un numero entero positivo "
  Leer primerNumero
  
  si primerNumero < 0 Entonces
	  Escribir " El numero debe ser positivo o cero "
  SiNo
	  factorial <- 1
	  contador <- 1
	  Mientras  contador <= primerNumero Hacer
		  factorial<- factorial * contador
		  contador <- contador + 1
	  FinMientras
  FinSi
  
	Escribir " El factorial de " , primerNumero " es: ", factorial
	
	
	
	
	
	
	
FinProceso
