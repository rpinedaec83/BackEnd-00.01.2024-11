Proceso sin_titulo
	
	sumaimp=0
	sumapar=0
	nimp=0
	npar=0
	
	Para i<-1 Hasta 10 Con Paso +1 Hacer
		Escribir "Introduzca un número mayor a cero"
		Leer num
		
		Mientras num<=0 Hacer
			Escribir "Error"
			Escribir "Introduzca un número mayor a cero"
			Leer num
		Fin Mientras
		
		Si num MOD 2==0 Entonces
			sumapar=sumapar+num
			npar=npar+1
		SiNo
			sumaimp=sumaimp+num
			nimp=nimp+1
			
			
			
		FinSi
		
		
	Fin Para
	
	mediapar=sumapar/npar
	mediaimpar=sumaimp/nimp
	
	Escribir "La media de todos los números pares introducidos es ",mediapar
	Escribir "La media de todos los números impares introducidos es ",mediaimpar
	
	
	
FinProceso
