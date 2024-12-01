Proceso sin_titulo
	Escribir "Ingrese n para aplicar la serie de Nilakantha"
	Leer n
	
	suma=0
	Para i<-1 Hasta n Con Paso +1 Hacer
		suma=suma+((4*( (-1)^(i+1))/((2*i)*((2*i)+1)*((2*i)+2))))
	Fin Para
	
	Escribir "La aproximación a pi reemplazando ",n," en la serie de Nilakantha es ",suma+3
FinProceso
