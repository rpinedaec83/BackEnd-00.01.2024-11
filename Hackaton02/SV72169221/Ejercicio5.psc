Proceso sin_titulo
	Definir desc,precio Como Real
	Escribir "Bienvenido a nuestra tienda"
	Escribir "Cada zapato cuesta 80 dolares"
	Escribir "¿Cuántos zapatos desea comprar"
	Leer cant
	
	precio=cant*80
	
	
	desc=0
	Si cant>10 Entonces
		desc=precio*0.1
	FinSi
	
	Si cant>20 Entonces
		desc=precio*0.2
	FinSi
	
	Si cant>30 Entonces
		desc=precio*0.4
	FinSi
	
	precio=precio-desc
	
	Escribir "El cliente debe pagar un total de ",precio," dolares por su compra"
	
FinProceso
