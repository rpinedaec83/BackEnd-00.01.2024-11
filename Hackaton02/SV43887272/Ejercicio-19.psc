//Hacer un algoritmo en Pseint para una heladería 
//se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador 
//y salario diario correspondiente:

//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros 
//que representen al número identificador del empleado y la cantidad de días que trabajó en la semana
//(6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Heladeria
	
	Escribir "Elija id del empleado: 1 cajero, 2 servidor, 3 preparador de mezclas y 4 mantenimiento"
	Leer idEmpleado
	Escribir "Cantidad de dias trabajados"
	Leer dias
	
	si dias > 0 y dias <= 6 Entonces
		
		Segun idEmpleado Hacer
			"1":
				salario = 56 * dias
			"2":
				salario = 64 * dias
			"3":
				salario = 80 * dias
			"4":
				salario = 48 * dias
			De Otro Modo:
				Escribir "Dato no valido"
		FinSegun
		
		Escribir "El salario es : ",salario
	SiNo
		Escribir "Excedio los dias de una semana laborable"
	FinSi
	
FinProceso
