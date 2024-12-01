//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ejercicio04
	Escribir "Digite primer numero"
	Leer N1
	Escribir "Digite segundo numero"
	Leer N2
	Escribir "Digite tercer numero"
	Leer N3
	
	si N1 < N2 y N1 < N3 Entonces
		si N2 < N3 Entonces
			Escribir "El orden de menor a mayor es: "
			Escribir N1
			Escribir N2
			Escribir N3
		SiNo
			Escribir "El orden de menor a mayor es: "
			Escribir N1
			Escribir N3
			Escribir N2
		FinSi
		
	FinSi
	si N2 < N1 Y N2 < N3 Entonces
		SI N1 < N3 Entonces
			Escribir "El orden de menor a mayor es: "
			Escribir N2
			Escribir N1
			Escribir N3
		SiNo
			Escribir "El orden de menor a mayor es: "
			Escribir N2
			Escribir N3
			Escribir N1
		FinSi
		
	FinSi
	si N3 < N1 Y N3 < N2 Entonces
		si N1 < N2 Entonces
			Escribir "El orden de menor a mayor es: "
			Escribir N3
			Escribir N1
			Escribir N2
		SiNo
			Escribir "El orden de menor a mayor es: "
			Escribir N3
			Escribir N2
			Escribir N1
		FinSi
		
	FinSi
	
FinProceso
