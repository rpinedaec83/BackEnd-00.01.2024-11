//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso Ejercicio08
	Escribir "****Ingresar las tres notas****"
	Escribir "Ingrese NOTA 01"
	Leer N1
	Escribir "Ingrese NOTA 02"
	Leer N2
	Escribir "Ingrese NOTA 03"
	Leer N3
	
	Promedio = ( N1 + N2 + N3) /3
	
	SI Promedio <= 10.5 Entonces
		Escribir "Alumno no aptobó el semestre"
	SiNo
		Escribir "Alumno logró aprobar el semestre"
	FinSi
	Escribir "El promedio es ", Promedio
	
FinProceso
