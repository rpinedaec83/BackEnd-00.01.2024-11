Proceso sin_titulo
	Escribir "Introducir el primer número"
	Leer num1
	Escribir "Introducir el segundo número"
	Leer num2
	Escribir "Introducir el tercer número"
	Leer num3
	Escribir "Introducir el cuarto número"
	Leer num4
	
	pares=0
	Si num1 MOD 2==0 Entonces
		pares=pares+1
	FinSi
	
	Si num2 MOD 2==0 Entonces
		pares=pares+1
	FinSi
	
	Si num3 MOD 2==0 Entonces
		pares=pares+1
	FinSi
	
	Si num4 MOD 2==0 Entonces
		pares=pares+1
	FinSi
	
	Escribir "Existen ",pares," numeros pares introducidos"
	may=0
	
	Si num1>num2 Y num1>num3 Y num1>num4 Entonces
		may=num1
	FinSi
	
	Si num2>num1 Y num2>num3 Y num2>num4 Entonces
		may=num2
	FinSi
	
	Si num3>num1 Y num3>num2 Y num3>num4 Entonces
		may=num3
	FinSi
	
	Si num4>num1 Y num4>num2 Y num4>num3 Entonces
		may=num4
	FinSi
	
	Escribir "El mayor de los números introducidos es el número ",may
	
	Si num3 MOD 2 ==0 Entonces
		Escribir "El cuadrado del segundo valor introducido es ",num2^2
	FinSi
	
	
	Si num1<num4 Entonces
		prom=(num1+num2+num3+num4)/4
		Escribir "La media de los 4 números es de ",prom
	FinSi
	
	
	Si num2>num3 Entonces
		Si num3>=50 y num3<=700 Entonces
			suma=num1+num2+num3+num4
			Escribir "La suma de los cuatro números es de ",suma
	
		FinSi
	FinSi
	
	
	
	
	
	
	
	
	
FinProceso
