Proceso numeroMenor
	Escribir "Digite el primer número"
	Leer primerNumero
	Escribir "Digite el segundo número"
	Leer segundoNumero
	Escribir "Digite el tercer número"
	Leer tercerNumero
	
	Si primerNumero > segundoNumero Entonces
		si segundoNumero > tercerNumero Entonces
			Escribir "El número menor es :", tercerNumero
		SiNo
			Escribir "El número menor es :", segundoNumero
			
		FinSi		
	sino
		si primerNumero > tercerNumero Entonces
			Escribir "El número menor es :", tercerNumero
		SiNo
			Escribir "El número menor es :", primerNumero
		FinSi		
	FinSi
FinProceso
