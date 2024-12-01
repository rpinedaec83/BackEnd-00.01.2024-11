//	27.	Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//		se debe acabar el programa al ingresar un número negativo.

Algoritmo calcular_media
    Definir numero, suma, contador, media Como Real
    
    suma <- 0
    contador <- 0
    
    Repetir
        Escribir "Ingrese un número positivo (o un número negativo para terminar):"
        Leer numero
        
        Si numero >= 0 Entonces
            suma <- suma + numero
            contador <- contador + 1
        FinSi
    Hasta Que numero < 0
    
	Escribir ""
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los números es: ", media
    Sino
        Escribir "No se han ingresado números positivos."
    FinSi
FinAlgoritmo
