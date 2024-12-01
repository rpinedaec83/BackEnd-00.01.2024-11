Proceso tarea17
	
	Definir hora, minuto, segundo, horaSiguiente, minutoSiguiente, segundoSiguiente Como Entero
	
    Escribir "Ingrese la hora (formato 24 horas):"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minuto
    Escribir "Ingrese los segundos:"
    Leer segundo
	
    segundoSiguiente <- segundo + 1
	
    Si segundoSiguiente = 60 Entonces
        segundoSiguiente <- 0
        minutoSiguiente <- minuto + 1
		
        Si minutoSiguiente = 60 Entonces
            minutoSiguiente <- 0
            horaSiguiente <- hora + 1
			
            Si horaSiguiente = 24 Entonces
                horaSiguiente <- 0
            Fin Si
        Fin Si
    SiNo
        minutoSiguiente <- minuto
        horaSiguiente <- hora
    Fin Si
	
    Escribir "La hora dentro de un segundo es: ", horaSiguiente, ":", minutoSiguiente, ":", segundoSiguiente
FinProceso
