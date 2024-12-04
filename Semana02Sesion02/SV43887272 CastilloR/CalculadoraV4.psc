Proceso CalculadoraV4
	
	Escribir "Bienvenidos a mi calculadora"
	Escribir "******************************************"
	Escribir "¿Qué operación desea realizar"
	Escribir "Digita la operacion: 1 para Suma, 2 para Resta, 3 para Multiplicacion, 4 para Division o 0 para salir"
	Leer operacion
	
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Digita el primer numero"
		Leer primerNumero
		Escribir "Digita el segundo numero"
		Leer segundoNumero
		
		Segun operacion Hacer
			"0":
				Escribir "Gracias por usar mi calculadora"
				bandera = Falso
			"1":
				resultado = primerNumero + segundoNumero
			"2":
				resultado = primerNumero - segundoNumero
			"3":
				resultado = primerNumero * segundoNumero
			"4":
				resultado = primerNumero / segundoNumero
			De Otro Modo:
				Escribir "Operacion no valida"
				
		FinSegun		
		Escribir "El resultado es: ", resultado
		
		Escribir "Desea realizar otra operación"
		si flag Entonces
			
		FinSi
	FinMientras
	
FinProceso
