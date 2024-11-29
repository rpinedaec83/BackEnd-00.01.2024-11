Proceso Calculadora
	
	Escribir "Digita el primer numero"
	Leer primerNumero
	Escribir "Digita la operacion: 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir"
	Leer operacion 
	Escribir "Digita el segundo numero"
	Leer segundoNumero
	
	resultado = 0
	si operacion==1 Entonces
		resultado = primerNumero + segundoNumero
	SiNo
		si operacion == 2 Entonces
			resultado = primerNumero - segundoNumero
		SiNo
			si operacion == 3 Entonces
				resultado = primerNumero * segundoNumero
			SiNo
				si operacion == 4 Entonces
					resultado = primerNumero / segundoNumero
				SiNo
					Escribir "Operacion no valida"
				FinSi
			FinSi
		FinSi
		
	FinSi
	
	
	
	Escribir "El resultado es: ", resultado
FinProceso
