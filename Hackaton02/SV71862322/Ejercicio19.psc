Proceso pago_empleados
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
FinProceso
