Proceso Ejercicio31
	Para i=1 Hasta 10 Con Paso 1 Hacer
		Escribir i,")Escribe numero"
		Leer num
		
		Si num % 2 <> 0 Entonces
			Escribir num," es impar"
			contadorImpares= contadorImpares+1
			sumaImpares=sumaImpares+num
		SiNo
			Escribir num,"  es par"
			contadorPares= contadorPares+1
			sumaPares=sumaPares+num
		Fin Si
	Fin Para
	
	mediaImpares= sumaImpares/contadorImpares
	mediaPares= sumaPares/contadorPares
	
	Escribir  "La cantidad de pares es ",contadorPares
	Escribir "La cantidad de impares es ",contadorImpares
	Escribir  "La suma de los numeros pares es ",sumaPares
	Escribir  "La suma de los numeros impares es ",sumaImpares
	Escribir  "La media de los numeros pares es ",mediaPares
	Escribir  "La media de los numeros impares es ",mediaImpares
FinProceso
