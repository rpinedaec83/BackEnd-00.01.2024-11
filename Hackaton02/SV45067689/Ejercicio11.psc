//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	Escribir "Digite primer numero"
	Leer N1
	Escribir "Digite segundo numero"
	Leer N2
	Escribir "Digite tercer numero"
	Leer N3
	
	Si N1 > N2 Y N1 > N3 Entonces
		Escribir "El numero mayor es ", N1
	SiNo
		SI N2 > N1 Y N2 > N3 Entonces
			Escribir "El numero mayor es ", N2
		SiNo
			SI N3 > N1 Y N3 > N2 Entonces
				Escribir "El numero mayor es ", N3
				
			FinSi
		Finsi
		Finsi
FinProceso
