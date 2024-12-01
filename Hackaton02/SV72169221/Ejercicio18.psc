Proceso sin_titulo
	Escribir "Cuantos CDs desea llevar de la misma marca "
	Leer cant
	
	Mientras cant<1 Hacer
		Escribir "Cuantos CDs desea llevar de la misma marca "
		Leer cant
	Fin Mientras
	
	Si cant>=1 Y cant<=9 Entonces
		precio=cant*10
	FinSi
	
	Si cant>=10 Y cant<=99 Entonces
		precio=cant*8
	FinSi
	
	Si cant>=100 Y cant<=499 Entonces
		precio=cant*7
	FinSi
	
	Si cant>=500 Entonces
		precio=cant*6
	FinSi
	
	ganancia=precio*0.0825
	Escribir "El precio para el cliente es de ",precio
	Escribir "La ganancia del vendedor es de ",ganancia
	
FinProceso
