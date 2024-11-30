// ------------------------------------------------------------------------------------------------------------------------------------------------
//	18.	Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
// 	   	Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

// 			$10. Si se compran unidades separadas hasta 9.
// 			$8. Si se compran entre 10 unidades hasta 99.
// 			$7. Entre 100 y 499 unidades.
// 			$6. Para mas de 500 unidades.

//     	La ganancia para el vendedor es de 8,25 % de la venta. 
//		Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
// ------------------------------------------------------------------------------------------------------------------------------------------------

Algoritmo CalcularPrecioYGanancia
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

		// Preguntar si el cliente desea seguir comprando
		Escribir ""
        Escribir "¿Desea seguir comprando? (s/n)"
        Leer seguir
		Escribir ""
    Hasta Que seguir = "n"
FinAlgoritmo
