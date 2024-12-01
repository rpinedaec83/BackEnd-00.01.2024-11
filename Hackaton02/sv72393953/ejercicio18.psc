Proceso Ejercicio18
	Escribir "Ingrese la cantidad de cds que desea comprar"
	Leer cantidad
	
	Si cantidad>500 Entonces
		precioTotal = cantidad*6
	SiNo
		Si cantidad>100 y cantidad < 500 Entonces
			precioTotal=cantidad*7
		SiNo
			Si cantidad >10 y cantidad <100 Entonces
				precioTotal=cantidad*8
			SiNo
				precioTotal=cantidad*10
			Fin Si
		Fin Si
	Fin Si
	
	gananciaVendedor=precioTotal* 0.0825
	gananciaCliente= precioTotal - gananciaVendedor
	
	Escribir "La ganacia del vendedor es ",gananciaVendedor
	Escribir "La ganancia del cliente es ",gananciaCliente
	Escribir "La ganacia Total es : ",precioTotal
FinProceso
