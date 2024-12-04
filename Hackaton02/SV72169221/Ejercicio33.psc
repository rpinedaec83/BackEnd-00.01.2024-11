Proceso sin_titulo
	Condicional="si"
	i=0
	
	Mientras Condicional="si" Hacer
		i=i+1
		Escribir "Proceso número ",i
		Escribir "¿Desea continuar el proceso?"
		Escribir "Para terminar el proceso escriba cualquier cosa"
		Escribir "Para continuar el proceso escriba:Si "
		Leer cond
		Condicional=Minusculas(cond)
		
	Fin Mientras
FinProceso
