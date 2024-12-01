Algoritmo ordenar
   
    Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2
    Escribir "Ingrese el tercer numero:"
    Leer num3

    Si num1 <= num2 y num1 <= num3 Entonces
		
        Si num2 <= num3 Entonces
            Escribir "Los numeros ordenados de menor a mayor son:"
			Escribir num1 ", ", num2, ", ", num3
        SiNo
            Escribir "Los numeros ordenados de menor a mayor son:"
			Escribir num1 ", ", num3, ", ", num2
        FinSi
		
	Sino 
		Si num2 <= num1 y num2 <= num3 Entonces
			Si num1 <= num3 Entonces
				Escribir "Los numeros ordenados de menor a mayor son:"
				Escribir num2 ", ", num1, ", ", num3
			SiNo
				Escribir "Los numeros ordenados de menor a mayor son:"
				Escribir num2 ", ", num3, ", ", num1
			FinSi
		SiNo
			Si num1 <= num2 Entonces
				Escribir "Los numeros ordenados de menor a mayor son:"
				Escribir num3 ", ", num1, ", ", num2
			SiNo
				Escribir "Los numeros ordenados de menor a mayor son:"
				Escribir num3 ", ", num2, ", ", num1
			FinSi
		FinSi
	Finsi
    
FinAlgoritmo
