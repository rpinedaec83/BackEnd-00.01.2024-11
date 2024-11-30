// 15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Algoritmo ConvertirMedidas
    Definir opcion Como Entero
    Repetir
		Escribir ""
		Escribir "Seleccione la conversión que desea realizar:"
		Escribir "1. Convertir centímetros a pulgadas."
		Escribir "2. Convertir libras a kilogramos."
		Escribir "0. Salir."
		Leer opcion
		
		Segun opcion Hacer
			1:
				Definir centimetros, pulgadas Como Real
				Escribir "Ingrese los centímetros a convertir:"
				Leer centimetros
				pulgadas <- centimetros / 2.54
				Escribir centimetros, " cm equivalen a ", pulgadas, " pulgadas."
			2:
				Definir libras, kilogramos Como Real
				Escribir "Ingrese las libras a convertir:"
				Leer libras
				kilogramos <- libras / 2.2046
				Escribir libras, " libras equivalen a ", kilogramos, " kg."
			0:
				Escribir "Saliendo del programa..."
			De Otro Modo:
				Escribir "Opción inválida. Intente nuevamente."
		FinSegun
	Hasta Que opcion = 0
	
FinAlgoritmo
