Proceso menormayor
	Definir num1,num2,num3 Como Entero
	Escribir "Introduzca el primer número"
	Leer num1
	Escribir "Introduzca el segundo número"
	Leer num2
	Escribir "Introduzca el tercer número"
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
	
	
	
	Escribir "Los números ordenados de menor a mayor son ",num1," ",num2," ",num3
	
	
	
	
	
	
	
	
FinProceso
