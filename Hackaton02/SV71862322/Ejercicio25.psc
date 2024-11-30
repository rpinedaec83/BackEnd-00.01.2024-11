Proceso FactorialConMientras
	Escribir "Ingrese un número entero: "
    Leer n
	
    Si n < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        factorial <- 1
        contador <- 1
        Mientras contador <= n Hacer
            factorial <- factorial * contador
            contador <- contador + 1
        FinMientras
        Escribir "El factorial de ", n, " es: ", factorial
    FinSi
FinProceso
