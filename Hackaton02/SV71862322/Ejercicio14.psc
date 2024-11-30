Proceso NumeroPrimo
	Escribir "Ingrese un número entero positivo (1-9): "
    Leer num
    
    Si num < 1 O num > 9 Entonces
        Escribir "El número está fuera del rango permitido."
    Sino
        esPrimo <- Verdadero
        i <- 2
        Mientras i < num Y esPrimo Hacer
            Si num % i == 0 Entonces
                esPrimo <- Falso
            FinSi
            i <- i + 1
        FinMientras
		
        Si esPrimo Entonces
            Escribir "El número es primo."
        Sino
            Escribir "El número no es primo."
        FinSi
    FinSi
FinProceso
