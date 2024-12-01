Proceso tarea7
	
	Definir tipom Como Entero
    Definir precioc, totalp, descuento Como Real
	
    Escribir "Ingrese el precio total de la compra:"
    Leer precioc
    Escribir "Ingrese el tipo de membresía :"
    Leer tipom
	
    descuento <- 0
	
    Si tipom = 1 Entonces
        descuento <- precioc * 0.10
    SiNo
        Si tipom = 2 Entonces
            descuento <- precioc * 0.15
        SiNo
            Si tipom = 3 Entonces
                descuento <- precioc * 0.20
            Fin Si
        Fin Si
    Fin Si
	
    totalp <- precioc - descuento
	
    Escribir "El descuento aplicado es: $", descuento
	Escribir "El total a pagar es: $", totalp
	
FinProceso
