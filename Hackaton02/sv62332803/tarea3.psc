Proceso tarea3
	Definir primerNumero, ud Como Entero
	Escribir "Digite numero entero"
	Leer primerNumero
	
	si primerNumero <0 Entonces
		primerNumero = primerNumero*(-1)
	FinSi
	
	si primerNumero >=0 Entonces
		ud = primerNumero - trunc(primerNumero/10)*10
	FinSi
	si ud == 4 Entonces
		Escribir " El numero termina en 4 "
	SiNo
		Escribir "El numero no termina en 4"
	FinSi
	
	
FinProceso
