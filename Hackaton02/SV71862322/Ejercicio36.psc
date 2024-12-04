Proceso Fibonacci
	Escribir "Ingrese el número de términos de la serie Fibonacci: "
    Leer n
    a <- 0
    b <- 1
    Escribir "Serie Fibonacci: "
    Para i <- 1 Hasta n Hacer
        Escribir a
        temp <- a + b
        a <- b
        b <- temp
    FinPara
FinProceso
