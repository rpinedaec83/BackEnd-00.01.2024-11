// ------------------------------------------------------------------------------------------------------------------------------
//	19.	Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
//		con su número identificador y salario diario correspondiente:

//			Cajero (56$/día).
//			Servidor (64$/día).
//			Preparador de mezclas (80$/día).
//			Mantenimiento (48$/día).

//		El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
//		identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará 
//		por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
// ------------------------------------------------------------------------------------------------------------------------------

Algoritmo pago_empleados
	Definir idEmpleado, diasTrabajados, salarioDia, salarioTotal Como Entero
	Escribir "Ingrese el número identificador del empleado (1 a 4):"
	Leer idEmpleado
	Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
	Leer diasTrabajados
	
	Si diasTrabajados < 1 O diasTrabajados > 6 Entonces
		Escribir "La cantidad de días trabajados debe estar entre 1 y 6."
	FinSi

	Segun idEmpleado Hacer
		1: salarioDia <- 56
		2: salarioDia <- 64
		3: salarioDia <- 80
		4: salarioDia <- 48
		De Otro Modo:
			Escribir "ID de empleado no válido."
	FinSegun

	salarioTotal <- salarioDia * diasTrabajados

	Escribir "El salario total a pagar es: $", salarioTotal
FinAlgoritmo
