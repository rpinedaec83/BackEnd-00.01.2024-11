Proceso CalculadoraV2
	Escribir "Digita el primer numero"
	Leer primerNumero
	Escribir "Digita la operacion: 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir"
	Leer operacion 
	Escribir "Digita el segundo numero"
	Leer segundoNumero
	resultado = 0
	Segun operacion Hacer
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
FinProceso
