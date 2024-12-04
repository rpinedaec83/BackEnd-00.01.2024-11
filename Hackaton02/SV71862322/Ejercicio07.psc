Proceso DescuentoHelados
	Escribir "Ingrese el tipo de membresía (A, B, C): "
    Leer tipo
	
    Escribir "Ingrese el monto de la compra: "
    Leer monto
	
    Si tipo = "A" Entonces
        descuento <- 0.10
    Sino
        Si tipo = "B" Entonces
            descuento <- 0.15
        Sino
            Si tipo = "C" Entonces
                descuento <- 0.20
            Sino
                descuento <- 0
            FinSi
        FinSi
    FinSi
	
    montoDescuento <- monto * descuento
    totalFinal <- monto - montoDescuento
    Escribir "El total a pagar con descuento es: $", totalFinal
FinProceso
