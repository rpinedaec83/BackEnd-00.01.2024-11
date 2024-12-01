//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso sin_titulo
	Definir continuar Como Caracter
	Definir opcion Como Entero
		
		// Bucle para permitir continuar con el programa
	Repetir
			// Lógica del programa principal
		Escribir "Elige una opción:"
		Escribir "1. Opción 1"
		Escribir "2. Opción 2"
		Escribir "3. Opción 3"
		Leer opcion
			
		Segun opcion Hacer
			Caso 1:
				Escribir "Has elegido la opción 1."
			Caso 2:
				Escribir "Has elegido la opción 2."
			Caso 3:
				Escribir "Has elegido la opción 3."
			De Otro Modo:
				Escribir "Opción no válida."
		FinSegun
			
			// Preguntar si desea continuar
		Escribir "¿Desea continuar con el programa? (S/N)"
		Leer continuar
			
			// Convertir a mayúscula para facilitar la comparación
		continuar = Mayusculas(continuar)
			
	Hasta Que continuar = "N"
		
	Escribir "Programa finalizado."

FinProceso
