Proceso menorMayor
		
	Escribir "Digite el primer número"
	Leer primerNumero
	Escribir "Digite el segundo número"
	Leer segundoNumero
	Escribir "Digite el tercer número"
	Leer tercerNumero
	
	Si primerNumero > segundoNumero Entonces
		si segundoNumero > tercerNumero Entonces
			Escribir tercerNumero, segundoNumero , primerNumero
		SiNo
			si primerNumero > tercerNumero Entonces
				Escribir segundoNumero, tercerNumero, primerNumero
			SiNo
				Escribir segundoNumero, primerNumero, tercerNumero
			FinSi
		FinSi		
	sino
		si primerNumero > tercerNumero Entonces
			Escribir tercerNumero, primerNumero, segundoNumero
		SiNo
			si segundoNumero > tercerNumero Entonces
				Escribir  primerNumero, tercerNumero, segundoNumero 
			SiNo
				Escribir primerNumero, segundoNumero, tercerNumero
			FinSi
		FinSi		
	FinSi
	
FinProceso
