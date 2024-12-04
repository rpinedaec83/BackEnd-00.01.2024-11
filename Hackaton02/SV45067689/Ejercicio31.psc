//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso Ejercicio31

	Contadoepares = 0
	sumadorPares = 0
	Contadorimpares = 0
	sumadorImpares = 0
	Para i = 1 Hasta 10 Hacer
		Escribir "Ingrese numero ", i,":"
		Leer numi
        Si i % 2 == 0 Entonces
			Contadoepares =Contadoepares +1
			sumadorPares = sumadorPares + numi
		SiNo
			Contadorimpares =Contadorimpares +1
			sumadorImpares= sumadorImpares+ numi
		FinSi
    FinPara
	Mediapar = sumadorPares / Contadoepares
	Mediaimpar = sumadorImpares / Contadorimpares
	Escribir "La media de los pares ingresados es: ", Mediapar
	Escribir "La media de los impares ingresados es: ", Mediaimpar
FinProceso
