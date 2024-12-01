Proceso sin_titulo
	Escribir "Ingrese un número"
	Leer numer
	
	suma=0
	
	Para i<-1 Hasta numer-1 Con Paso +1 Hacer
		si numer MOD i==0 Entonces
			suma=suma+i
		FinSi
	Fin Para
	
	si suma=numer Entonces
		Escribir "El número introducido es un número perfecto"
	SiNo
		Escribir "El número introducido NO es un número perfecto"
	FinSi
	
	
	
	
FinProceso
