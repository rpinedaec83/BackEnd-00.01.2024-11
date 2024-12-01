Proceso sin_titulo
	
	
	
	
	Mientras num1<=0 o num2<=0 Hacer
		Escribir "Los números que ingrese deben ser positivos"
		Escribir "Ingresar el primer número"
		Leer num1
		Escribir "Ingresar el segundo número"
		Leer num2
	Fin Mientras
	
	inicio1=num1
	inicio2=num2
	
	Si num1>num2 Entonces
		division=num1/num2
		resto=num1 MOD num2
	SiNo
		division=num2/num1
		resto=num1 MOD num2
	FinSi
	cociente=trunc(division)
	
	Mientras resto<>0 Hacer
		num1=num2
		num2=resto
		resto= num1 MOD num2
		Si resto=0 Entonces
			resultado=num2
		FinSi
	Fin Mientras
	
	Escribir "El M.C.D de los numeros ",inicio1," y ",inicio2," es ",resultado
	
	
FinProceso
