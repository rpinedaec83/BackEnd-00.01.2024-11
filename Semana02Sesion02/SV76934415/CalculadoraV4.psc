Proceso CalculadoraV4
    bandera = Verdadero
    Mientras bandera Hacer
        Escribir "Bienvenidos a mi calculadora V4"
        Escribir "Digita el primer número"
        Leer primerNumero
        Escribir "Digita el segundo número"
        Leer segundoNumero
        Escribir "Digita la operación: 1 para Suma, 2 para Resta, 3 para Multiplicación, 4 para División o 0 para salir"
        Leer operacion
        
        Si operacion = 0 Entonces
            Escribir "Gracias por usar mi calculadora"
            bandera = Falso
        Sino
            Segun operacion Hacer
                "1":
                    resultado = primerNumero + segundoNumero
                    Escribir "El resultado de la suma es: ", resultado
                "2":
                    resultado = primerNumero - segundoNumero
                    Escribir "El resultado de la resta es: ", resultado
                "3":
                    resultado = primerNumero * segundoNumero
                    Escribir "El resultado de la multiplicación es: ", resultado
                "4":
                    Si segundoNumero = 0 Entonces
                        Escribir "Error: No se puede dividir entre cero."
                    Sino
                        resultado = primerNumero / segundoNumero
                        Escribir "El resultado de la división es: ", resultado
                    FinSi
                De Otro Modo:
                    Escribir "Operación no válida. Por favor, elige una opción válida."
            FinSegun
        FinSi
    FinMientras
FinProceso
