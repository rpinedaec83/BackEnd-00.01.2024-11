//  7.  Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes 
//      con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//      Los descuentos son los siguientes:
//        Tipo A 10% de descuento
//        Tipo B 15% de descuento
//        Tipo C 20% de descuento

Algoritmo descuento_helados
    DESCUENTO_A <- 0.10
    DESCUENTO_B <- 0.15
    DESCUENTO_C <- 0.20
    DEFINIR tipo_membresia COMO CARACTER
    DEFINIR total_compra, descuento, total_con_descuento COMO REAL

    Escribir "Ingresa el tipo de membresía (A, B, C):"
    Leer tipo_membresia
    Escribir "Ingresa el total de la compra:"
    Leer total_compra
    
    Si tipo_membresia = "A" o tipo_membresia = "a" Entonces
        descuento <- DESCUENTO_A
    Sino
        Si tipo_membresia = "B" o tipo_membresia = "b" Entonces
            descuento <- DESCUENTO_B
        Sino
            Si tipo_membresia = "C" o tipo_membresia = "c" Entonces
                descuento <- DESCUENTO_C
            Sino
                descuento <- 0
                Escribir "Tipo de membresía no válido"
            FinSi
        FinSi
    FinSi
    
    total_con_descuento <- total_compra * (1 - descuento)
    Escribir "El total con descuento es: $", total_con_descuento
FinAlgoritmo
