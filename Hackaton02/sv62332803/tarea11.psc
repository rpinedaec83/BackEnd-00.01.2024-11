Proceso tarea11
	
	Definir num1, num2, num3 Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Si num1 >= num2 Y num1 >= num3 Entonces
        Escribir "El número mayor es: ", num1
    SiNo
        Si num2 >= num1 Y num2 >= num3 Entonces
            Escribir "El número mayor es: ", num2
        SiNo
            Escribir "El número mayor es: ", num3
        Fin Si
    Fin Si
	
FinProceso
