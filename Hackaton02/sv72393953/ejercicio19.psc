Proceso Ejercicio19
	
	Escribir "Ingrese identificador"
	Leer identificador
	
	Escribir "Ingrese la cantidad de dias de trabajo"
	Leer dias
	
	Segun identificador Hacer
		10:
			precioTotal=dias*56;
			Escribir "El empleado es cajero , su identificador es ",identificador," y su pago es ",precioTotal
		20:
			precioTotal=dias*64;
			Escribir "El empleado es servidor , su identificador es ",identificador," y su pago es ",precioTotal
		30:
			precioTotal=dias*80;
			Escribir "El empleado es preparador de mezclas , su identificador es ",identificador," y su pago es ",precioTotal
		40:
			precioTotal=dias*48;
			Escribir "El empleado es de mantenimiento , su identificador es ",identificador," y su pago es ",precioTotal
		De Otro Modo:
			Escribir "Identificador no valido"
	Fin Segun
FinProceso
