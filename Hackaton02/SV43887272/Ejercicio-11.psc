Proceso numeroMayor
	Escribir "Digite el primer número"
	Leer primerNumero
	Escribir "Digite el segundo número"
	Leer segundoNumero
	Escribir "Digite el tercer número"
	Leer tercerNumero
	
	Si primerNumero > segundoNumero Entonces
		si segundoNumero > tercerNumero Entonces
			Escribir "El número mayor es :", primerNumero
		SiNo
			si primerNumero > tercerNumero Entonces
				Escribir "El número mayor es :", primerNumero
			SiNo
				Escribir "El número mayor es :", tercerNumero
			FinSi
		FinSi		
	sino
		si primerNumero > tercerNumero Entonces
			Escribir "El número mayor es :", segundoNumero
		SiNo
			si segundoNumero > tercerNumero Entonces
				Escribir  "El número mayor es :",  segundoNumero 
			SiNo
				Escribir "El número mayor es :", tercerNumero
			FinSi
		FinSi		
	FinSi
	
FinProceso
