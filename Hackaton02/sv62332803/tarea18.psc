Proceso tarea18
	
	Definir cantidad, precio, totalVenta, ganancia Como Real
	
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad
	
    Si cantidad >= 1 Y cantidad <= 9 Entonces
        precio <- 10
    SiNo
        Si cantidad >= 10 Y cantidad <= 99 Entonces
            precio <- 8
        SiNo
            Si cantidad >= 100 Y cantidad <= 499 Entonces
                precio <- 7
            SiNo
                Si cantidad >= 500 Entonces
                    precio <- 6
                Fin Si
            Fin Si
        Fin Si
    Fin Si
	
    totalVenta <- cantidad * precio
    ganancia <- totalVenta * 0.0825
	
    Escribir "El precio total para el cliente es: $", totalVenta
    Escribir "La ganancia para el vendedor es: $", ganancia
FinProceso
