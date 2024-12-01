Proceso tarea5
	
	Definir cantidad_zapatos Como Entero
	Definir precio_unitario, total_compra, descuento, total_pagar Como Real
	
	precio_unitario = 80
	Escribir  " Ingresar la cantidad de zapatos que desea comprar" 
	Leer cantidad_zapatos
	total_compra = cantidad_zapatos * precio_unitario
	si cantidad_zapatos > 30 Entonces
		descuento = 0.4 
	SiNo
		si cantidad_zapatos > 20 Entonces
			descuento = 0.2
		SiNo
			si cantidad_zapatos > 10 Entonces
				descuento = 0.1
			SiNo
				descuento = 0 
			FinSi
		FinSi
	FinSi
	total_pagar = total_compra - (total_compra * descuento)

	Escribir "Total de la compra sin descuento: $ ", total_compra
	Escribir "descuento aplicado :$", (total_compra * descuento)
	Escribir "total a pagar: $", total_pagar
	
	
	
	
	
	
	
	
	
	
FinProceso
