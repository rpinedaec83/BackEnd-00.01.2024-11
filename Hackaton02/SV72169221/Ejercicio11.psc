Proceso sin_titulo
	Definir may Como Entero
	
	Escribir "Introduzca el primer valor"
	Leer num1
	Escribir "Introduzca el segundo valor"
	Leer num2
	Escribir "Introduzca el tercer valor"
	Leer num3
	
	Si num1>num2 Entonces
		x=num2
		num2=num1
		num1=x
	FinSi
	
	Si num1>num3 Entonces
		x=num3
		num3=num1
		num1=x
	FinSi
	
	Si num2>num3 Entonces
		x=num3
		num3=num2
		num2=x
	FinSi
	
	Escribir "El mayor de los tres numeros introducidos es el numero ",num3
	
	
	
	
FinProceso

