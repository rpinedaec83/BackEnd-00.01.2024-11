// 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si 
//    ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Algoritmo aumento_sueldo
    SUELDO_MINIMO <- 2000
    AUMENTO_5 <- 0.05
    AUMENTO_10 <- 0.10
    DEFINIR sueldo, aumento, sueldo_con_aumento COMO REAL

    Escribir "Ingresa el sueldo del trabajador:"
    Leer sueldo
    
    Si sueldo > SUELDO_MINIMO Entonces
        aumento <- sueldo * AUMENTO_5
    Sino
        aumento <- sueldo * AUMENTO_10
    FinSi
    
    sueldo_con_aumento <- sueldo + aumento
    Escribir "El sueldo con aumento es: $", sueldo_con_aumento
FinAlgoritmo
