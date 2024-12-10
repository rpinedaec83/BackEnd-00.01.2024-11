Proceso tarea31
	
    Definir Nume, SumaP, SumaI, ContadorP, ContadorI Como Entero
    SumaP <- 0
    SumaI <- 0
    ContadorP <- 0
    ContadorI <- 0
	
    Para X <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el n�mero ", X, ":"
        Leer Nume
		
        Si Nume MOD 2 = 0 Entonces
            SumaP <- SumaP + Nume
            ContadorP <- ContadorP + 1
        Sino
            SumaI <- SumaI + Nume
            ContadorI <- ContadorI + 1
        Fin Si
    Fin Para
	
    Si ContadorP > 0 Entonces
        MediaP <- SumaP / ContadorP
        Escribir "La media de los n�meros pares es: ", MediaP
    Sino
        Escribir "No se ingresaron n�meros pares."
    Fin Si
	
    Si ContadorI > 0 Entonces
        MediaI <- SumaI / ContadorI
        Escribir "La media de los n�meros impares es: ", MediaI
    Sino
        Escribir "No se ingresaron n�meros impares."
    Fin Si
	
	
	
	
	
	
	
FinProceso
