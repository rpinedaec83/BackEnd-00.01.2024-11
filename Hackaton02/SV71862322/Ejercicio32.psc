Proceso CiudadMayorPoblacion
	mayorPoblacion <- 0
    ciudadMayor <- ""
	
    Para provincia <- 1 Hasta 3 Hacer
        Para ciudad <- 1 Hasta 2 Hacer
            Escribir "Ingrese la población de la ciudad ", ciudad, " de la provincia ", provincia, ": "
            Leer poblacion
            Si poblacion > mayorPoblacion Entonces
                mayorPoblacion <- poblacion
                ciudadMayor <- "Provincia " + ConvertirATexto(provincia) + ", Ciudad " + ConvertirATexto(ciudad)
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con mayor población es: ", ciudadMayor, " con ", mayorPoblacion, " habitantes."
FinProceso
