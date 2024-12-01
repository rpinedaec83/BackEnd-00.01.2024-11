Proceso Ejercicio37
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Mientras num2 <> 0 Hacer
        residuo = num1 MOD num2  
        num1 = num2           
        num2 = residuo       
    FinMientras
	
    Escribir "El MCD es: ", num1  
FinProceso
