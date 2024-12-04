//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15
	pulgada = 0.393701
	libra = 0.453592
	Escribir "Ingresar que operacion deseas realizar"
	Escribir "Opcion 1 = convertir centimtetros a pulgadas"
	Escribir "Opcion 2 = convertir libras a kilogramos"
	Escribir "Ingresar operacion"
	Leer operacion
	Escribir "Ingresar la cantidad a convertir"
	Leer dato
	
	segun  operacion hacer
		"1":
			conv = dato * pulgada
			Escribir "La conversion de " ,dato, " a centimetros a pulagadas es de ", conv, " pulgadas"
		"2":
			conv = dato * libra
			Escribir "La conversion de " ,dato, " a libras a kilogramos es de ", conv, " Kg"
		De Otro Modo:
			Escribir "Ingrese una operacion valida"
			
	FinSegun
	
FinProceso
