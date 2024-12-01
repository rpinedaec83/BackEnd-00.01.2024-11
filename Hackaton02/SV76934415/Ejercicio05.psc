//  5.  Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//      esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el 
//      total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//      y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Algoritmo descuento_zapatos
    PRECIO_POR_ZAPATO <- 80
    DESCUENTO_1 <- 0.40
    DESCUENTO_2 <- 0.20
    DESCUENTO_3 <- 0.10
    DEFINIR cantidad, total, descuento, total_con_descuento COMO REAL

    Escribir "Ingresa el número de zapatos que deseas comprar:"
    Leer cantidad
    
    total <- PRECIO_POR_ZAPATO * cantidad
    
    Si cantidad > 30 Entonces
        descuento <- DESCUENTO_1
    Sino
        Si cantidad >= 20 Entonces
            descuento <- DESCUENTO_2
        Sino
            Si cantidad > 10 Entonces
                descuento <- DESCUENTO_3
            Sino
                descuento <- 0
            FinSi
        FinSi
    FinSi
    
    total_con_descuento <- total * (1 - descuento)
    Escribir "El total con descuento es: $", total_con_descuento
FinAlgoritmo
