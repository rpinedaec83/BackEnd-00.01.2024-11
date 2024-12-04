
Proceso Ejercicio35

	Escribir "Ingrese numero 1:"
	Leer num
	mayor = num
	menor = num
	
	Para i = 2 Hasta 20 Hacer
		Escribir "Ingrese numero ", i,":"
		Leer numi
        Si numi > mayor Entonces
			mayor = numi
		SiNo
			Si numi < menor Entonces
				menor = numi
			FinSi
		FinSi
    FinPara
	
	Escribir "El numero mayor es: ", mayor
	Escribir "El numero menor es:", menor

FinProceso
