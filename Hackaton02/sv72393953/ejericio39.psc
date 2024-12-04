Proceso Ejercicio39
	Escribir "Ingrese numero"
	Leer num
	
	suma=0
	valor1=0
	
	Para i=0 Hasta num Con Paso 1 Hacer
		suma= suma + (((-1)^i)/((2*i)+1))
	Fin Para
	
	Escribir  "La aproximacion a pi usando la formula de Leibniz es ",suma*4
FinProceso
