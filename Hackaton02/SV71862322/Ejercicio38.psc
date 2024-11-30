Proceso NumeroPerfecto
	Escribir "Ingrese un número: "
    Leer numero
    sumaDivisores <- 0
    Para i <- 1 Hasta numero - 1 Hacer
        Si numero % i = 0 Entonces
            sumaDivisores <- sumaDivisores + i
        FinSi
    FinPara
    Si sumaDivisores = numero Entonces
        Escribir numero, " es un número perfecto."
    Sino
        Escribir numero, " no es un número perfecto."
    FinSi
FinProceso
