Proceso tarea25
	
    Definir nume, factorial, x Como Entero

    Escribir "Digite un número para calcular su factorial:"
    Leer nume
    factorial <- 1
	x <- 1
    Mientras x <= nume Hacer
        factorial <- factorial * x  
        x <- x + 1  
    Fin Mientras
	
    Escribir "El factorial de ", nume, " es: ", factorial
FinProceso
