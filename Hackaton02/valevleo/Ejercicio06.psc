//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas
//					entonces las horas extras se le pagarán a $25 por hora.

Proceso Ejercicio06
	
	
	Escribir "Ingrese las horas trabajadas"
	Leer Horas_trabajadas
	
	si Horas_trabajadas <= 40 Entonces
		sueldo = Horas_trabajadas * 20
	SiNo
		horas_extras = Horas_trabajadas - 40
		costo_HE = horas_extras * 25
		SueldoBasico = 40 * 20
		sueldo = SueldoBasico + costo_HE
	FinSi
	Escribir "Tu sueldo es ", sueldo
	Escribir "Tienes un total de ", horas_extras , " horas extras realizadas"
	
FinProceso

