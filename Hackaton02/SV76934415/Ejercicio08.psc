//  8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Algoritmo promedio_notas
    NOTA_APROBACION <- 10.5
    DEFINIR nota1, nota2, nota3, promedio COMO REAL

    Escribir "Ingresa la primera nota:"
    Leer nota1
    Escribir "Ingresa la segunda nota:"
    Leer nota2
    Escribir "Ingresa la tercera nota:"
    Leer nota3
    
    promedio <- (nota1 + nota2 + nota3) / 3
    
    Si promedio >= NOTA_APROBACION Entonces
        Escribir "¡Aprobado!, el promedio es: ", promedio
    Sino
        Escribir "¡Reprobado!, el promedio es: ", promedio
    FinSi
FinAlgoritmo
