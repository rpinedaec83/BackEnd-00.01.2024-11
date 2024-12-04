//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribuciónde CD vírgenes.
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca)
//por cantidad. Los precios son:

//$10. Si se compran unidades separadas hasta 9.	
//$8. Si se compran entre 10 unidades hasta 99.		
//$7. Entre 100 y 499 unidades.		
//$6. Para mas de 500 unidades.
			
//La ganancia para el vendedor es de 8,25 % de la venta.
//Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total
//para el cliente y la ganancia para el vendedor.

Proceso ventaCD
	gananciaVendedor = 0
	precioTotal = 0
	Escribir "Cantidad de CD"
	Leer cant
	
	si cant <= 9 Entonces
		precioTotal = 10 * cant	
	sino
		si cant > 9 y cant <= 99 Entonces
			precioTotal = 8 * cant
		sino
			si cant > 99 y cant <= 499 Entonces
				precioTotal = 7 * cant
			sino
				si cant > 499 Entonces
					precioTotal = 6 * cant
				FinSi
			FinSi
		FinSi
	FinSi
	
	gananciaVendedor = 0.0825 * precioTotal
	
	Escribir "Precio total = ",precioTotal
	Escribir "Ganancia Vendedor = ",gananciaVendedor
	
FinProceso
