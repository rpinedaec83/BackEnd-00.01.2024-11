Proceso sin_titulo
	Definir monto,desc Como Real
	
	Escribir "Digite el monto de la compra"
	Leer monto
	Escribir "Introduzca (A,B,C) según el tipo de membresía que posea"
	Leer membresia
	
	Segun membresia Hacer
		"A":
			desc=monto*0.1
			mem="Tipo A"
		"B":
			desc=monto*0.15
			mem="Tipo B"
		"C":
			desc=monto*0.2
			mem="Tipo C"
		De Otro Modo:
			desc=0
			mem="Error"
	FinSegun
	
	
	monto=monto-desc
	Escribir "El cliente tiene una membresía ",mem
	Escribir "El cliente debe pagar ",monto
	
	
	
	
FinProceso
