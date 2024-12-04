//  6.  Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//      se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40
//      horas entonces las horas extras se le pagarán a $25 por hora.

Algoritmo sueldo_semanal
    TARIFA_NORMAL <- 20
    TARIFA_EXTRA <- 25
    DEFINIR horas_trabajadas, sueldo, horas_extras COMO REAL

    Escribir "Ingresa el número de horas trabajadas:"
    Leer horas_trabajadas
    
    Si horas_trabajadas <= 40 Entonces
        sueldo <- horas_trabajadas * TARIFA_NORMAL
    Sino
        horas_extras <- horas_trabajadas - 40
        sueldo <- (40 * TARIFA_NORMAL) + (horas_extras * TARIFA_EXTRA)
    FinSi
    
    Escribir "El sueldo semanal es: $", sueldo
FinAlgoritmo
