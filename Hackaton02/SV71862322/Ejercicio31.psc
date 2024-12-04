Proceso MediaParesImpares
	sumaPares <- 0
    sumaImpares <- 0
    conteoPares <- 0
    conteoImpares <- 0
	
    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese un número: "
        Leer numero
        Si numero % 2 = 0 Entonces
            sumaPares <- sumaPares + numero
            conteoPares <- conteoPares + 1
        Sino
            sumaImpares <- sumaImpares + numero
            conteoImpares <- conteoImpares + 1
        FinSi
    FinPara
	
    Si conteoPares > 0 Entonces
        mediaPares <- sumaPares / conteoPares
        Escribir "Media de números pares: ", mediaPares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
	
    Si conteoImpares > 0 Entonces
        mediaImpares <- sumaImpares / conteoImpares
        Escribir "Media de números impares: ", mediaImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso
