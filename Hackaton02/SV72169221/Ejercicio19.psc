Proceso sin_titulo
	Escribir "Introducir el número identificador del trabajador"
	Escribir "(1. Cajero 2.Servidor 3.Preparador de mezclas 4.Mantenimiento)"
	Leer iden
	Mientras iden<1 o iden>4 Hacer
		Escribir "Introducir el número identificador del trabajador"
		Escribir "(1. Cajero 2.Servidor 3.Preparador de mezclas 4.Mantenimiento)"
		Leer iden
	Fin Mientras
	
	Escribir "Digite cuantos dias trabajó el empleado seleccionado(1 a 6 dias)"
	Leer cantdias
	Mientras cantdias<1 o cantdias>6 Hacer
		Escribir "Digite cuantos dias trabajó el empleado seleccionado(1 a 6 dias)"
		Leer cantdias
	Fin Mientras
	
	
	
	Segun iden Hacer
		1:
			emp="cajero"
			sueldo=cantdias*56
		2:
			emp="servidor"
			sueldo=cantdias*64
		3:
			emp="preparador de mezclas"
			sueldo=cantdias*80
		4:
			emp="mantenimiento"
			sueldo=cantdias*48
			
		De Otro Modo:
			emp="Error"
			sueldo=0
			
	FinSegun
	
	Escribir "El empleado que seleccionó es el ",emp
	Escribir "El sueldo del empleado (",emp,") es de ",sueldo
	
	
	
	
	
FinProceso
