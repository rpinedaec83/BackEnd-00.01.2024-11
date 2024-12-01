//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor,
//se debe ingresar sólo veinte números.
Proceso sin_titulo
	dimension M[20]
	numMayor = 0
	//Número mayor
	Para i=1 Hasta 20 Hacer
		Escribir "Ingresa un número"
		Leer M[i]
		
		si numMayor < M[i] Entonces
			numMayor = M[i]	
		FinSi
	FinPara
	//Número menor
	numMenor = M[1]
	
	Para j=2 Hasta 20 Hacer
		si numMenor > M[j] Entonces
				numMenor = M[j]
		FinSi
	FinPara
		
	Escribir "El número mayor es : ",numMayor
	escribir "El número menor es : ",numMenor
	
FinProceso
