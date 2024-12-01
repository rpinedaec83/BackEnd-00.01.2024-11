Proceso sin_titulo
	
	
	Escribir "Digite la cantidad de elementos de Fibonacci que desea ver"
	Leer cant
	
	f1=0
	f2=1
	
	Si (cant=1) Entonces
		Escribir f1
	SiNo
		Escribir f1
		Escribir f2
	FinSi
	
	Para i<-1 Hasta cant-2 Con Paso +1 Hacer
		fa=f1+f2
		Escribir fa
		f1=f2
		f2=fa
		
	Fin Para
	
	
	
FinProceso
