Proceso Ejercicio04
	definir aux como entero;
	
	Escribir "Digita primer numero"
	Leer num1
	Escribir "Digita segundo numero"
	Leer num2
	Escribir "Digita tercer numero"
	Leer num3
	
	Si num1 > num2 Entonces
        aux = num1
        num1 = num2
        num2 = aux
    FinSi
	
    Si num2 > num3 Entonces
        aux = num2
        num2 = num3
        num3 = aux
    FinSi
	
    Si num1 > num2 Entonces
        aux = num1
        num1 = num2
        num2 = aux
    FinSi
	
    Escribir "Los números ordenados de menor a mayor son: "
	Escribir num1,",",num2,",",num3
FinProceso
