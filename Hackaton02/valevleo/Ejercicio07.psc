//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//		Los descuentos son los siguientes:
//			Tipo A 10% de descuento
//			Tipo B 15% de descuento
//			Tipo C 20% de descuento

Proceso Ejercicio07
	
	Escribir "Ingresar monto consumido"
	Leer monto
	Escribir "Ingresar tipo de menbresia"
	Escribir "A, B, o C" 
	Leer menbresia
	
	Segun  menbresia Hacer
		"A":
			descuento = monto * 0.1
			
		"B":
			descuento = monto * 0.15
		"C":
			descuento = monto * 0.2
		De Otro Modo:
			 Escribir "Dedes elegir una Menbresia válida"
			
	FinSegun
	Total = monto - descuento
	Escribir "Tu descuento es s/. " descuento
	Escribir "Tu total a pagar es s/. " Total
	
FinProceso
