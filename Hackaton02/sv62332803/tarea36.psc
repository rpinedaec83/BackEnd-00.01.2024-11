Proceso tarae36
	
	Definir nume, i, a, b, siguiente Como Entero
	
    Escribir "Ingrese la cantidad de términos de la serie Fibonacci:"
    Leer nume
	
    a <- 0
    b <- 1
	
    Escribir "La serie de Fibonacci es:"
	
    Para i <- 1 Hasta nume Hacer
        Escribir a
        siguiente <- a + b
        a <- b
        b <- siguiente
    FinPara
FinProceso
