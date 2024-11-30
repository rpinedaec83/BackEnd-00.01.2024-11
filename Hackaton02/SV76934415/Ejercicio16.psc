// 16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

Algoritmo DiaDeLaSemana
	Definir opcion, numero Como Entero
	Repetir
		Escribir "Seleccione una opción:"
		Escribir "1. Consultar día de la semana según un número."
		Escribir "0. Salir."
		Leer opcion
		
		Segun opcion Hacer
			1:
				Escribir "Ingrese un número del 1 al 7:"
				Leer numero
				Segun numero Hacer
					1: Escribir "Lunes"
					2: Escribir "Martes"
					3: Escribir "Miércoles"
					4: Escribir "Jueves"
					5: Escribir "Viernes"
					6: Escribir "Sábado"
					7: Escribir "Domingo"
					De Otro Modo:
						Escribir "Número inválido. Debe estar entre 1 y 7."
				FinSegun
			0:
				Escribir "Saliendo del programa..."
			De Otro Modo:
				Escribir "Opción inválida. Intente nuevamente."
		FinSegun
	Hasta Que opcion = 0
FinAlgoritmo
