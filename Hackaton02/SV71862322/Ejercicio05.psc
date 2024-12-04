Proceso TiendaZapatos
	precioZapato <- 80
    Escribir "Ingrese la cantidad de zapatos a comprar: "
    Leer cantidad
	
    totalCompra <- precioZapato * cantidad
    Si cantidad > 30 Entonces
        descuento <- 0.40
    Sino
        Si cantidad > 20 Entonces
            descuento <- 0.20
        Sino
            Si cantidad > 10 Entonces
                descuento <- 0.10
            Sino
                descuento <- 0
            FinSi
        FinSi
    FinSi
	
    totalDescuento <- totalCompra * descuento
    totalFinal <- totalCompra - totalDescuento
    Escribir "Total de la compra con descuento: $", totalFinal
FinProceso
