Proceso Ejercicio06
	Escribir "Digitar cuantos dias a la semana trabaja"
	Leer dias
	
	Escribir "Digitar cuantas horas al dia trabaja"
	Leer horas
	
	Si horas<=40 Entonces
		sueldoxdia = horas*20;
	SiNo
		horasextras=horas-40;
		sueldoxdia = (horasextras * 25) + (40*20)
	Fin Si
	
	sueldoxsemana= sueldoxdia * dias
	
	Escribir "Horas extras :",horasextras;
	Escribir "El sueldo por dia es :",sueldoxdia;
	Escribir "El sueldo por semana es :",sueldoxsemana;
FinProceso
