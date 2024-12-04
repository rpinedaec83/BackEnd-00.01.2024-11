Proceso zapateria
	precioZapato = 80
	cantidad = 0
	total = 0
	Escribir "Digite la cantidad de zapatos"
	Leer cantidad
	
	si cantidad > 10 y cantidad <= 20 Entonces
		total = 0.9 * cantidad * precioZapato
	FinSi
	
	si cantidad > 20 y cantidad < 30 Entonces
		total = 0.8 * cantidad * precioZapato
	FinSi
	
	si cantidad >= 30 Entonces
		total = 0.6 * cantidad * precioZapato
	FinSi
	
	Escribir total
FinProceso
