// 	38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
// 		Clave: Un número perfecto es un número entero positivo que es igual a la suma de sus divisores propios

Algoritmo numero_perfecto
	Definir n, sumaDivisores, i Como Entero
	
	Escribir "Ingrese un número: "
	Leer n
	
	sumaDivisores <- 0  // Inicializamos la suma de los divisores
	
	Para i <- 1 Hasta n / 2 Con Paso 1 Hacer
		Si n Mod i = 0 Entonces
			sumaDivisores <- sumaDivisores + i  // Sumamos los divisores de n
		FinSi
	FinPara
	
	Si sumaDivisores = n Entonces
		Escribir n, " es un número perfecto."
	Sino
		Escribir n, " no es un número perfecto."
	FinSi
FinAlgoritmo
