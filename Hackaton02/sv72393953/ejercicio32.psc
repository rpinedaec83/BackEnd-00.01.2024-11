Proceso Ejercicio32
    mayornumero = -999999
    menornumero = 999999
    Para i = 1 Hasta 3 Con Paso 1 Hacer
        Escribir i, ".0", ")Provincia"
        Leer Provincia
        
        Para j = 1 Hasta 3 Con Paso 1 Hacer
            Escribir j, ")Ciudad"
            Leer Ciudad
            
            Escribir "Poblacion"
            Leer Poblacion
            
            Si mayornumero < Poblacion Entonces
                mayornumero = Poblacion
                Ciudadmayor = Ciudad
            Fin Si
        Fin Para
        
        Escribir "En ", Provincia, " en la ciudad de ", Ciudadmayor, " es la que tiene la mayor poblacion con ", mayornumero
    Fin Para
FinProceso
