Proceso tarea9
	
	Definir salario, aumento, nuevoSalario Como Real
	
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario
	
    Si salario > 2000 Entonces
        aumento <- salario * 0.05
    SiNo
        aumento <- salario * 0.10
    Fin Si
	
    nuevoSalario <- salario + aumento
	
    Escribir "El aumento es de: $", aumento
    Escribir "El nuevo salario es: $", nuevoSalario
	
	
FinProceso
