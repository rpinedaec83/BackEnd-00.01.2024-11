Proceso tarea35
	
	Definir nume, nmayor, nmenor, x Como Entero
    nmayor <- -99999999
    nmenor <- 99999999
	
    Para x <- 1 Hasta 20 Hacer
        Escribir "Ingresa el número ", x, ":"
        Leer nume
		
        Si nume > nmayor Entonces
            nmayor <- nume
        Fin Si
		
        Si nume < nmenor Entonces
            nmenor <- nume
        Fin Si
    Fin Para
	
    Escribir "El número mayor es: ", nmayor
    Escribir "El número menor es: ", nmenor
	
	
	
	
	
	
	
	
	
FinProceso
