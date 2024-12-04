Proceso tarea14
	
	Definir nume Como Entero
	
    Escribir "Ingrese un número entre 1 y 10:"
    Leer nume
	
    Si nume < 1 O nume > 10 Entonces
        Escribir "El número ingresado no está en el rango de 1 a 10."
    SiNo
        Si nume = 1 Entonces
            Escribir "El número no es primo."
        SiNo
            Si nume = 2 O nume = 3 O nume = 5 O nume = 7 Entonces
                Escribir "El número es primo."
            SiNo
                Escribir "El número no es primo."
            Fin Si
        Fin Si
    Fin Si
	
FinProceso
