Proceso sin_titulo
	Definir n1,n2,n3,prom Como Real
	Escribir "Digite su nota 1"
	Leer n1
	Escribir "Digite su nota 2"
	Leer n2
	Escribir "Digite su nota 3"
	Leer n3
	
	prom=(n1+n2+n3)/3
	
	
	Si prom>=12 Entonces
		cond="Aprobó"
	SiNo
		cond="Desaprobó"
	FinSi
	
	Escribir "El estudiante ",cond
	
	
	
FinProceso
