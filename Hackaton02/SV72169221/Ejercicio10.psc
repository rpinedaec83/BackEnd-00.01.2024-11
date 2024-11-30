Proceso sin_titulo
	Escribir "Digite un número que no sea cero"
	Leer num
	
	Mientras num=0 Hacer
		Escribir "Digite un número que no sea cero"
		Leer num
	Fin Mientras
	
	Si num MOD 2 ==0 Entonces
		cond="par"
	SiNo
		cond="impar"
	FinSi
	
	Escribir "El número que usted escribió es ",cond
	
	
FinProceso
