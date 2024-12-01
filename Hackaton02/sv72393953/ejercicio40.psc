Proceso Ejercicio40
	Escribir "Ingrese numero"
	Leer num
	
	Para i=3 Hasta num Con Paso 1 Hacer
		suma=suma+((4*((-1)^(i+1))/((2*i)*((2*i)+1)*((2*1)+2))))
	Fin Para
	
	Escribir "La aproximacion a pi reemplazando ",num," en la serie de Nilakantha es ",suma+3
FinProceso
