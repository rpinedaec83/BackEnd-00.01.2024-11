Proceso calcular_precio_ganancia
	Definir cantidad, precioTotal, ganancia, PORCENTAJE Como Real
	PORCENTAJE <- 8.25/100
	
	Repetir
		Escribir "Ingrese la cantidad de CDs a comprar:"
		Leer cantidad
		
		Si cantidad <= 9 Entonces
			precioTotal <- cantidad * 10
		SiNo
			Si cantidad <= 99 Entonces
				precioTotal <- cantidad * 8
			SiNo
				Si cantidad <= 499 Entonces
					precioTotal <- cantidad * 7
				SiNo
					precioTotal <- cantidad * 6
				FinSi
			FinSi
		FinSi
		
		ganancia <- precioTotal * PORCENTAJE
		
		Escribir "El precio total a pagar es: $", precioTotal
		Escribir "La ganancia del vendedor es: $", ganancia

		Escribir ""
        Escribir "¿Desea seguir comprando? (s/n)"
        Leer seguir
		Escribir ""
    Hasta Que seguir = "n"
FinProceso
