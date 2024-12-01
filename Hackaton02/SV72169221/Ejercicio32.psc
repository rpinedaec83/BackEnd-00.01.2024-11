Proceso sin_titulo
	
	Escribir "Ingrese el nombre de la provincia 1"
	Leer prov1
	
	
	Escribir "Ingrese el nombre de la provincia 2"
	Leer prov2
	
	
	
	Escribir "Ingrese el nombre de la provincia 3"
	Leer prov3
	
	
	may=0
	Para i<-1 Hasta 11 Con Paso +1 Hacer
		Escribir "Ingrese el nombre de la ciudad numero ",i
		Leer ciudad
		Escribir "Seleccione a que provincia pertenece la ciudad ",ciudad," (1.",prov1," 2.",prov2," 3.",prov3,")"
		Leer opc
		Escribir "Seleccione la cantidad de personas en la ciudad ",ciudad
		Leer cant
		
		Si (cant>may) Entonces
			Segun opc Hacer
				1:provinc=prov1
				2:provinc=prov2
				3: provinc=prov3
				
				De Otro Modo:
					provinc="Error"
			FinSegun
			
			ciudadmax=ciudad
			may=cant
		FinSi
		
		
	Fin Para
	
	Escribir "La ciudad con mayor cantidad de habitantes es la ciudad ",ciudadmax," que se encuentra en la provincia de ",provinc
	Escribir "La ciudad tiene ",may," habitantes"
	
	
	
	
	
	
FinProceso
