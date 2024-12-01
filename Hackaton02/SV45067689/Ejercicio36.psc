// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Algoritmo serie_fibonacci
	Definir n, i, a, b, siguiente Como Entero
    
    Escribir "Ingrese la cantidad de términos de la serie Fibonacci que desea calcular: "
    Leer n
    
    Si n <= 0 Entonces
        Escribir "El número de términos debe ser positivo."
    Sino
        a <- 0  // Primer número de la serie
        b <- 1  // Segundo número de la serie
        
        Escribir "La serie Fibonacci es: "
        
        Si n >= 1 Entonces
            Escribir a // Mostrar el primer número
        FinSi
        
        Si n >= 2 Entonces
            Escribir b // Mostrar el segundo número
        FinSi
        
        Para i <- 3 Hasta n Con Paso 1 Hacer
            siguiente <- a + b  // El siguiente número es la suma de los dos anteriores
            Escribir siguiente  // Mostrar el siguiente número en la serie
            
            // Actualizar a y b para el siguiente término
            a <- b
            b <- siguiente
        FinPara
    FinSi

FinAlgoritmo
