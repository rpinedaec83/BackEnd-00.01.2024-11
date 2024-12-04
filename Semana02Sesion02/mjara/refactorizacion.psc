Proceso CalculadoraV3
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Bienvenidos a mi calculadora"
		Escribir "Digita el primer numero"
		Leer primerNumero
		Escribir "Digita el segundo numero"
		Leer segundoNumero
		Escribir "Digita la operacion: 1 para Suma, 2 para Resta, 3 para Multiplicacion, 4 para Division o 0 para salir"
		Leer operacion
		Segun operacion Hacer
			"0":
				Escribir "Gracias por usar mi calculadora"
				bandera = Falso
				
			"1":
				resultado = primerNumero + segundoNumero
				simbolo="+"
			"2":
				resultado = primerNumero - segundoNumero
				simbolo="-"
			"3":
				resultado = primerNumero * segundoNumero
				simbolo="*"
			"4":
				resultado = primerNumero / segundoNumero
				simbolo="/"
			De Otro Modo:
				Escribir "Operacion no valida"
				
		FinSegun
		si bandera==Verdadero Entonces
			Escribir "El resultado de: ",primerNumero,simbolo,segundoNumero,"=",resultado
		FinSi
	FinMientras
	
FinProceso