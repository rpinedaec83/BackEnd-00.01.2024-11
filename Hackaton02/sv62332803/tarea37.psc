Proceso tarea37
	
	Definir a, b Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
	
    Mientras b <> 0 Hacer
        temp <- b
        b <- a MOD b
        a <- temp
    FinMientras
	
    Escribir "El M.C.D. es: ", a
FinProceso
