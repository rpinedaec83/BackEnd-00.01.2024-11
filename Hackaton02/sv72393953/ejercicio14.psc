Proceso Ejercicio14
	Escribir "Ingresa numero del 1 al 9"
	leer num
	
	Si (num < 1) O (num > 10) Entonces
        Escribir "El número ingresado no está en el rango válido.";
    SiNo
	
	EsPrimo = Verdadero
		Para i = 2 Hasta trunc(Raiz(num)) Hacer
			Si num Mod i = 0 Entonces
				EsPrimo = Falso
			FinSi
		FinPara
	
	Si EsPrimo Entonces
		Escribir num, " es un número primo."
	Sino
		Escribir num, " no es un número primo."
	FinSi
FinSi
FinProceso
