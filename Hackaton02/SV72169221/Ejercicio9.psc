Proceso sin_titulo
	Escribir "Digite cuanto ganaba el trabajador"
	Leer ganancia
	
	si ganancia>2000 Entonces
		aum=ganancia*0.05
	SiNo
		aum=ganancia*0.1
	FinSi
	
	ganancia=ganancia+aum
	Escribir "El monto a pagar al trabajador ,mas su aumento, es de ",ganancia
	
FinProceso
