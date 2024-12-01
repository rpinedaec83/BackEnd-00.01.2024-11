Proceso tarea27
	Definir nume, suma, contador Como Entero
    suma <- 0
    contador <- 0
    Escribir " Digite un numero positivo "
    Leer nume
	
    Mientras nume >= 0 Hacer
        suma <- suma + nume
        contador <- contador + 1
        Escribir "Ingrese otro numero positivo"
        Leer nume
    Fin Mientras
	
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los numeros ingresados es: ", media
    Sino
        Escribir "No se ingresaron numeros positivos."
    Fin Si
FinProceso
