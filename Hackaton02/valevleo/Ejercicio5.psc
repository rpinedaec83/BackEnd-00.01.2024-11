Algoritmo zapatos
	
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer zapato
	
	precio = 80
	
    Si zapato > 30 Entonces
        total = zapato * precio * 0.6
		Escribir "Tiene descuento de 40%"
		Escribir "El total a pagar: ", total
		
    SiNo
		Si zapato > 20 Entonces
			total = zapato * precio *0.8
			Escribir "Tiene descuento de 20%"
			Escribir "El total a pagar: ", total
		Sino 
			Si zapato > 10 Entonces
				total = zapato * precio*0.90
				Escribir "Tiene descuento de 10%"
				Escribir "El total a pagar: ", total
			SiNo
				total = zapato * precio
				Escribir "No tiene descuento"
				Escribir "El total a pagar: ", total
			FinSi
		
		FinSi
	FinSi
  
FinAlgoritmo
