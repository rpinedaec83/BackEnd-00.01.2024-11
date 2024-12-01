Proceso Ejercicio07
	Escribir "Digite su tipo de membresia"
	Leer tipoMembresia
	
	Escribir "Digite precio"
	Leer precio
	
	Segun tipoMembresia Hacer
		'A':
			descuento= precio*0.10;
		'B':
			descuento= precio*0.15;
		'C':
			descuento= precio*0.20;
		De Otro Modo:
			Escribir "Membresia no disponible"
	Fin Segun
	
	preciofinal = precio-descuento
	Escribir "El precio final es ",preciofinal
FinProceso
