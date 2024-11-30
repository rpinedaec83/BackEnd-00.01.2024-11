Proceso MCD
	Escribir "Ingrese el primer número: "
    Leer a
    Escribir "Ingrese el segundo número: "
    Leer b
    Mientras b <> 0 Hacer
        resto <- a % b
        a <- b
        b <- resto
    FinMientras
    Escribir "El MCD es: ", a
FinProceso
