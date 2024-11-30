Proceso CalcularFactorial
	Escribir "Ingrese un número entero: "
    Leer n
	
    Si n < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        factorial <- 1
        Para i <- 1 Hasta n Hacer
            factorial <- factorial * i
        FinPara
        Escribir "El factorial de ", n, " es: ", factorial
    FinSi
FinProceso
