Proceso tarea34
	
	Definir nume Como Cadena
    nume <- "si"
	
    Mientras nume = "si" Hacer
        Escribir "Este es el programa en ejecución."
        
        Para x <- 1 Hasta 9 Hacer
            Escribir "Tabla de multiplicar del ", x
            Para P <- 1 Hasta 10 Hacer
                Escribir x, " x ", P, " = ", x * P
            Fin Para
            Escribir "Sigue aprendindo, tu puedes!!"
        Fin Para
        
        Escribir "¿Desea continuar? (si/no):"
        Leer nume
    Fin Mientras
	
    Escribir "¡Gracias por usar el programa!"
	
FinProceso
