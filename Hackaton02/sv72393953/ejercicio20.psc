Proceso Ejercicio20
	Escribir "Ingrese primer numero"
	Leer num1
	
	Escribir "Ingrese segundo numero"
	Leer num2
	
	Escribir "Ingrese tercer numero"
	Leer num3
	
	Escribir "Ingrese cuarto numero"
	Leer num4
	
	Si num1 mod 2 = 0 Entonces
        contadorPares = contadorPares + 1
    FinSi
	
	Si num2 mod 2 = 0 Entonces
        contadorPares = contadorPares + 1
		cuadradonum2=num2*num2
    FinSi
	
	Si num3 mod 2 = 0 Entonces
        contadorPares = contadorPares + 1
    FinSi
	
	Si num4 mod 2 = 0 Entonces
        contadorPares = contadorPares + 1
    FinSi
	
	Si (num2>num3) y (num3>50 y num3<700) Entonces
		sumaTotal = num1+num2+num3+num4
		Escribir  "La suma total es ",sumaTotal
	Fin Si
	
	Si num1<num4 Entonces
		media=(num1+num2+num3+num4)/4
		Escribir "La media es ",media
	Fin Si
	
	
	
	Escribir  "Contadores de pares ",contadorPares
	Escribir  "Tercer numero ",num3
	Escribir  "El segundo numero es ",num2, " y el cuadrado del segundo numero ",cuadradonum2
FinProceso
