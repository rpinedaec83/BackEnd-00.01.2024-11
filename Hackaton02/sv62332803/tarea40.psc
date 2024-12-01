Proceso tarea40
	
	Definir nume, x, signo Como Entero
    Definir p1 Como Real
	
    Escribir "Ingrese el número de iteraciones para la aproximación de Pi:"
    Leer nume
	
    p1 <- 3
    signo <- 1  
	
    Para x <- 1 Hasta nume Hacer
        p1 <- p1 + signo * (4 / ((2 * x) * (2 * x + 1) * (2 * x + 2)))
        Si signo = 1 Entonces
            signo <- -1  
        Sino
            signo <- 1  
        FinSi
    FinPara
	
    Escribir "La aproximación de Pi es: ", p1
FinProceso
