Proceso terminaen4
	Definir num Como Entero
	Escribir "Ingrese un número"
	Leer num
	
	Si num>0 Entonces
		newnum=num+6
	SiNo
		newnum=num-6
	FinSi
	
	
	Si newnum MOD 10==0 Entonces
		Escribir "El número que introdujo SI termina en cuatro"
	SiNo
		Escribir "El número que introdujo NO termina en cuatro"
	FinSi
	
FinProceso
