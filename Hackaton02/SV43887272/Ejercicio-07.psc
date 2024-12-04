Proceso Heladeria
	consumo = 0
	Escribir "Digite el tipo de membresía A, B o C"
	Leer membresia
	Escribir "Digite la cantidad de helados"
	Leer cantidad
	// Asumiendo que el precio de un helado es 5 soles
	precio = 5
	consumo = precio * cantidad
	
	Segun membresia Hacer
		"A":
			total = consumo - 0.1 * consumo
		"B":
			total = consumo - 0.15 * consumo
		"C":
			total = consumo - 0.2 * consumo
		De Otro Modo:
			Escribir "Operacion no valida"
			
	FinSegun
	Escribir "Su consumo es de : ",total
FinProceso
