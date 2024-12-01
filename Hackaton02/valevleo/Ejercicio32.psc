// 	32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, 
//		hacer un algoritmo en Pseint que nos permita saber eso. 

Algoritmo ciudad_con_mayor_poblacion
		Definir provincia, ciudad Como Cadena
		Definir poblacion, maxPoblacionNum Como Entero
		Definir ciudadMaxPoblacion Como Cadena
		
		maxPoblacionNum <- 0  // Inicializamos la población máxima a 0
		ciudadMaxPoblacion <- ""  // Inicializamos el nombre de la ciudad
		
		Para i <- 1 Hasta 3 Hacer // Recorremos las 3 provincias
			Escribir "Ingrese el nombre de la provincia ", i
			Leer provincia
			
			Para j <- 1 Hasta 11 Hacer // Recorremos las 11 ciudades
				Escribir "Ingrese el nombre de la ciudad ", j, " de la provincia ", provincia
				Leer ciudad
				Escribir "Ingrese la población de la ciudad ", ciudad
				Leer poblacion // Leer la población como número
				
				Si poblacion > maxPoblacionNum Entonces
					maxPoblacionNum <- poblacion
					ciudadMaxPoblacion <- ciudad
				FinSi
			FinPara
		FinPara
		
		Escribir "La ciudad con la mayor población es: ", ciudadMaxPoblacion, " con ", maxPoblacionNum, " personas."
FinAlgoritmo
