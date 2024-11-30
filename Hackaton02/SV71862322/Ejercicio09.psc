Proceso AumentoSueldo
	Escribir "Ingrese el salario del trabajador: "
    Leer salario
	
    Si salario > 2000 Entonces
        aumento <- salario * 0.05
    Sino
        aumento <- salario * 0.10
    FinSi
	
    nuevoSalario <- salario + aumento
    Escribir "El nuevo salario es: $", nuevoSalario
FinProceso
