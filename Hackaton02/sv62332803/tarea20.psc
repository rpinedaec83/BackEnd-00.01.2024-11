Proceso tarea20
	
	Definir numero1, numero2, numero3, numero4 Como Entero
	Definir pares, Nmayor Como Entero
	Definir media, suma Como Real	
	
	Escribir "ingrese el primer digito positivos "
	Leer numero1
	Escribir "ingrese el segundo digito positivos "
	Leer numero2
	Escribir "ingrese el tercer digito positivos "
	leer numero3
	Escribir "ingrese el cuarto digito positivos "
	Leer numero4
	
	pares <- 0
	Nmayor <- numero1

	si numero1 mod 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	
	si numero2 mod 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	si numero3 mod 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	si numero4 mod 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	
	si numero1 > Nmayor Entonces
		Nmayor <- numero1
	FinSi
	si numero2 > Nmayor Entonces
		Nmayor <- numero2
	FinSi	
	si numero3 > Nmayor Entonces
		Nmayor <- numero3
	FinSi
	si numero4 > Nmayor Entonces
		Nmayor <- numero4
	FinSi
	
	si numero3 mod 2 = 0 Entonces
		Escribir " El cuadrado del segundo numero es :" , numero2^2
	FinSi
	
	si numero1 < numero4 Entonces
		media <- (numero1 + numero2 + numero3 + numero4) /4 
		Escribir " La media de los cuatro numeros es: ", media
	FinSi
	si numero2 > numero3 Entonces
		si numero3 >= 50 y numero3 <= 700 Entonces
		   suma <- numero1 + numero2 + numero3 + numero4 
			Escribir  " El tercero esta entre 50 y 700"
			Escribir  " La suma de los cuatro numeros es: ", suma 
		FinSi
		
	FinSi
	
	Escribir " Cantidad de numeros pares :", pares 
	Escribir " El numero mayor es : ", nmayor 
	
	
	
	
	
FinProceso
