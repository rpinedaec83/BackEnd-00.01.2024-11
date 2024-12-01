//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//			Cajero (56$/día).
//			Servidor (64$/día).
//			Preparador de mezclas (80$/día).
//			Mantenimiento (48$/día).
//			El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//			Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Ejercicio19
	Escribir "Ingrese una opcion para cada tipo de trabajador"
	Escribir "1.Cajero  2.Servidor  3.Preparador de mezclas  4.Mantenimiento"
	Leer tipo_trab
	Escribir "Ingresar la cantidad de días trabajados (6 como máximo)"
	Leer ndias
	si ndias > 6 Entonces
		Escribir "Cantidad de dias ingresados no debe exceder a 6"
	sino
		Segun tipo_trab Hacer
		"1": 
			sueldo = ndias * 56
		"2": 
			sueldo = ndias * 64
		"3": 
			sueldo = ndias * 80
		"4": 
			sueldo = ndias * 48
		De Otro Modo:
			Escribir "Opción de trabajador no es valida"
			
	FinSegun
	Finsi
	Escribir "Al trabajador le corresponde un total de S/. ", sueldo , " como sueldo"
	
FinProceso
