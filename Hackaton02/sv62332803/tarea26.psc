Proceso tarea26
	
    Definir nume1, nume2, cociente, resto Como Entero
    Escribir " Digite el dividendo "
    Leer nume1
    Escribir " Digite el divisor "
    Leer nume2
	
    cociente <- 0
    resto <- nume1
	
    Mientras resto >= nume2 Hacer
        resto <- resto - nume2
        cociente <- cociente + 1
    Fin Mientras
	
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
FinProceso
