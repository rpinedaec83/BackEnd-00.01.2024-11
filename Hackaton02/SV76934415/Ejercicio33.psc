// 33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Algoritmo continuar_programa
	Definir continuar Como Caracter
	
	Escribir "Bienvenido al programa."
	
	Repetir
		Escribir "Ejecutanco programa."
		
		Escribir "¿Deseas continuar? (S/N):"
		Leer continuar
		
		Si continuar = "N" O continuar = "n" Entonces
			Escribir "Gracias por usar el programa. ¡Hasta luego!"
		FinSi
	Hasta Que continuar = "N" O continuar = "n"
FinAlgoritmo
