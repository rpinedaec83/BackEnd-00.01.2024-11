Proceso SumaImparesMenoresIguales
	Escribir "Ingrese un número entero positivo: "
    Leer n
	
    suma <- 0
    Para i <- 1 Hasta n Con Paso 2 Hacer
        suma <- suma + i
    FinPara
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinProceso
