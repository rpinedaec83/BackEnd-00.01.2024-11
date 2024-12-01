Proceso Ejercicio05
	definir precionormal,precioFinal  Como Entero
	
	precio=80;
	Escribir "Ingrese la cantidad de zapato que desea comprar"
	Leer cantidad
	
	precionormal = cantidad*80;
	
	Si cantidad>30 Entonces
		descuento = precionormal *0.40;
		precioFinal = precionormal - descuento;
	SiNo
		Si cantidad>20 y cantidad<30 Entonces
			descuento = precionormal *0.20;
			precioFinal = precionormal - descuento;
		SiNo
			Si  cantidad>10 Entonces
				descuento = precionormal *0.10;
				precioFinal = precionormal - descuento;
			FinSi
		FinSi
	Fin Si
	
	Escribir "La cantidad se zapatos que se compro es : ",cantidad;
	Escribir "El precio normal es : ",precionormal;
	Escribir "El descuento es : ",descuento;
	Escribir "El precio final es : ",precioFinal;
	
	
	
FinProceso
