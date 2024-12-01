//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso sin_titulo
	Escribir "Ingrese un número"
	Leer n
	sumImpar = 0
	Para i=1 Hasta n Hacer
		si i mod 2 <> 0 Entonces
			sumImpar = sumImpar + i
		FinSi
	FinPara
	Escribir "La suma de los números impares es = ",sumImpar
FinProceso
